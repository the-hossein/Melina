export function toPersianNum(num, dontTrim) {
  var i = 0,
    dontTrim = dontTrim || false,
    num = dontTrim ? num.toString() : num.toString().trim(),
    len = num.length,
    res = "",
    pos,
    persianNumbers =
      typeof persianNumber == "undefined"
        ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
        : persianNumbers;

  for (; i < len; i++)
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);

  return res;
}
export const validationPhone = (phoneNum) => {
  if (/^[0]?[9][0-9]{9}$/.test(phoneNum) && phoneNum.length === 11) {
    return false;
  } else return true;
};
export const TypeNumber = (e) => {
  if (!e) {
    e = window.event;
  }

  var code = e.keyCode || e.which;

  if (!e.ctrlKey) {
    if (code > 31 && (code < 48 || code > 57) && (code < 96 || code > 105)) {
      e.preventDefault();
      return false;
    }
  }
  return true;
};

export const persianNumber = (number) => {
  const time = new Number(number).toLocaleString("fa-ir");
  return time;
};

export const convertTimeStr = (mytime, t, lang) => {
  const time = mytime.split(":");
  let h;
  let m;
  let newTime = mytime;
  if (time[0] !== "00" && time[1] !== "00") {
    if (time[0].slice(0, 1) === "0") {
      h = time[0].slice(1, 2);
    } else {
      h = time[0];
    }
    if (time[1].slice(0, 1) === "0") {
      m = time[1].slice(1, 2);
    } else {
      m = time[1];
    }

    if (lang === "fa") {
      newTime =
        persianNumber(h) +
        t("hour") +
        t("and") +
        persianNumber(m) +
        t("minute");
    } else {
      newTime = h + t("hour") + t("and") + m + t("minute");
    }
  }

  if (time[0] !== "00" && time[1] === "00") {
    if (time[0].slice(0, 1) === "0") {
      h = time[0].slice(1, 2);
    } else {
      h = time[0];
    }

    if (lang === "fa") {
      newTime = persianNumber(h) + t("hour");
    } else {
      newTime = h + t("hour");
    }
  }
  if (time[0] === "00" && time[1] !== "00") {
    if (time[1].slice(0, 1) === "0") {
      m = time[1].slice(1, 2);
    } else {
      m = time[1];
    }
    if (lang === "fa") {
      newTime = persianNumber(m) + t("minute");
    } else {
      newTime = m + t("minute");
    }
  }
  return newTime;
};

/**
 *
 * @type {string}
 */
const delimiter = " و ";

/**
 *
 * @type {string}
 */
const zero = "صفر";

/**
 *
 * @type {string}
 */
const negative = "منفی ";

/**
 *
 * @type {*[]}
 */
