var exam_data = JSON.parse(sessionStorage.getItem("exam_data"));
var arr = [];
var fivoret_type = "";
var page_lang = document.getElementsByTagName('html')[0].getAttribute('lang');


if (exam_data['correct_tf_question'] > exam_data['correct_mc_question']) {

        if (page_lang  == 'Ar') {
            fivoret_type = "اسئلة الصح/الخطا";
            arr = [
                {
                    'q': "في لغة PHP لطباعة أي معلومات على شاشة المستعرض نستخدم Echo  ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "في لغة PHP المتغير من النوع Double يمكن تخزين بيانات عددية وتقبل الكسور العشرية",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "الثوابت  مخزن في الذاكرة يحدد له اسم ونوع ويخصص له قيمه ثابتة لا تتغير اثناء سير البرنامج",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "تستخدم كلمة Define لتعريف المتغير ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "يمكن عرض وترجمة الكود الخاص بلغة الترميز من خلال احد مستعرضات الانترنت مثل Note bad ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "تنتهي كل جملة في لغة PHP بعلامة ';'     ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "لكتابة كود في لغة PHP بدون ان يترجم او ينفذ يسبق بعلامة '//' .     ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "معامل باقي القسمة هو %  .",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "من علامات المقارنة في لغة PHP  وتعني لا تساوي  .  ? ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "تستخدم جملة Print كأحد العبارات الشرطية في لغة PHP .",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "القيمة Post  يتم استخدامها في إرسال كلمات سر أو أي بيانات هامة",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "هناك ثلاث متطلبات أساسية للاتصال بقاعدة البيانات منها اسم قاعدة البيانات .",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "طريقة Post لها حد اقصى للبيانات المستخدمة تصل الي MB 8 ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "لكتابة كود في لغناتج العملية الحسابية الاتية 10 % 3  هو 1 ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "نوع بيانات يستخدم لتخزين البيانات المنطقية String ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "يستخدم ال Tag    <div> انشاء مقطع بالصفحة  ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "يتكون اسم المتغير من جميع الإجابات صحيحة ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
                }
                , {
                    'q': "يمكن كتابة كود Html  باستخدام احد برامج معالجة النصوص مثل WordPad ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': " https://www.youtube.com/embed/6XqmOTwZC_0"
                }
                , {
                    'q': "الأوامر Tags  في لغة الترميز HTML توضح بين '  '   . ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
                }
                , {
                    'q': "لعمل محاذاة للمين  للنص في لغة HTML نستخدم الكود < p align = 'Center' >  .",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/6XqmOTwZC_0"
                }

            ];
        } else {
            fivoret_type = "TF Questions";
            arr = [
                {
                    'q': "In PHP language to print any information on the browser screen we use Echo.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "In double type variable PHP language, numerical data can be stored and decimal fractures accepted.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Constants are stored in memory for which a name and type are identified and allocated with constant values that do not change during the course of the program ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Define is used to define the variable.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Code in coding language can be viewed and translated through an Internet browser such as Note Bad.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Each PHP sentence ends with the sign ';' ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "To write a code in the PHP language without translating or executing before the '//' sign. ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "The rest of the division coefficient is% . ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "A comparison mark in PHP means not equal. ?  ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "The Print sentence is used as one of the conditional phrases in PHP language. ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                
                , {
                    'q': "Value Post is used to send passwords or any important data.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "There are three basic requirements to connect to the database, including the name of the database. ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "Post method has maximum data usage up to MB 8 .  ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "The result of the calculation of 10% 3 is 1 ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "Data type used to store logical data String ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "The Tag < div > uses to create a segment on the page",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "The name of the variable consists of all correct answers ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
                }
                , {
                    'q': "Html code can be written using one of the text processing software such as WordPad ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': " https://www.youtube.com/embed/6XqmOTwZC_0"
                }
                , {
                    'q': 'Commands Tags in HTML coding language clarify between "". ',
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
                }
                , {
                    'q': 'To make a lean alignment of the text in the HTML language we use the code < p align = "Center" >.  ',
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/6XqmOTwZC_0"
                }

            ];
        }

} else if (exam_data['correct_tf_question'] < exam_data['correct_mc_question']) {
  
    if ( page_lang  == 'Ar') {
        fivoret_type = "اسئلة الاختيار المتعدد";
        arr = [
            {
                'q': "في لغة PHP لطباعة أي معلومات على شاشة المستعرض نستخدم .................",
                'ans': ['output', 'Read', 'Input', 'Echo'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "في لغة PHP المتغير من النوع Double يمكن تخزين بيانات.........................",
                'ans': ['عددية وتقبل الكسور العشرية', 'حرفي', 'منطقي', 'كائن'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "............. مخزن في الذاكرة يحدد له اسم ونوع ويخصص له قيمه ثابتة لا تتغير اثناء سير البرنامج",
                'ans': ['الجرفي', 'جملة التخصيص', 'المتغيرات ', 'الثوابت'],
                'type_of_question': 'mc',
                'coanswer': "c",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "تستخدم كلمة Define لتعريف",
                'ans': ['المتغير ', 'القيمة', 'الثابت', 'حملة التخصص'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/nnwg4orUr6I"
            }
            , {
                'q': "يمكن عرض وترجمة الكود الخاص بلغة الترميز من خلال احد مستعرضات الانترنت مثل.........",
                'ans': ['Microsoft Word', 'Internet Explorer', 'Note bad', 'vs code'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "تنتهي كل جملة في لغة PHP بعلامة",
                'ans': ['|', '.', ';', '/'],
                'type_of_question': 'mc',
                'coanswer': "c",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "لكتابة كود في لغة PHP بدون ان يترجم او ينفذ يسبق بعلامة ..........",
                'ans': ['//', '.', '*', ';'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "معامل باقي القسمة هو ....................",
                'ans': ['-', '+', '*', '%'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "من علامات المقارنة في لغة PHP  وتعني لا تساوي ...........",
                'ans': ['?', '=!', '<', '=='],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "جملة .................تستخدم كأحد العبارات الشرطية في لغة PHP",
                'ans': ['for', 'Print', 'Echo', 'switch'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
    
    
            , {
                'q': "القيمة ..................... يتم استخدامها في إرسال كلمات سر أو أي بيانات هامة ",
                'ans': ['Post', 'Get', 'القيمة Post والقيمة Get', 'Request'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "هناك ثلاث متطلبات أساسية للاتصال بقاعدة البيانات منها ............",
                'ans': ['Echo', 'اسم قاعدة البيانات', 'switch', 'for'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "طريقة Post لها حد اقصى للبيانات المستخدمة تصل الي ……. ",
                'ans': ['15 MB', 'MB265', '7607 حرف', ' MB 8 '],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "ناتج العملية الحسابية الاتية 10 % 3  هو .............",
                'ans': ['5', '1', '9', '0'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "نوع بيانات يستخدم لتخزين البيانات المنطقية ",
                'ans': ['char', 'Integer', 'String', 'Boolean'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
    
    
            , {
                'q': "يستخدم ال Tag  ................ لانشاء مقطع بالصفحة ",
                'ans': ['<div>', 'If', 'Html', '<hr>'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "يتكون اسم المتغير من ..............",
                'ans': ['جميع الإجابات صحيحة ', 'احرف ', 'علامة "_ "', 'ارقام'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
            }
            , {
                'q': "يمكن كتابة كود Html  باستخدام احد برامج معالجة النصوص مثل.............",
                'ans': ['MS Word', 'جميع الإجابات صحيحة ', 'WordPad', 'vs code'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': " https://www.youtube.com/embed/6XqmOTwZC_0"
            }
            , {
                'q': "الأوامر Tags  في لغة الترميز HTML توضح بين .............",
                'ans': [', ,', '"  " ', '<  >', '/ /'],
                'type_of_question': 'mc',
                'coanswer': "c",
                'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
            }
            , {
                'q': "لعمل محاذاة للمين  للنص في لغة HTML نستخدم الكود ...............",
                'ans': ['< p align = "right" >', '< p align = "Center" >', '< p align = "Left" >', '<p align="end">'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/6XqmOTwZC_0"
            }
    
    
        ];
    }else{
        fivoret_type = "MCQ Questions";
        arr = [
            {
                'q': "In PHP language to print any information on the browser screen we .................",
                'ans': ['output', 'Read', 'Input', 'Echo'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "In double type variable PHP language can be store  ........................",
                'ans': ['Numerical and Acceptable Decimal Fractures', 'literally', 'logical', 'object'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': ".............  are stored in memory for which a name and type are identified and allocated with constant values that do not change during the course of the program ",
                'ans': ['variables', 'string', 'Constants ', 'the allocation'],
                'type_of_question': 'mc',
                'coanswer': "c",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "Define is used to define the......",
                'ans': ['value ', 'constants', 'variables', 'string'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/nnwg4orUr6I"
            }
            , {
                'q': "Code in coding language can be viewed and translated through an Internet browser such as ........",
                'ans': ['Microsoft Word', 'Internet Explorer', 'Note bad', 'vs code'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }


            , {
                'q': "Each PHP sentence ends with the sign ",
                'ans': ['|', '.', ';', '/'],
                'type_of_question': 'mc',
                'coanswer': "c",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "To write a code in the PHP language without translating or executing before the ..........",
                'ans': ['//', '.', '*', ';'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "The rest of the division coefficient is ....................",
                'ans': ['-', '+', '*', '%'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "A comparison mark in PHP means not equal is...........",
                'ans': ['?', '!=', '<', '=='],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "The .............. sentence is used as one of the conditional phrases in PHP language",
                'ans': ['for', 'Print', 'Echo', 'switch'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
    

            , {
                'q': "Value .......... is used to send passwords or any important data ",
                'ans': ['Post', 'Get', ' Post & Get', 'Request'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "There are three basic requirements to connect to the database, including the ............",
                'ans': ['Echo', 'the name of the database', 'switch', 'for'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "Post method has maximum data usage up to ……. ",
                'ans': ['15 MB', '265 MB', '7607 letter', ' MB 8 '],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "The result of the calculation of 10% 3 is .............",
                'ans': ['5', '1', '9', '0'],
                'type_of_question': 'mc',
                'coanswer': "b",
                'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
            }
            , {
                'q': "Data type used to store logical data .....",
                'ans': ['char', 'Integer', 'String', 'Boolean'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
    

            , {
                'q': "The Tag ........ uses to create a segment on the page ",
                'ans': ['< div >', 'If', 'Html', '< hr >'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
            }
            , {
                'q': "The name of the variable consists of ..............",
                'ans': ['letters ', 'numbers ', 'sign"_" ', 'all of the above'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
            }
            , {
                'q': "Html code can be written using one of the text processing software such as ............",
                'ans': ['MS Word', 'WordPad', 'vs code', 'all of the above'],
                'type_of_question': 'mc',
                'coanswer': "d",
                'url': " https://www.youtube.com/embed/6XqmOTwZC_0"
            }
            , {
                'q': "Commands Tags in HTML coding language clarify between .............",
                'ans': [', ,', '"  " ', '<  >', '/ /'],
                'type_of_question': 'mc',
                'coanswer': "c",
                'url': "https://www.youtube.com/embed/6XqmOTwZC_0 "
            }
            , {
                'q': "To make a lean alignment of the text in the HTML language we use the code ...............",
                'ans': ['< p align = "right" >', '< p align = "Center" >', '< p align = "Left" >', '< p align="end" >'],
                'type_of_question': 'mc',
                'coanswer': "a",
                'url': "https://www.youtube.com/embed/6XqmOTwZC_0"
            }
    
    
        ];
    }
    
} else {

      
        if ( page_lang  == 'Ar') {
            fivoret_type = "الصح/الخطا والاختياري المتعدد";
            arr = [
                {
                    'q': "في لغة PHP لطباعة أي معلومات على شاشة المستعرض نستخدم Echo  ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "في لغة PHP المتغير من النوع Double يمكن تخزين بيانات عددية وتقبل الكسور العشرية",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "الثوابت  مخزن في الذاكرة يحدد له اسم ونوع ويخصص له قيمه ثابتة لا تتغير اثناء سير البرنامج",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "تستخدم كلمة Define لتعريف المتغير ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "يمكن عرض وترجمة الكود الخاص بلغة الترميز من خلال احد مستعرضات الانترنت مثل Note bad ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "تنتهي كل جملة في لغة PHP بعلامة ';'     ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "لكتابة كود في لغة PHP بدون ان يترجم او ينفذ يسبق بعلامة '//' .     ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "معامل باقي القسمة هو %  .",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "من علامات المقارنة في لغة PHP  وتعني لا تساوي  .  ? ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "تستخدم جملة Print كأحد العبارات الشرطية في لغة PHP .",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                },
                // mcq

                {
                    'q': "في لغة PHP لطباعة أي معلومات على شاشة المستعرض نستخدم .................",
                    'ans': ['output', 'Read', 'Input', 'Echo'],
                    'type_of_question': 'mc',
                    'coanswer': "d",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "في لغة PHP المتغير من النوع Double يمكن تخزين بيانات.........................",
                    'ans': ['عددية وتقبل الكسور العشرية', 'حرفي', 'منطقي', 'كائن'],
                    'type_of_question': 'mc',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "............. مخزن في الذاكرة يحدد له اسم ونوع ويخصص له قيمه ثابتة لا تتغير اثناء سير البرنامج",
                    'ans': ['الجرفي', 'جملة التخصيص', 'المتغيرات ', 'الثوابت'],
                    'type_of_question': 'mc',
                    'coanswer': "c",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "تستخدم كلمة Define لتعريف",
                    'ans': ['المتغير ', 'القيمة', 'الثابت', 'حملة التخصص'],
                    'type_of_question': 'mc',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/nnwg4orUr6I"
                }
                , {
                    'q': "يمكن عرض وترجمة الكود الخاص بلغة الترميز من خلال احد مستعرضات الانترنت مثل.........",
                    'ans': ['Microsoft Word', 'Internet Explorer', 'Note bad', 'vs code'],
                    'type_of_question': 'mc',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "تنتهي كل جملة في لغة PHP بعلامة",
                    'ans': ['|', '.', ';', '/'],
                    'type_of_question': 'mc',
                    'coanswer': "c",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "لكتابة كود في لغة PHP بدون ان يترجم او ينفذ يسبق بعلامة ..........",
                    'ans': ['//', '.', '*', ';'],
                    'type_of_question': 'mc',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "معامل باقي القسمة هو ....................",
                    'ans': ['-', '+', '*', '%'],
                    'type_of_question': 'mc',
                    'coanswer': "d",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "من علامات المقارنة في لغة PHP  وتعني لا تساوي ...........",
                    'ans': ['?', '=!', '<', '=='],
                    'type_of_question': 'mc',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "جملة .................تستخدم كأحد العبارات الشرطية في لغة PHP",
                    'ans': ['for', 'Print', 'Echo', 'switch'],
                    'type_of_question': 'mc',
                    'coanswer': "d",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }


            ];
        } else {
            fivoret_type = "TF and MCQ Questions";
            arr = [
                {
                    'q': "In PHP language to print any information on the browser screen we use Echo.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "In double type variable PHP language, numerical data can be stored and decimal fractures accepted.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Constants are stored in memory for which a name and type are identified and allocated with constant values that do not change during the course of the program ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Define is used to define the variable.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Code in coding language can be viewed and translated through an Internet browser such as Note Bad.",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Each PHP sentence ends with the sign ';' ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "To write a code in the PHP language without translating or executing before the '//' sign. ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "The rest of the division coefficient is% . ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "A comparison mark in PHP means not equal. ?  ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "The Print sentence is used as one of the conditional phrases in PHP language. ",
                    'ans': ['true', 'false'],
                    'type_of_question': 'tf',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                },
                // mcq
                {
                    'q': "In PHP language to print any information on the browser screen we .................",
                    'ans': ['output', 'Read', 'Input', 'Echo'],
                    'type_of_question': 'mc',
                    'coanswer': "d",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "In double type variable PHP language can be store  ........................",
                    'ans': ['Numerical and Acceptable Decimal Fractures', 'literally', 'logical', 'object'],
                    'type_of_question': 'mc',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': ".............  are stored in memory for which a name and type are identified and allocated with constant values that do not change during the course of the program ",
                    'ans': ['variables', 'string', 'Constants ', 'the allocation'],
                    'type_of_question': 'mc',
                    'coanswer': "c",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Define is used to define the......",
                    'ans': ['value ', 'constants', 'variables', 'string'],
                    'type_of_question': 'mc',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/nnwg4orUr6I"
                }
                , {
                    'q': "Code in coding language can be viewed and translated through an Internet browser such as ........",
                    'ans': ['Microsoft Word', 'Internet Explorer', 'Note bad', 'vs code'],
                    'type_of_question': 'mc',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "Each PHP sentence ends with the sign ",
                    'ans': ['|', '.', ';', '/'],
                    'type_of_question': 'mc',
                    'coanswer': "c",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "To write a code in the PHP language without translating or executing before the ..........",
                    'ans': ['//', '.', '*', ';'],
                    'type_of_question': 'mc',
                    'coanswer': "a",
                    'url': "https://www.youtube.com/embed/GnEjTvD-x-Y"
                }
                , {
                    'q': "The rest of the division coefficient is ....................",
                    'ans': ['-', '+', '*', '%'],
                    'type_of_question': 'mc',
                    'coanswer': "d",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "A comparison mark in PHP means not equal is...........",
                    'ans': ['?', '!=', '<', '=='],
                    'type_of_question': 'mc',
                    'coanswer': "b",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
                , {
                    'q': "The .............. sentence is used as one of the conditional phrases in PHP language",
                    'ans': ['for', 'Print', 'Echo', 'switch'],
                    'type_of_question': 'mc',
                    'coanswer': "d",
                    'url': "https://www.youtube.com/embed/M1xBBTe1XcQ"
                }
        
    


            ];

        }
}

var que_mark = document.getElementById('que-mark');
var answers;

if (page_lang == 'Ar') {
    answers = ["صح", "خطاء"];
    que_mark.style.right = "-10%";
} else {
    answers = ["true", "false"];
    que_mark.style.left = "-10%";
}

var question_span = document.getElementById('question');
var next_btn = document.getElementById('next-btn');
var prev_btn = document.getElementById('prev-btn');
var question_selector = document.getElementById('question_selector');
var div_box_buttons = document.getElementById('box_buttons');
var answer_div_inputs = document.getElementById('answer_div');


var user_answer_array = [];
var inputs_array = [];
var box_buttons = "";
var exam_time_in_secand = 3600;// 10 minutes 
let quection_counter = 0;
var start_date = "";
var interval;

function load_frist_question() {
    start_date = get_time();
    color_box();
    load_side_boxes();
    load_question(0);
    interval = setInterval(setTime, 1000);
    next_btn.disabled = false;
    prev_btn.disabled = true;
}

function load_side_boxes() {
    arr.forEach((element, index) => {
        div_box_buttons.innerHTML += `<button onclick='side_button_action(this.value)' value='${index}'>${index + 1}</button>`;
        user_answer_array[index] = -1;
    });
    box_buttons = document.querySelectorAll('#box_buttons button')
}

function next_question() {
    save_answer();
    quection_counter++;
    load_question(quection_counter);
    nextCheck();
    if (quection_counter == 0) {

        prev_btn.disabled = true;
    } else {
        prev_btn.disabled = false;

    }
    next_btn.disabled = false;
    if (quection_counter == arr.length - 1) {

        prev_btn.disabled = false;
        next_btn.disabled = true;
    }
    color_box();

}

function previous_question() {
    save_answer();
    quection_counter = quection_counter - 1;
    load_question(quection_counter);
    pevCheck();
    next_btn.disabled = false;
    if (quection_counter == 0) {
        next_btn.disabled = false;
        prev_btn.disabled = true;
    }
    color_box();
}

function load_question(question_number) {

    // save_answer(question_number-1);
    quection_counter = question_number;
    prev_btn.disabled = false;
    next_btn.disabled = false;


    question_span.innerHTML = "";
    answer_div_inputs.innerHTML = "";
    arr.forEach((element, index) => {
        if (question_number == index) {
            question_selector.innerHTML = element["q"];
            element["ans"].forEach((inside_element, inside_index) => {
                if (element["ans"].length == 4) {
                    answer_div_inputs.innerHTML += `<div><input type="radio" name="q-answers" id="q${inside_index}" value="${String.fromCharCode(97 + inside_index)}" aria-details ="multiple-question"> <label for="q${inside_index}" id="lable-a">${inside_element}</label></div>`;

                } else {
                    answer_div_inputs.innerHTML += `<div><input type="radio" name="q-answers" id="q${inside_index}" value="${String.fromCharCode(97 + inside_index)}" aria-details ="tf-question"> <label for="q${inside_index}" id="lable-a">${answers[inside_index]}</label></div>`;
                    inputs_array = document.querySelectorAll(".answers div input");
                }

            })
            inputs_array = document.querySelectorAll(".answers div input");
        }
    })
    if (question_number == 0) {
        prev_btn.disabled = true;
    }
    if (question_number == arr.length - 1) {
        next_btn.disabled = true;
    }
    var qnumber = parseInt(question_number) + 1;

    if (page_lang == 'Ar') {
        question_span.innerHTML = ` السؤال(${qnumber}) `;

    } else {

        question_span.innerHTML = ` Quetion(${qnumber}) `;

    }
    color_box();

}

function side_button_action(num_of_question) {
    save_answer();
    load_question(num_of_question);

}

function save_answer() {
    inputs_array.forEach(element => {
        if (element.checked) {
            user_answer_array[quection_counter] = element.value;
        }
    });
    unchecked_inputs();
}

function unchecked_inputs() {
    inputs_array.forEach(element => {
        if (element.checked) {
            element.checked = false;
        }
    });
}

function color_box() {
    user_answer_array.forEach((element, index) => {
        if (element != -1) {
            box_buttons[index].style.backgroundColor = "var(--main-color)";
            box_buttons[index].style.color = "var(--whait-color)";
        }
    });
}

function nextCheck() {
    //rechecks answers when revisiting them
    if (inputs_array.length == 4) {
        switch (user_answer_array[quection_counter]) {
            case "a":
                inputs_array[0].checked = true;
                break;
            case "b":
                inputs_array[1].checked = true;
                break;
            case "c":
                inputs_array[2].checked = true;
                break;
            case "d":
                inputs_array[3].checked = true;
        }
    } else {
        switch (user_answer_array[quection_counter]) {
            case "a":
                inputs_array[0].checked = true;
                break;
            case "b":
                inputs_array[1].checked = true;
                break;
        }

    }
    //rechecks answers when revisiting them


}

function pevCheck() {       //rechecks answers when revisiting them
    if (inputs_array.length == 4) {
        switch (user_answer_array[quection_counter]) {
            case "a":
                inputs_array[0].checked = true;
                break;
            case "b":
                inputs_array[1].checked = true;
                break;
            case "c":
                inputs_array[2].checked = true;
                break;
            case "d":
                inputs_array[3].checked = true;
        }
    } else {
        switch (user_answer_array[quection_counter]) {
            case "a":
                inputs_array[0].checked = true;
                break;
            case "b":
                inputs_array[1].checked = true;
                break;
        }
    }
}

function finshed_button() {
    save_answer();
    clearInterval(interval);
    var score = calc_score();
    var time_tacken_en = pad(parseInt((exam_time_in_secand - totalSeconds) / 60)) + " min " + pad((exam_time_in_secand - totalSeconds) % 60) + " sec";
    var time_tacken_ar = pad(parseInt((exam_time_in_secand - totalSeconds) / 60)) + " دقيقة " + pad((exam_time_in_secand - totalSeconds) % 60) + " ثانية";
    let final_exam_data = {
        'quection_array': arr,
        "total_score": score["total"],
        "unsolived_question": score["unsolived_q"],
        "user_answer": user_answer_array,
        "time_tacken_en": time_tacken_en,
        "time_tacken_ar": time_tacken_ar,
        "start_date": start_date,
        "finshed_date": get_time(),
        "fivoret_type": fivoret_type

    }

    sessionStorage.setItem("final_exam_data", JSON.stringify(final_exam_data));


    if (page_lang == 'Ar') {
        window.location.href = "final-result-exam-Ar.html";
    }
    else {
        window.location.href = "final-result-exam-En.html";
    }

}



function calc_score() {
    var total = 0;
    var unsolived_q = 0;
    arr.forEach((element, index) => {
        if (user_answer_array[index] != -1) {
            if (user_answer_array[index] == element['coanswer']) {
                total++;

            }
        } else {
            unsolived_q++;
        }
    });

    return { "total": total, "unsolived_q": unsolived_q };

}

function get_time() {
    return new Date().toUTCString("ar_EG");
}


/**
 * 
 * This is timer
 * 
**/

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = exam_time_in_secand;
minutesLabel.innerHTML = "60";
secondsLabel.innerHTML = "00";

function setTime() {
    --totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

    if (totalSeconds == 0) {
        finshed_button();
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}


