import
{
    getRand, getRandInt, getRandRange, getRandIntRange, getBalancedRandRange,
    getElement, getAllElements, sleep, getClamp,
    getZeroRelDelay, getRelDelay,
    invoke, invokeRepeating
} from './Assets/Scripts/helperFunctions.js';

class Button
{
    selector = "";
    element;
    buttonIcon;
    defaultColor;
    hoverColor;
    focusColor;
    isActive;

    // Button constructor
    constructor(_selector, _defaultColor, _hoverColor, _focusColor)
    {
        this.selector = _selector;
        this.element = getElement(_selector);
        this.buttonIcon = getElement(`${_selector} .Button-Icon`);
        this.defaultColor = _defaultColor;
        this.hoverColor = _hoverColor;
        this.focusColor = _focusColor;
        this.isActive = true;

        let $self = this;
        this.element.addEventListener("mouseenter", function() {$self.highlightButton();});
        this.element.addEventListener("mouseleave", function() {$self.unhighlightButton();});
        this.element.addEventListener("mousedown", function() {$self.onPress();});
        this.element.addEventListener("mouseup", function() {$self.onRelease();});
    }
    
    //#region Button Function(s)

    // Add custom event to this button.
    addEvent(event, functionCall)
    {
        this.element.addEventListener(event, functionCall);
    }

    // Enable button.
    enableButton()
    {
        this.isActive = true;
        this.element.style.pointerEvents = "auto";
    }
    
    // Disable button.
    disableButton()
    {
        this.isActive = false;
        this.element.style.pointerEvents = "none";
    }

    // Call event when the mouse cursor is over the button.
    highlightButton()
    {
        if (!this.isActive)
            return;

        const highlightTimeline = gsap.timeline({defaults: {duration: 0.5}});

        highlightTimeline
            .to(this.element, {backgroundColor: this.hoverColor, scale: 1.02, ease: 'power4.out'})
            .to(this.buttonIcon, {duration: 0.25, y: 4, ease: 'power2.in'}, getZeroRelDelay())
            .to(this.buttonIcon, {duration: 0.25, y: -8, ease: 'power2.out'}, getRelDelay(0.25))
            .to(this.buttonIcon, {duration: 0.5, rotationZ: 360, ease: 'power2.out'}, getZeroRelDelay())
            .to(this.buttonIcon, {duration: 0.5, y: 0, ease: 'elastic'})
            .set(this.buttonIcon, {rotationZ: 0});
    }

    // Call event when the mouse cursor is moved out of the button.
    unhighlightButton()
    {
        const unhighlightTimeline = gsap.timeline();

        unhighlightTimeline
            .to(this.element, {duration: 0.5, backgroundColor: this.defaultColor, scale: 1, ease: 'power4.out'});
    }
    
    // Call event when the user presses the button.
    onPress()
    {
        if (!this.isActive)
            return;

        const pressTimeline = gsap.timeline();

        pressTimeline
            .to(this.element, {duration: 0.5, backgroundColor: this.focusColor, scale: 0.96, ease: 'power4.out'});
    }
    
    // Call event when the user releases the button.
    onRelease()
    {
        if (!this.isActive)
            return;

        const releaseTimeline = gsap.timeline();

        releaseTimeline
            .to(this.element, {duration: 0.5, backgroundColor: this.defaultColor, scale: 1, ease: 'power4.out'});
    }
    //#endregion
}

class InputField
{
    selector = "";
    element;
    defaultColor;
    hoverColor;
    focusColor;
    isActive;
    isFocused;
    hoverAnim;
    focusAnim;

    // Input Field constructor
    constructor(_selector)
    {
        this.selector = _selector;
        this.element = getElement(_selector);
        this.isActive = true;
        this.isFocused = false;

        let $self = this;
        this.element.addEventListener("mouseenter", function() {$self.onHover();});
        this.element.addEventListener("mouseleave", function() {$self.offHover();});
        this.element.addEventListener("focus", function() {$self.onFocus();});
        this.element.addEventListener("blur", function() {$self.onBlur();});

        this.hoverAnim = gsap.to(this.element,
        {
            duration: 0.25,
            paused: true,
            borderColor: 'rgba(0, 163, 255, 1)',
            outlineColor: 'rgba(0, 163, 255, 0.2)',
            outlineWidth: '8px'
        });

        this.focusAnim = gsap.to(this.element,
        {
            duration: 0.25,
            paused: true,
            borderColor: 'rgba(0, 113, 227, 1)',
            outlineWidth: '8px'
        });
    }
    
    //#region Input Field Function(s)
    addEvent(event, functionCall)
    {
        this.element.addEventListener(event, functionCall);
    }

    // Get value displayed in input field.
    getValue()
    {
        return this.element.value;
    }