const letters = [
  ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
  [
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
    "بیست"
  ],
  ["", "", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
  [
    "",
    "یکصد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد"
  ],
  [
    "",
    " هزار",
    " میلیون",
    " میلیارد",
    " بیلیون",
    " بیلیارد",
    " تریلیون",
    " تریلیارد",
    "کوآدریلیون",
    " کادریلیارد",
    " کوینتیلیون",
    " کوانتینیارد",
    " سکستیلیون",
    " سکستیلیارد",
    " سپتیلیون",
    "سپتیلیارد",
    " اکتیلیون",
    " اکتیلیارد",
    " نانیلیون",
    " نانیلیارد",
    " دسیلیون",
    " دسیلیارد"
  ]
];

/**
 * Decimal suffixes for decimal part
 * @type {string[]}
 */
const decimalSuffixes = [
  "",
  "دهم",
  "صدم",
  "هزارم",
  "ده‌هزارم",
  "صد‌هزارم",
  "میلیونوم",
  "ده‌میلیونوم",
  "صدمیلیونوم",
  "میلیاردم",
  "ده‌میلیاردم",
  "صد‌‌میلیاردم"
];

/**
 * Clear number and split to 3 sections
 * @param {*} num
 */
const prepareNumber = (num) => {
  let Out = num;
  if (typeof Out === "number") {
    Out = Out.toString();
  }
  const NumberLength = Out.length % 3;
  if (NumberLength === 1) {
    Out = `00${Out}`;
  } else if (NumberLength === 2) {
    Out = `0${Out}`;
  }
  // Explode to array
  return Out.replace(/\d{3}(?=\d)/g, "$&*").split("*");
};

const threeNumbersToLetter = (num) => {
  // return zero
  if (parseInt(num, 0) === 0) {
    return "";
  }
  const parsedInt = parseInt(num, 0);
  if (parsedInt < 10) {
    return letters[0][parsedInt];
  }
  if (parsedInt <= 20) {
    return letters[1][parsedInt - 10];
  }
  if (parsedInt < 100) {
    const one = parsedInt % 10;
    const ten = (parsedInt - one) / 10;
    if (one > 0) {
      return letters[2][ten] + delimiter + letters[0][one];
    }
    return letters[2][ten];
  }
  const one = parsedInt % 10;
  const hundreds = (parsedInt - (parsedInt % 100)) / 100;
  const ten = (parsedInt - (hundreds * 100 + one)) / 10;
  const out = [letters[3][hundreds]];
  const SecondPart = ten * 10 + one;
  if (SecondPart > 0) {
    if (SecondPart < 10) {
      out.push(letters[0][SecondPart]);
    } else if (SecondPart <= 20) {
      out.push(letters[1][SecondPart - 10]);
    } else {
      out.push(letters[2][ten]);
      if (one > 0) {
        out.push(letters[0][one]);
      }
    }
  }
  return out.join(delimiter);
};

/**
 * Convert Decimal part
 * @param decimalPart
 * @returns {string}
 * @constructor
 */
const convertDecimalPart = (decimalPart) => {
  // Clear right zero
  decimalPart = decimalPart.replace(/0*$/, "");

  if (decimalPart === "") {
    return "";
  }

  if (decimalPart.length > 11) {
    decimalPart = decimalPart.substr(0, 11);
  }
  return (
    " ممیز " +
    Num2persian(decimalPart) +
    " " +
    decimalSuffixes[decimalPart.length]
  );
};

/**
 * Main function
 * @param input
 * @returns {string}
 * @constructor
 */
const Num2persian = (input) => {
  // Clear Non digits
  input = input.toString().replace(/[^0-9.-]/g, "");
  let isNegative = false;
  const floatParse = parseFloat(input);
  // return zero if this isn't a valid number
  if (isNaN(floatParse)) {
    return zero;
  }
  // check for zero
  if (floatParse === 0) {
    return zero;
  }
  // set negative flag:true if the number is less than 0
  if (floatParse < 0) {
    isNegative = true;
    input = input.replace(/-/g, "");
  }

  // Declare Parts
  let decimalPart = "";
  let integerPart = input;
  let pointIndex = input.indexOf(".");
  // Check for float numbers form string and split Int/Dec
  if (pointIndex > -1) {
    integerPart = input.substring(0, pointIndex);
    decimalPart = input.substring(pointIndex + 1, input.length);
  }

  if (integerPart.length > 66) {
    return "خارج از محدوده";
  }

  // Split to sections
  const slicedNumber = prepareNumber(integerPart);
  // Fetch Sections and convert
  const Output = [];
  const SplitLength = slicedNumber.length;
  for (let i = 0; i < SplitLength; i += 1) {
    const SectionTitle = letters[4][SplitLength - (i + 1)];
    const converted = threeNumbersToLetter(slicedNumber[i]);
    if (converted !== "") {
      Output.push(converted + SectionTitle);
    }
  }

  // Convert Decimal part
  if (decimalPart.length > 0) {
    decimalPart = convertDecimalPart(decimalPart);
  }

  return (isNegative ? negative : "") + Output.join(delimiter) + decimalPart;
};

String.prototype.toPersianLetter = function () {
  return Num2persian(this);
};

Number.prototype.toPersianLetter = function () {
  return Num2persian(parseFloat(this).toString());
};
export const convertDate = (oldDate) => {
  let date = oldDate;
  let mydate = date.split("T")[0];
  let timestamp = new Date(mydate).getTime();
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let newDate = new Date(timestamp).toLocaleDateString("fa-IR", options);

  return newDate;
};




export const TypepersianNumber = (e) => {
  var persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g
    ],
    fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };
  return fixNumbers(e);
};
export const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

export default Num2persian;
