module.exports.returnLanguageFormFields = function(language) {
  let languages = {
    legend: "Languages",
    select: {
      id: "language_filter",
      class: "language-filter",
      name: "language",
      options: [
        {
          option: {
            value: "",
            text: "Pick a language"
          }
        },
        {
          option: {
            value: "english",
            text: "English"
          }
        },
        {
          option: {
            value: "spanish",
            text: "Spanish"
          }
        },
        {
          option: {
            value: "chinese",
            text: "Chinese"
          }
        },
        {
          option: {
            value: "french",
            text: "French"
          }
        },
        {
          option: {
            value: "german",
            text: "German"
          }
        },
        {
          option: {
            value: "farsi",
            text: "Farsi"
          }
        },
        {
          option: {
            value: "afrikaans",
            text: "Afrikaans"
          }
        },
        {
          option: {
            value: "asl",
            text: "American Sign Language"
          }
        },
        {
          option: {
            value: "amharic",
            text: "Amharic"
          }
        },
        {
          option: {
            value: "arabic",
            text: "Arabic"
          }
        },
        {
          option: {
            value: "aramaic",
            text: "Aramaic"
          }
        },
        {
          option: {
            value: "armenian",
            text: "Armenian"
          }
        },
        {
          option: {
            value: "assyrian",
            text: "Assyrian"
          }
        },
        {
          option: {
            value: "azeri",
            text: "Azeri"
          }
        },
        {
          option: {
            value: "bahasa",
            text: "Bahasa"
          }
        },
        {
          option: {
            value: "bengali",
            text: "Bangla/Bengali"
          }
        },
        {
          option: {
            value: "bosnian",
            text: "Bosnian"
          }
        },
        {
          option: {
            value: "bulgarian",
            text: "Bulgarian"
          }
        },
        {
          option: {
            value: "burmese",
            text: "Burmese"
          }
        },
        {
          option: {
            value: "cambodian",
            text: "Cambodian"
          }
        },
        {
          option: {
            value: "cantonese",
            text: "Cantonese"
          }
        },
        {
          option: {
            value: "chaldean",
            text: "Chaldean"
          }
        },
        {
          option: {
            value: "chiu-chow",
            text: "Chiu Chow"
          }
        },
        {
          option: {
            value: "creole",
            text: "Creole"
          }
        },
        {
          option: {
            value: "croatian",
            text: "Croatian"
          }
        },
        {
          option: {
            value: "czech",
            text: "Czech"
          }
        },
        {
          option: {
            value: "danish",
            text: "Danish"
          }
        },
        {
          option: {
            value: "dari",
            text: "Dari"
          }
        },
        {
          option: {
            value: "dutch",
            text: "Dutch"
          }
        },
        {
          option: {
            value: "east-indian",
            text: "East Indian"
          }
        },
        {
          option: {
            value: "estonian",
            text: "Estonian"
          }
        },
        {
          option: {
            value: "finnish",
            text: "Finnish"
          }
        },
        {
          option: {
            value: "fujianese",
            text: "Fujianese"
          }
        },
        {
          option: {
            value: "fukien",
            text: "Fukien Chinese Dialect"
          }
        },
        {
          option: {
            value: "greek",
            text: "Greek"
          }
        },
        {
          option: {
            value: "gujarati",
            text: "Gujarati"
          }
        },
        {
          option: {
            value: "hebrew",
            text: "Hebrew"
          }
        },
        {
          option: {
            value: "hindi",
            text: "Hindi"
          }
        },
        {
          option: {
            value: "hmong",
            text: "Hmong"
          }
        },
        {
          option: {
            value: "hungarian",
            text: "Hungarian"
          }
        },
        {
          option: {
            value: "ibo",
            text: "Ibo"
          }
        },
        {
          option: {
            value: "icelandic",
            text: "Icelandic"
          }
        },
        {
          option: {
            value: "ilacano",
            text: "Ilacano"
          }
        },
        {
          option: {
            value: "ilocano",
            text: "Ilocano"
          }
        },
        {
          option: {
            value: "indian",
            text: "Indian"
          }
        },
        {
          option: {
            value: "indonesian",
            text: "Indonesian"
          }
        },
        {
          option: {
            value: "iranian",
            text: "Iranian"
          }
        },
        {
          option: {
            value: "gaelic",
            text: "Irish Gaelic"
          }
        },
        {
          option: {
            value: "israeli",
            text: "Israeli"
          }
        },
        {
          option: {
            value: "italian",
            text: "Italian"
          }
        },
        {
          option: {
            value: "japanese",
            text: "Japanese"
          }
        },
        {
          option: {
            value: "kannada",
            text: "Kannada"
          }
        },
        {
          option: {
            value: "karuk",
            text: "Karuk"
          }
        },
        {
          option: {
            value: "korean",
            text: "Korean"
          }
        },
        {
          option: {
            value: "latvian",
            text: "Latvian"
          }
        },
        {
          option: {
            value: "lithuanian",
            text: "Lithuanian"
          }
        },
        {
          option: {
            value: "macedonian",
            text: "Macedonian"
          }
        },
        {
          option: {
            value: "malay",
            text: "Malay"
          }
        },
        {
          option: {
            value: "malayalan",
            text: "Malayalan"
          }
        },
        {
          option: {
            value: "mandarin",
            text: "Mandarin"
          }
        },
        {
          option: {
            value: "marathi",
            text: "Marathi"
          }
        },
        {
          option: {
            value: "melayu",
            text: "Melayu"
          }
        },
        {
          option: {
            value: "mien",
            text: "Mien"
          }
        },
        {
          option: {
            value: "other",
            text: "Other"
          }
        },
        {
          option: {
            value: "other-chinese",
            text: "Other Chinese"
          }
        },
        {
          option: {
            value: "pakistani",
            text: "Pakistani"
          }
        },
        {
          option: {
            value: "pampangan",
            text: "Pampangan"
          }
        },
        {
          option: {
            value: "pangasinan",
            text: "Pangasinan"
          }
        },
        {
          option: {
            value: "panjabi",
            text: "Panjabi"
          }
        },
        {
          option: {
            value: "pashto",
            text: "Pashto"
          }
        },
        {
          option: {
            value: "persian",
            text: "Persian"
          }
        },
        {
          option: {
            value: "polish",
            text: "Polish"
          }
        },
        {
          option: {
            value: "portuguese",
            text: "Portuguese"
          }
        },
        {
          option: {
            value: "punjabi",
            text: "Punjabi"
          }
        },
        {
          option: {
            value: "romanian",
            text: "Romanian"
          }
        },
        {
          option: {
            value: "russian",
            text: "Russian"
          }
        },
        {
          option: {
            value: "samoan",
            text: "Samoan"
          }
        },
        {
          option: {
            value: "serbian",
            text: "Serbian"
          }
        },
        {
          option: {
            value: "shanghainese",
            text: "Shanghainese"
          }
        },
        {
          option: {
            value: "si-up",
            text: "Si Up"
          }
        },
        {
          option: {
            value: "slovak",
            text: "Slovak"
          }
        },
        {
          option: {
            value: "swahili",
            text: "Swahili"
          }
        },
        {
          option: {
            value: "swedish",
            text: "Swedish"
          }
        },
        {
          option: {
            value: "tagalog",
            text: "Tagalog"
          }
        },
        {
          option: {
            value: "tagalog-filipino",
            text: "Tagalog/Filipino"
          }
        },
        {
          option: {
            value: "taishun",
            text: "Taishun"
          }
        },
        {
          option: {
            value: "taiwanese",
            text: "Taiwanese"
          }
        },
        {
          option: {
            value: "tamil",
            text: "Tamil"
          }
        },
        {
          option: {
            value: "telugu",
            text: "Telugu"
          }
        },
        {
          option: {
            value: "thai",
            text: "Thai"
          }
        },
        {
          option: {
            value: "tigrigna",
            text: "Tigrigna"
          }
        },
        {
          option: {
            value: "toi-san",
            text: "Toi San Dialect"
          }
        },
        {
          option: {
            value: "toisanese",
            text: "Toisanese"
          }
        },
        {
          option: {
            value: "turkish",
            text: "Turkish"
          }
        },
        {
          option: {
            value: "ukranian",
            text: "Ukranian"
          }
        },
        {
          option: {
            value: "urdu",
            text: "Urdu"
          }
        },
        {
          option: {
            value: "vietnamese",
            text: "Vietnamese"
          }
        },
        {
          option: {
            value: "Visayan/Cebuano",
            text: "Visayan/Cebuano"
          }
        },
        {
          option: {
            value: "Yiddish",
            text: "Yiddish"
          }
        },
        {
          option: {
            value: "Yugoslavian",
            text: "Yugoslavian"
          }
        }
      ]
    }
  };

  if (language) {
    var i, l = languages.select.options.length;

    for (i = 0; i < l; i++) {
      if (languages.select.options[i].option.value === language) {
        languages.select.options[i].option.valuelessAttribute = "selected";
      }
    }
  }

  return languages;
};