    // Enable input field.
    enableInputField()
    {
        this.isActive = true;
        this.element.style.pointerEvents = "auto";
    }
    
    // Disable input field.
    disableInputField()
    {
        this.isActive = false;
        this.element.style.pointerEvents = "none";
    }

    // Call event when the mouse cursor is over the input field.
    onHover()
    {
        if (!this.isActive || this.isFocused)
            return;
        
        this.hoverAnim.play();
    }

    // Call event when the mouse cursor is moved out of the input field.
    offHover()
    {
        if (!this.isActive || this.isFocused)
            return;

        this.hoverAnim.reverse();
    }

    // Call event when the input field receives focus (i.e. the user has clicked on the input field).
    onFocus()
    {
        this.isFocused = true;
        this.focusAnim.play();
    }
    
    // Call event when the input field loses focus (i.e. the user has clicked outside the input field).
    onBlur()
    {
        this.isFocused = false;
        this.focusAnim.reverse();
        this.offHover();
    }
    //#endregion
}

//#region Variables
const salaryField = new InputField(".Salary-Field");
const hoursPerWeekField = new InputField(".Hours-Per-Week-Field");
const weeksPerYearField = new InputField(".Weeks-Per-Year-Field");
const calculateButton = new Button(".Calculate-Button", "#0071e3", "#00A3FF", "#004fbd");

const hourlyPayAmount = getElement(".Hourly-Pay .Amount");
const monthlyPayAmount = getElement(".Monthly-Pay .Amount");
const weeklyPayAmount = getElement(".Weekly-Pay .Amount");
const percentUSMedianSalaryAmount = getElement(".Percent-US-Median-Salary .Amount");

const USMedianSalary = 59228;
//#endregion

function Main()
{
    // Add calculateResults function to this button's onclick event.
    calculateButton.addEvent("click", calculateResults);
}

function onHoverInputField(inputField)
{
    const hoverTimeline = gsap.timeline({defaults: {duration: 0.25, ease: 'none'}});

    hoverTimeline
        .to(inputField, {borderColor: 'rgba(39, 207, 217, 1)'})
        .to(inputField, {outlineWidth: '8px'}, getZeroRelDelay());
}

function calculateResults()
{
    let hourlyPayAmountText, monthlyPayAmountText, weeklyPayAmountText, percentUSMedianSalaryAmountText;

    let hourlyPay = calculateHourlyPay();
    let monthlyPay = calculateMonthlyPay();
    let weeklyPay = calculateWeeklyPay();
    let percentOfUSMedianSalary = calculatePercentOfUSMedianSalary();

    hourlyPayAmount.innerHTML = `$${hourlyPay}`;
    monthlyPayAmount.innerHTML = `$${monthlyPay}`;
    weeklyPayAmount.innerHTML = `$${weeklyPay}`;
    percentUSMedianSalaryAmount.innerHTML = `${percentOfUSMedianSalary}%`;
}

function calculateHourlyPay()
{
    let salary = salaryField.getValue();                        // Salary per year
    let hoursPerWeek = hoursPerWeekField.getValue();            // Hours worked per week
    let weeksPerYear = weeksPerYearField.getValue();            // Weeks worked per year

    const rawResult = salary / (hoursPerWeek * weeksPerYear);

    // Round up/down hourly pay by 2 decimal places.
    const result = Math.round(rawResult * 100) / 100;
    console.log(`Hourly Pay: $${result}`);
    return result;
}

function calculateMonthlyPay()
{
    let salary = salaryField.getValue();                        // Salary per year
    const numOfMonths = 12;                                     // Total number of months in a year.

    const rawResult = salary / numOfMonths;

    // Round up/down monthly pay by 2 decimal places.
    const result = Math.round(rawResult * 100) / 100;
    console.log(`Monthly Pay: $${result}`);
    return result;
}

function calculateWeeklyPay()
{
    let salary = salaryField.getValue();                        // Salary per year
    let weeksPerYear = weeksPerYearField.getValue();            // Weeks worked per year

    const rawResult = salary / weeksPerYear;

    // Round up/down weekly pay by 2 decimal places.
    const result = Math.round(rawResult * 100) / 100;
    console.log(`Weekly Pay: $${result}`);
    return result;
}

function calculatePercentOfUSMedianSalary()
{
    let salary = salaryField.getValue();                        // Salary per year

    const rawResult = (salary / USMedianSalary) * 100;

    // Round up/down % of US median salary by 1 decimal place.
    const result = Math.round(rawResult * 10) / 10;
    console.log(`% of US Median Salary: ${result}%`);
    return result;
}

function shuffleText(text, prefix, suffix)
{
    var a = text.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    return a.join("");
}

Main();