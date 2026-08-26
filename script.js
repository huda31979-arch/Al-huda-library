/* =====================================================
   مكتبة الهُدى — Front-End Store
   ===================================================== */


/* ================= STORE SETTINGS ================= */

const STORE_NAME = "مكتبة الهُدى";

const WHATSAPP_NUMBER = "201553213071";

/*
   الغلاف الافتراضي لأي كتاب بدون صورة حقيقية
   (بديل عن الإيموجي)
*/

const DEFAULT_COVER = "images/cover-default.png";


/* ================= PRODUCTS ================= */

const products = [
    { id: 1, image: "images/old1.jpg", name: 'التأسيس السليم - عربي KG1', category: "kg1", subject: 'عربي', grade: 'KG1 (المستوى الأول)', price: 139, description: 'كتاب تأسيس ومراجعة اللغة العربية.' },
    { id: 2, image: "images/old2.jpg", name: 'التأسيس السليم - English KG1', category: "kg1", subject: 'English', grade: 'KG1 (المستوى الأول)', price: 175, description: 'كتاب تأسيس اللغة الإنجليزية.' },
    { id: 3, image: "images/3.jpg", name: 'المعاصر Math KG1', category: "kg1", subject: 'Math', grade: 'KG1 (المستوى الأول)', price: 205, description: 'كتاب الرياضيات والتدريب.' },
    { id: 4, image: "images/4.jpg", name: 'الأضواء عربي أولى ابتدائي', category: "primary1", subject: 'عربي', grade: 'أولى ابتدائي', price: 159, description: 'شرح وتدريبات وأسئلة.' },
    { id: 5, image: "images/old5.jpg", name: 'الأضواء حساب أولى ابتدائي', category: "primary1", subject: 'رياضيات', grade: 'أولى ابتدائي', price: 149, description: 'شرح وتدريبات الرياضيات.' },
    { id: 7, image: "images/old7.jpg", name: 'الأضواء عربي ثانية ابتدائي', category: "primary2", subject: 'عربي', grade: 'ثانية ابتدائي', price: 159, description: 'كتاب اللغة العربية.' },
    { id: 8, image: "images/old8.jpg", name: 'سندباد عربي ثالثة ابتدائي', category: "primary3", subject: 'عربي', grade: 'ثالثة ابتدائي', price: 185, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 9, image: "images/9.jpg", name: 'الأضواء عربي رابعة ابتدائي', category: "primary4", subject: 'عربي', grade: 'رابعة ابتدائي', price: 159, description: 'كتاب اللغة العربية.' },
    { id: 10, image: "images/10.jpg", name: 'الأضواء عربي خامسة ابتدائي', category: "primary5", subject: 'عربي', grade: 'خامسة ابتدائي', price: 195, description: 'كتاب اللغة العربية.' },
    { id: 11, image: "images/11.jpg", name: 'الأضواء عربي سادسة ابتدائي', category: "primary6", subject: 'عربي', grade: 'سادسة ابتدائي', price: 199, description: 'كتاب اللغة العربية.' },
    { id: 12, image: "images/12.jpg", name: 'الأضواء عربي أولى إعدادي', category: "prep1", subject: 'عربي', grade: 'أولى إعدادي', price: 199, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 13, image: "images/old13.jpg", name: 'English Al-Adwaa Gem - أولى إعدادي', category: "prep1", subject: 'English', grade: 'أولى إعدادي', price: 199, description: 'شرح وتدريبات English.' },
    { id: 15, image: "images/15.jpg", name: 'الأضواء عربي ثانية إعدادي', category: "prep2", subject: 'عربي', grade: 'ثانية إعدادي', price: 199, description: 'كتاب اللغة العربية.' },
    { id: 16, image: "images/old16.jpg", name: 'Step Ahead ثانية إعدادي', category: "prep2", subject: 'English', grade: 'ثانية إعدادي', price: 220, description: 'شرح وتدريبات English.' },
    { id: 17, image: "images/old17.jpg", name: 'Bit by Bit ثالثة إعدادي', category: "prep3", subject: 'English', grade: 'ثالثة إعدادي', price: 150, description: 'شرح وتدريبات English.' },
    { id: 18, image: "images/old18.jpg", name: 'الامتحان لغة عربية ثالثة ثانوي', category: "sec3", subject: 'عربي', grade: 'ثالثة ثانوي', price: 225, description: 'كتاب الامتحان لغة عربية.' },
    { id: 19, image: "images/old19.jpg", name: 'الامتحان فيزياء ثالثة ثانوي - شرح', category: "sec3", subject: 'فيزياء', grade: 'ثالثة ثانوي', price: 230, description: 'شرح وتدريبات الفيزياء.' },
    { id: 20, image: "images/20.jpg", name: 'الامتحان فيزياء ثالثة ثانوي - أسئلة', category: "sec3", subject: 'فيزياء', grade: 'ثالثة ثانوي', price: 325, description: 'أسئلة وتدريبات الفيزياء.' },
    { id: 21, image: "images/old21.jpg", name: 'الوافي فيزياء ثالثة ثانوي', category: "sec3", subject: 'فيزياء', grade: 'ثالثة ثانوي', price: 210, description: 'شرح وتدريبات الفيزياء.' },
    { id: 22, image: "images/old22.jpg", name: 'الامتحان كيمياء ثالثة ثانوي', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 285, description: 'شرح وأسئلة الكيمياء.' },
    { id: 24, image: "images/old24.jpg", name: 'الامتحان أحياء ثالثة ثانوي - شرح', category: "sec3", subject: 'أحياء', grade: 'ثالثة ثانوي', price: 215, description: 'شرح الأحياء.' },
    { id: 26, image: "images/old26.jpg", name: 'التميز أحياء ثالثة ثانوي', category: "sec3", subject: 'أحياء', grade: 'ثالثة ثانوي', price: 190, description: 'شرح وتدريبات الأحياء.' },
    { id: 27, image: "images/old27.jpg", name: 'الامتحان تاريخ ثالثة ثانوي', category: "sec3", subject: 'تاريخ', grade: 'ثالثة ثانوي', price: 265, description: 'شرح وأسئلة التاريخ.' },
    { id: 28, image: "images/old28.jpg", name: 'الامتحان جغرافيا ثالثة ثانوي', category: "sec3", subject: 'جغرافيا', grade: 'ثالثة ثانوي', price: 218, description: 'شرح وأسئلة الجغرافيا.' },
    { id: 29, image: "images/old29.jpg", name: 'الوجيز فلسفة ومنطق', category: "sec3", subject: 'فلسفة', grade: 'ثالثة ثانوي', price: 160, description: 'شرح ومراجعة الفلسفة والمنطق.' },
    { id: 31, image: "images/old31.jpg", name: 'المعاصر - الديناميكا (رياضيات تطبيقية)', category: "sec3", subject: 'رياضيات', grade: 'ثالثة ثانوي', price: 400, description: 'رياضيات تطبيقية - ديناميكا.' },
    { id: 32, image: "images/old32.jpg", name: 'سلاح الأزهري فقه حنفي ثالثة ثانوي', category: "azharsec3", subject: 'فقه', grade: 'ثالثة ثانوي أزهري', price: 150, description: 'كتاب الفقه الحنفي.' },
    { id: 33, image: "images/old33.jpg", name: 'سلاح الأزهري حديث ثالثة ثانوي', category: "azharsec3", subject: 'حديث', grade: 'ثالثة ثانوي أزهري', price: 110, description: 'كتاب الحديث - شرح.' },
    { id: 34, image: "images/old34.jpg", name: 'سلاح الأزهري توحيد ثالثة ثانوي', category: "azharsec3", subject: 'توحيد', grade: 'ثالثة ثانوي أزهري', price: 90, description: 'كتاب التوحيد.' },
    { id: 36, image: "images/36.jpg", name: 'سلاح الأزهري نحو ثالثة ثانوي', category: "azharsec3", subject: 'نحو', grade: 'ثالثة ثانوي أزهري', price: 150, description: 'شرح وتدريبات النحو.' },
    { id: 37, image: "images/37.jpg", name: 'سلاح الأزهري صرف ثالثة ثانوي', category: "azharsec3", subject: 'صرف', grade: 'ثالثة ثانوي أزهري', price: 140, description: 'شرح وتدريبات الصرف.' },
    { id: 38, image: "images/38.jpg", name: 'سلاح الأزهري بلاغة ثالثة ثانوي', category: "azharsec3", subject: 'بلاغة', grade: 'ثالثة ثانوي أزهري', price: 120, description: 'شرح وتدريبات البلاغة.' },
    { id: 200, image: "images/new4.jpg", name: 'الرياضيات - الأول الثانوي (تدريبات الامتحانات)', category: "sec1", subject: 'رياضيات', grade: 'أولى ثانوي', price: 190, description: 'أسئلة اختيارية وتدريبات وامتحانات.' },
    { id: 201, image: "images/new5.jpg", name: 'English - كتاب الطالب', category: "prep3", subject: 'English', grade: 'ثالثة إعدادي', price: 120, description: 'كتاب اللغة الإنجليزية.' },
    { id: 202, image: "images/new6.jpg", name: 'اللغة العربية 1 - الأنهار (الفصل الأول)', category: "prep1", subject: 'عربي', grade: 'أولى إعدادي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 203, image: "images/new7.jpg", name: 'اللغة العربية 2 - الأنهار', category: "prep2", subject: 'عربي', grade: 'ثانية إعدادي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 204, image: "images/new11.jpg", name: 'التوازن في الكيمياء - كتاب تدريبات', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 150, description: 'تدريبات ومراجعة الكيمياء.' },
    { id: 205, image: "images/new12.jpg", name: 'لضمان الدرجة النهائية - إجابات كتاب البرهان', category: "sec3", subject: 'عربي', grade: 'ثالثة ثانوي', price: 100, description: 'إجابات نموذجية للغة العربية.' },
    { id: 206, image: "images/new13.jpg", name: 'البرهان في اللغة العربية (الجزء الكامل)', category: "sec3", subject: 'عربي', grade: 'ثالثة ثانوي', price: 180, description: 'شرح شامل للغة العربية.' },
    { id: 207, image: "images/new14.jpg", name: 'الرحيق في اللغة العربية - المراجعة النهائية ج1', category: "sec3", subject: 'عربي', grade: 'ثالثة ثانوي', price: 120, description: 'مراجعة نهائية للغة العربية.' },
    { id: 208, image: "images/new15.jpg", name: 'سلاح الأزهري - التوحيد', category: "azharsec1", subject: 'توحيد', grade: 'أولى ثانوي أزهري', price: 90, description: 'كتاب التوحيد.' },
    { id: 209, image: "images/new16.jpg", name: 'سلاح الأزهري - الفقه الشافعي', category: "azharsec1", subject: 'فقه', grade: 'أولى ثانوي أزهري', price: 100, description: 'كتاب الفقه الشافعي.' },
    { id: 210, image: "images/new18.jpg", name: 'سلاح الأزهري - التفسير', category: "azharsec1", subject: 'تفسير', grade: 'أولى ثانوي أزهري', price: 100, description: 'كتاب التفسير.' },
    { id: 211, image: "images/new19.jpg", name: 'سلاح الأزهري - الحديث', category: "azharsec1", subject: 'حديث', grade: 'أولى ثانوي أزهري', price: 90, description: 'كتاب الحديث.' },
    { id: 212, image: "images/new21.jpg", name: 'سلاح الأزهري - الحديث', category: "azharsec2", subject: 'حديث', grade: 'ثانية ثانوي أزهري', price: 90, description: 'كتاب الحديث.' },
    { id: 213, image: "images/new22.jpg", name: 'سلاح الأزهري - الفقه الشافعي', category: "azharsec2", subject: 'فقه', grade: 'ثانية ثانوي أزهري', price: 100, description: 'كتاب الفقه الشافعي.' },
    { id: 214, image: "images/new23.jpg", name: 'سلاح الأزهري - البلاغة', category: "azharsec2", subject: 'بلاغة', grade: 'ثانية ثانوي أزهري', price: 100, description: 'شرح وتدريبات البلاغة.' },
    { id: 215, image: "images/new28.jpg", name: 'الامتحان - أسئلة وتدريبات - الجزء الثاني', category: "sec3", subject: 'أحياء', grade: 'ثالثة ثانوي', price: 200, description: 'أسئلة وتدريبات شاملة.' },
    { id: 216, image: "images/new29.jpg", name: 'بيان في اللغة العربية - الجزء الأول', category: "sec3", subject: 'عربي', grade: 'ثالثة ثانوي', price: 140, description: 'نخبة معلمين اللغة العربية.' },
    { id: 217, image: "images/new32.jpg", name: 'الإحصاء - المعاصر', category: "sec3", subject: 'رياضيات', grade: 'ثالثة ثانوي', price: 200, description: 'رياضيات - إحصاء.' },
    { id: 218, image: "images/new35.jpg", name: 'التفوق في الفيزياء - كتاب الأسئلة', category: "sec3", subject: 'فيزياء', grade: 'ثالثة ثانوي', price: 180, description: 'أسئلة وتدريبات الفيزياء.' },
    { id: 219, image: "images/new37.jpg", name: 'كتوجذو في الكيمياء', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 150, description: 'شرح الكيمياء.' },
    { id: 220, image: "images/new38.jpg", name: 'التفوق في الكيمياء - الجزء الثاني', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 190, description: 'امتحانات الثانوية العامة ونماذج استرشادية.' },
    { id: 221, image: "images/new39.jpg", name: 'الوافي - كتاب الشرح', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 210, description: 'شرح الكيمياء.' },
    { id: 222, image: "images/new40.jpg", name: 'التفوق - كتاب الأسئلة والتدريبات', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 180, description: 'أسئلة وتدريبات الكيمياء.' },
    { id: 223, image: "images/new41.jpg", name: 'الوافي - الأسئلة والتدريبات', category: "sec3", subject: 'كيمياء', grade: 'ثالثة ثانوي', price: 190, description: 'أسئلة وتدريبات الكيمياء.' },
    { id: 224, image: "images/new43.jpg", name: 'التميز - الأقرب للامتحان (ملاحظات وتدريبات)', category: "sec3", subject: 'أحياء', grade: 'ثالثة ثانوي', price: 190, description: 'ملاحظات وتدريبات الأحياء.' },
    { id: 225, image: "images/new44.jpg", name: 'التفوق في الأحياء - الجزء الخاص', category: "sec3", subject: 'أحياء', grade: 'ثالثة ثانوي', price: 190, description: 'تدريبات على الدروس واختبارات الفصول.' },
    { id: 226, image: "images/new48.jpg", name: 'الامتحان - التاريخ', category: "sec1", subject: 'تاريخ', grade: 'أولى ثانوي', price: 150, description: 'شرح وأسئلة التاريخ.' },
    { id: 227, image: "images/new49.jpg", name: 'اللغة العربية 1 - الأنهار (الفصل الثاني)', category: "sec1", subject: 'عربي', grade: 'أولى ثانوي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 228, image: "images/new51.jpg", name: 'English - Al-Adwaa Gem (الفصل الأول)', category: "prep1", subject: 'English', grade: 'أولى إعدادي', price: 140, description: 'كتاب اللغة الإنجليزية.' },
    { id: 229, image: "images/new52.jpg", name: 'الامتحان - اللغة العربية - شرح وأسئلة ج1', category: "sec2", subject: 'عربي', grade: 'ثانية ثانوي', price: 150, description: 'شرح وأسئلة اللغة العربية.' },
    { id: 230, image: "images/new53.jpg", name: 'اللغة العربية 2 - الأنهار (الفصل الثاني)', category: "sec2", subject: 'عربي', grade: 'ثانية ثانوي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 231, image: "images/new54.jpg", name: 'الرياضيات العامة', category: "sec2", subject: 'رياضيات', grade: 'ثانية ثانوي', price: 160, description: 'شرح وتمارين الرياضيات.' },
    { id: 232, image: "images/new55.jpg", name: 'New Hello! - King Lear', category: "sec2", subject: 'English', grade: 'ثانية ثانوي', price: 170, description: 'رواية King Lear بالمنهج.' },
    { id: 233, image: "images/new56.jpg", name: 'سلاح الأزهري - الصرف (الفصل الثاني)', category: "azharsec1", subject: 'صرف', grade: 'أولى ثانوي أزهري', price: 90, description: 'شرح وتدريبات الصرف.' },
    { id: 234, image: "images/new57.jpg", name: 'سلاح الأزهري - البلاغة (الفصل الثاني)', category: "azharsec1", subject: 'بلاغة', grade: 'أولى ثانوي أزهري', price: 100, description: 'شرح وتدريبات البلاغة.' },
    { id: 235, image: "images/new58.jpg", name: 'سلاح الأزهري - النحو (الفصل الثاني)', category: "azharsec1", subject: 'نحو', grade: 'أولى ثانوي أزهري', price: 100, description: 'شرح وتدريبات النحو.' },
    { id: 236, image: "images/new61.jpg", name: 'اللغة العربية 1 - الأنهار (الفصل الثاني)', category: "prep1", subject: 'عربي', grade: 'أولى إعدادي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 237, image: "images/new62.jpg", name: 'الامتحان - أسئلة وتدريبات - الجزء الأول', category: "sec3", subject: 'أحياء', grade: 'ثالثة ثانوي', price: 200, description: 'أسئلة وتدريبات شاملة.' },
    { id: 238, image: "images/new64.jpg", name: 'Step Ahead - Year 1 (الفصل الأول)', category: "prep1", subject: 'English', grade: 'أولى إعدادي', price: 150, description: 'كتاب اللغة الإنجليزية.' },
    { id: 239, image: "images/new65.jpg", name: 'سلاح الأزهري - اللغة العربية', category: "azharprep1", subject: 'عربي', grade: 'أولى إعدادي أزهري', price: 110, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 240, image: "images/new66.jpg", name: 'سلاح الأزهري - أصول الدين', category: "azharprep1", subject: 'أصول دين', grade: 'أولى إعدادي أزهري', price: 90, description: 'كتاب أصول الدين.' },
    { id: 241, image: "images/new67.jpg", name: 'سلاح الأزهري - الفقه الشافعي (طبعة جديدة)', category: "azharprep1", subject: 'فقه', grade: 'أولى إعدادي أزهري', price: 100, description: 'كتاب الفقه الشافعي.' },
    { id: 242, image: "images/new69.jpg", name: 'اللغة العربية 2 - الأنهار', category: "prep2", subject: 'عربي', grade: 'ثانية إعدادي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 243, image: "images/new70.jpg", name: 'English NEW - Al-Adwaa Gem (طقم كتابين)', category: "prep2", subject: 'English', grade: 'ثانية إعدادي', price: 160, description: 'كتاب الطالب + كتاب التدريبات.' },
    { id: 244, image: "images/new72.jpg", name: 'المعاصر - الرياضيات', category: "prep2", subject: 'رياضيات', grade: 'ثانية إعدادي', price: 150, description: 'شرح وتدريبات الرياضيات.' },
    { id: 245, image: "images/new73.jpg", name: 'سلاح الأزهري - اللغة العربية', category: "azharprep2", subject: 'عربي', grade: 'ثانية إعدادي أزهري', price: 110, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 246, image: "images/new74.jpg", name: 'سلاح الأزهري - أصول الدين', category: "azharprep2", subject: 'أصول دين', grade: 'ثانية إعدادي أزهري', price: 90, description: 'كتاب أصول الدين.' },
    { id: 247, image: "images/new76.jpg", name: 'سلاح الأزهري - الفقه الشافعي', category: "azharprep2", subject: 'فقه', grade: 'ثانية إعدادي أزهري', price: 100, description: 'كتاب الفقه الشافعي.' },
    { id: 248, image: "images/new77.jpg", name: 'المرشد الحديث', category: "prep2", subject: 'عربي', grade: 'ثانية إعدادي', price: 120, description: 'مراجعة اللغة العربية.' },
    { id: 249, image: "images/new78.jpg", name: 'اللغة العربية 3 - الأنهار', category: "prep3", subject: 'عربي', grade: 'ثالثة إعدادي', price: 140, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 250, image: "images/new79.jpg", name: 'New Hello! - Great Expectations', category: "sec3", subject: 'English', grade: 'ثالثة ثانوي', price: 180, description: 'رواية Great Expectations بالمنهج.' },
    { id: 251, image: "images/new81.jpg", name: 'المعاصر - الرياضيات - الكتاب الأساسي', category: "prep3", subject: 'رياضيات', grade: 'ثالثة إعدادي', price: 160, description: 'الحد الخاص بالتقويم المستمر.' },
    { id: 252, image: "images/new83.jpg", name: 'التأسيس السليم - حساب', category: "kg1", subject: 'رياضيات', grade: 'KG1 (المستوى الأول)', price: 150, description: 'كتاب الحساب من 3 إلى 5 سنوات.' },
    { id: 253, image: "images/new85.jpg", name: 'التأسيس السليم - اللغة العربية', category: "kg2", subject: 'عربي', grade: 'KG2 (المستوى الثاني)', price: 150, description: 'كتاب اللغة العربية للمستوى الثاني.' },
    { id: 254, image: "images/new87.jpg", name: 'التأسيس السليم - English', category: "kg2", subject: 'English', grade: 'KG2 (Level 2)', price: 175, description: 'كتاب اللغة الإنجليزية للمستوى الثاني.' },
    { id: 255, image: "images/new88.jpg", name: 'اللغة العربية - الأنهار (الفصل الثاني)', category: "primary1", subject: 'عربي', grade: 'أولى ابتدائي', price: 130, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 256, image: "images/new89.jpg", name: 'الرياضيات - الأنهار (الفصل الثاني)', category: "primary1", subject: 'رياضيات', grade: 'أولى ابتدائي', price: 130, description: 'شرح وتدريبات الرياضيات.' },
    { id: 257, image: "images/new90.jpg", name: 'سلاح التلميذ - اللغة العربية', category: "primary1", subject: 'عربي', grade: 'أولى ابتدائي', price: 120, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 258, image: "images/new93.jpg", name: 'سلاح التلميذ - اللغة العربية', category: "primary2", subject: 'عربي', grade: 'ثانية ابتدائي', price: 120, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 259, image: "images/new94.jpg", name: 'سلاح التلميذ - الرياضيات', category: "primary2", subject: 'رياضيات', grade: 'ثانية ابتدائي', price: 120, description: 'شرح وتدريبات الرياضيات.' },
    { id: 260, image: "images/new95.jpg", name: 'الأضواء - اللغة العربية', category: "primary3", subject: 'عربي', grade: 'ثالثة ابتدائي', price: 140, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 261, image: "images/new96.jpg", name: 'الأنهار - التربية الدينية الإسلامية', category: "primary3", subject: 'تربية دينية', grade: 'ثالثة ابتدائي', price: 110, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 262, image: "images/new98.jpg", name: 'سلاح التلميذ - الرياضيات (الفصل الثاني)', category: "primary3", subject: 'رياضيات', grade: 'ثالثة ابتدائي', price: 120, description: 'شرح وتدريبات الرياضيات.' },
    { id: 263, image: "images/new99.jpg", name: 'الأنهار - اللغة العربية', category: "primary4", subject: 'عربي', grade: 'رابعة ابتدائي', price: 140, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 264, image: "images/new100.jpg", name: 'الأنهار - الرياضيات', category: "primary4", subject: 'رياضيات', grade: 'رابعة ابتدائي', price: 140, description: 'شرح وتدريبات الرياضيات.' },
    { id: 265, image: "images/new101.jpg", name: 'الأنهار - الدراسات الاجتماعية', category: "primary4", subject: 'دراسات اجتماعية', grade: 'رابعة ابتدائي', price: 130, description: 'كتاب الدراسات الاجتماعية.' },
    { id: 266, image: "images/new103.jpg", name: 'الأنهار - اللغة العربية', category: "primary5", subject: 'عربي', grade: 'خامسة ابتدائي', price: 150, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 267, image: "images/new104.jpg", name: 'الأنهار - الرياضيات (الفصل الثاني)', category: "primary5", subject: 'رياضيات', grade: 'خامسة ابتدائي', price: 150, description: 'شرح وتدريبات الرياضيات.' },
    { id: 268, image: "images/new106.jpg", name: 'الأنهار - العلوم', category: "primary5", subject: 'علوم', grade: 'خامسة ابتدائي', price: 140, description: 'كتاب العلوم.' },
    { id: 269, image: "images/new107.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية', category: "primary5", subject: 'تربية دينية', grade: 'خامسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 270, image: "images/new108.jpg", name: 'الأنهار - اللغة العربية', category: "primary6", subject: 'عربي', grade: 'سادسة ابتدائي', price: 160, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 271, image: "images/new109.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية (الفصل الأول)', category: "primary6", subject: 'تربية دينية', grade: 'سادسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 272, image: "images/new110.jpg", name: '6th Primary English - Al-Adwaa Gem', category: "primary6", subject: 'English', grade: 'سادسة ابتدائي', price: 170, description: 'كتاب اللغة الإنجليزية - الفصل الأول.' },
    { id: 273, image: "images/new114.jpg", name: 'سلاح الأزهري - الفقه الحنفي', category: "azharprep1", subject: 'فقه', grade: 'أولى إعدادي أزهري', price: 100, description: 'كتاب الفقه الحنفي.' },
    { id: 274, image: "images/new119.jpg", name: 'سلاح الأزهري - أصول الدين', category: "azharprep3", subject: 'أصول دين', grade: 'ثالثة إعدادي أزهري', price: 90, description: 'كتاب أصول الدين.' },
    { id: 275, image: "images/new121.jpg", name: 'سلاح الأزهري - الفقه الشافعي', category: "azharprep3", subject: 'فقه', grade: 'ثالثة إعدادي أزهري', price: 100, description: 'كتاب الفقه الشافعي.' },
    { id: 276, image: "images/new123.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية', category: "primary1", subject: 'تربية دينية', grade: 'أولى ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 277, image: "images/new124.jpg", name: 'سلسلة الإمام - أصول الدين', category: "azharprep1", subject: 'أصول دين', grade: 'أولى إعدادي أزهري', price: 90, description: 'كتاب أصول الدين.' },
    { id: 278, image: "images/new125.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية', category: "primary2", subject: 'تربية دينية', grade: 'ثانية ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 279, image: "images/new127.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية (الفصل الثاني)', category: "primary2", subject: 'تربية دينية', grade: 'ثانية ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 280, image: "images/new128.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية', category: "primary3", subject: 'تربية دينية', grade: 'ثالثة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 281, image: "images/new129.jpg", name: 'سلاح التلميذ - اللغة العربية (الفصل الثاني)', category: "primary3", subject: 'عربي', grade: 'ثالثة ابتدائي', price: 120, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 282, image: "images/new130.jpg", name: 'سلسلة الإمام - اللغة العربية (الفصل الثاني)', category: "azharprep3", subject: 'عربي', grade: 'ثالثة إعدادي أزهري', price: 120, description: 'شرح وتدريبات اللغة العربية.' },
    { id: 283, image: "images/new131.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية', category: "primary4", subject: 'تربية دينية', grade: 'رابعة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 284, image: "images/new132.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية (الفصل الثاني)', category: "primary4", subject: 'تربية دينية', grade: 'رابعة ابتدائي', price: 100, description: 'نماذج اختبارات نهاية الفصل.' },
    { id: 285, image: "images/new134.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية (الفصل الأول)', category: "primary5", subject: 'تربية دينية', grade: 'خامسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 286, image: "images/new135.jpg", name: 'الأضواء - التربية الدينية الإسلامية (الفصل الثاني)', category: "primary5", subject: 'تربية دينية', grade: 'خامسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 287, image: "images/new136.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية (الفصل الأول)', category: "primary6", subject: 'تربية دينية', grade: 'سادسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 288, image: "images/new138.jpg", name: 'سلاح التلميذ - التربية الدينية الإسلامية (الفصل الثاني)', category: "primary6", subject: 'تربية دينية', grade: 'سادسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
    { id: 289, image: "images/new139.jpg", name: 'التربية الإسلامية - طبعة أخرى', category: "primary6", subject: 'تربية دينية', grade: 'سادسة ابتدائي', price: 100, description: 'كتاب التربية الدينية الإسلامية.' },
];


/*
   تنظيف أي نص قبل إدراجه في HTML
   لمنع ثغرات XSS
*/

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = String(text ?? "");

    return div.innerHTML;

}


function getProductImage(product) {

    return product.image || DEFAULT_COVER;

}


/* =====================================================
   STATE
   ===================================================== */

let cart = [];

let currentCategory = "all";

let currentProducts = [...products];

let detailsProduct = null;

let detailsQuantity = 1;


/* =====================================================
   LOAD / SAVE CART
   ===================================================== */

function loadCart() {

    const savedCart = localStorage.getItem("hudaCart");

    if (savedCart) {

        try {
            cart = JSON.parse(savedCart);
        } catch {
            cart = [];
        }

    }

    updateCart();

}

function saveCart() {

    localStorage.setItem("hudaCart", JSON.stringify(cart));

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(list) {

    const grid = document.getElementById("productsGrid");
    const noProducts = document.getElementById("noProducts");

    grid.innerHTML = "";

    if (list.length === 0) {

        noProducts.style.display = "block";

        document.getElementById("productsResult").textContent = "لا توجد نتائج";

        return;

    }

    noProducts.style.display = "none";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        const imagePath = getProductImage(product);

        card.innerHTML = `

            <button class="product-image" onclick="openProductDetails(${product.id})" aria-label="عرض تفاصيل الكتاب">

                <img
                    src="${escapeHTML(imagePath)}"
                    alt="${escapeHTML(product.name)}"
                    class="product-cover"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${DEFAULT_COVER}';"
                >

            </button>

            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(product.grade)} • ${escapeHTML(product.subject)}
                </span>

                <h3 class="product-name" onclick="openProductDetails(${product.id})">
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="product-bottom">

                    <span class="price">
                        ${escapeHTML(product.price)} جنيه
                    </span>

                    <button class="add-button" onclick="event.stopPropagation(); addToCart(${product.id})">
                        🛒 أضف
                    </button>

                </div>

            </div>

        `;

        grid.appendChild(card);

    });

    document.getElementById("productsResult").textContent =
        `تم العثور على ${list.length} كتاب`;

}


/* =====================================================
   PRODUCT DETAILS MODAL
   ===================================================== */

function openProductDetails(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    detailsProduct = product;
    detailsQuantity = 1;

    document.getElementById("detailsImage").src = getProductImage(product);
    document.getElementById("detailsImage").alt = product.name;

    document.getElementById("detailsCategoryBadge").textContent =
        `${product.grade} • ${product.subject}`;

    document.getElementById("detailsName").textContent = product.name;

    document.getElementById("detailsDescription").textContent = product.description;

    document.getElementById("detailsPrice").textContent = `${product.price} جنيه`;

    document.getElementById("detailsQty").textContent = detailsQuantity;

    document.getElementById("detailsModal").classList.add("show");

    document.body.classList.add("no-scroll");

}

function closeProductDetails() {

    document.getElementById("detailsModal").classList.remove("show");

    document.body.classList.remove("no-scroll");

    detailsProduct = null;

}

function changeDetailsQuantity(amount) {

    detailsQuantity = Math.max(1, detailsQuantity + amount);

    document.getElementById("detailsQty").textContent = detailsQuantity;

}

function addDetailsToCart() {

    if (!detailsProduct) return;

    for (let i = 0; i < detailsQuantity; i++) {

        addToCart(detailsProduct.id, false);

    }

    saveCart();
    updateCart();

    closeProductDetails();

    openCart();

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(productId, openCartPanel = true) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({ ...product, quantity: 1 });

    }

    saveCart();
    updateCart();

    if (openCartPanel) openCart();

}


/* =====================================================
   UPDATE CART
   ===================================================== */

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    emptyCart.style.display = cart.length === 0 ? "block" : "none";

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        const element = document.createElement("div");

        element.className = "cart-item";

        const imagePath = getProductImage(item);

        element.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${escapeHTML(imagePath)}"
                    alt="${escapeHTML(item.name)}"
                    class="cart-item-cover"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${DEFAULT_COVER}';"
                >

            </div>

            <div class="cart-item-info">

                <h4>${escapeHTML(item.name)}</h4>

                <p>${escapeHTML(item.price)} جنيه</p>

                <div class="quantity">

                    <button onclick="changeQuantity(${item.id}, 1)">+</button>

                    <strong>${item.quantity}</strong>

                    <button onclick="changeQuantity(${item.id}, -1)">-</button>

                </div>

                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    حذف
                </button>

            </div>

        `;

        cartItems.appendChild(element);

    });

    cartCount.textContent = count;

    cartTotal.textContent = total.toLocaleString("ar-EG");

    document.getElementById("checkoutTotal").textContent = total.toLocaleString("ar-EG");

}


/* =====================================================
   CHANGE / REMOVE
   ===================================================== */

function changeQuantity(productId, amount) {

    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(item => item.id !== productId);

    }

    saveCart();
    updateCart();

}

function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== productId);

    saveCart();
    updateCart();

}


/* =====================================================
   CART PANEL
   ===================================================== */

function openCart() {

    document.getElementById("cart").classList.add("open");

    document.getElementById("overlay").classList.add("show");

}

function closeCart() {

    document.getElementById("cart").classList.remove("open");

    document.getElementById("overlay").classList.remove("show");

}


/* =====================================================
   FILTER (SIDEBAR)
   ===================================================== */

function filterCategory(category, el) {

    currentCategory = category;

    document.querySelectorAll(".side-link").forEach(button => {

        button.classList.remove("active");

    });

    const target = el || (typeof event !== "undefined" ? event.currentTarget : null);

    if (target) target.classList.add("active");

    applyFilters();

    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("show");

    document.getElementById("products").scrollIntoView({ behavior: "smooth" });

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchProducts() {

    applyFilters();

}


/* =====================================================
   APPLY FILTERS
   ===================================================== */

function applyFilters() {

    const search = document.getElementById("searchInput").value.trim().toLowerCase();

    currentProducts = products.filter(product => {

        const categoryMatch = currentCategory === "all" || product.category === currentCategory;

        const searchMatch =
            !search ||
            product.name.toLowerCase().includes(search) ||
            product.subject.toLowerCase().includes(search) ||
            product.grade.toLowerCase().includes(search);

        return categoryMatch && searchMatch;

    });

    sortProducts(false);

}


/* =====================================================
   SORT
   ===================================================== */

function sortProducts(update = true) {

    if (update) {

        applyFilters();

        return;

    }

    const sort = document.getElementById("sortSelect").value;

    const sorted = [...currentProducts];

    if (sort === "low") sorted.sort((a, b) => a.price - b.price);

    if (sort === "high") sorted.sort((a, b) => b.price - a.price);

    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "ar"));

    displayProducts(sorted);

}


/* =====================================================
   GO HOME (النقر على الشعار بالأعلى)
   ===================================================== */

function goHome() {

    currentCategory = "all";

    document.getElementById("searchInput").value = "";

    document.querySelectorAll(".side-link").forEach(button => {

        button.classList.remove("active");

    });

    document.querySelector(".side-link[data-category='all']")?.classList.add("active");

    document.getElementById("sortSelect").value = "default";

    closeCart();
    closeCheckout();
    closeProductDetails();

    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("show");

    applyFilters();

    window.scrollTo({ top: 0, behavior: "smooth" });

}


/* =====================================================
   CHECKOUT
   ===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        alert("السلة فارغة. أضف كتابًا أولًا.");

        return;

    }

    document.getElementById("checkoutModal").classList.add("show");

}

function closeCheckout() {

    document.getElementById("checkoutModal").classList.remove("show");

}


/* =====================================================
   WHATSAPP ORDER
   ===================================================== */

function sendOrderToWhatsApp(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert("السلة فارغة.");

        return;

    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();

    const phonePattern = /^01[0-2,5]{1}[0-9]{8}$/;

    if (!phonePattern.test(phone)) {

        alert("من فضلك أدخل رقم هاتف مصري صحيح (مثال: 01xxxxxxxxx).");

        return;

    }

    const notes = document.getElementById("customerNotes").value.trim();

    let total = 0;

    let orderText =
        `السلام عليكم، أريد عمل طلب من ${STORE_NAME}\n\n` +
        `👤 *بيانات العميل*\n` +
        `الاسم: ${name}\n` +
        `الهاتف: ${phone}\n` +
        `العنوان: ${address}\n`;

    if (notes) orderText += `ملاحظات: ${notes}\n`;

    orderText += `\n📚 *الكتب المطلوبة*\n`;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        orderText +=
            `\n${index + 1}. ${item.name}` +
            `\n   الكمية: ${item.quantity}` +
            `\n   السعر: ${item.price} جنيه` +
            `\n   الإجمالي: ${itemTotal} جنيه`;

    });

    orderText +=
        `\n\n💰 *إجمالي الطلب: ${total} جنيه*` +
        `\n\nأرجو تأكيد توفر المنتجات وتكلفة التوصيل.`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;

    window.open(whatsappURL, "_blank");

}


/* =====================================================
   MODAL CLOSE BY CLICK OUTSIDE
   ===================================================== */

document.getElementById("checkoutModal").addEventListener("click", function (event) {

    if (event.target === this) closeCheckout();

});

document.getElementById("detailsModal").addEventListener("click", function (event) {

    if (event.target === this) closeProductDetails();

});


/* =====================================================
   SIDEBAR TOGGLE (MOBILE)
   ===================================================== */

function toggleSidebar() {

    document.getElementById("sidebar").classList.toggle("open");

    document.getElementById("sidebarOverlay").classList.toggle("show");

}


/* =====================================================
   START
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadCart();

    displayProducts(products);

    /* فاصل انتقالي عند تحميل الموقع لأول مرة */
    playPageTransition();

});


/* =====================================================
   الوضع الليلي (Dark Mode)
   ===================================================== */

const THEME_STORAGE_KEY = "alhuda-theme";

function applyTheme(theme) {

    document.body.classList.toggle("dark-mode", theme === "dark");

    const themeButton = document.getElementById("themeToggleButton");

    if (themeButton) {

        themeButton.setAttribute("aria-pressed", String(theme === "dark"));

    }

}

function getPreferredTheme() {

    let stored = null;

    try {
        stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
        stored = null;
    }

    if (stored === "dark" || stored === "light") return stored;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";

}

function toggleTheme() {

    const isDark = document.body.classList.contains("dark-mode");

    const nextTheme = isDark ? "light" : "dark";

    applyTheme(nextTheme);

    try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
        /* localStorage غير متاح — الثيم هيشتغل لهذه الجلسة فقط */
    }

    const themeButton = document.getElementById("themeToggleButton");

    if (themeButton) {

        themeButton.classList.remove("spin");

        void themeButton.offsetWidth; /* لإعادة تشغيل الأنيميشن مع كل ضغطة */

        themeButton.classList.add("spin");

    }

}

/* تفعيل الثيم المناسب فور تحميل الملف */
applyTheme(getPreferredTheme());


/* =====================================================
   تأثير الانتقال بين المشاهد (Page Transition)
   زي الفواصل الانتقالية في بث مباريات كرة القدم:
   1) الخطوط بتتحرك وتغطي الشاشة بالكامل
   2) وهي مغطية، بينفذ الـ callback (تغيير المحتوى) من غير
      ما المستخدم يشوف القفزة
   3) الخطوط بترجع وتنكشف تدريجيًا
   ===================================================== */

const PT_COVER_MS = 420;
const PT_HOLD_MS = 260;
const PT_EXIT_MS = 450;

let ptIsRunning = false;

function playPageTransition(callback) {

    const overlay = document.getElementById("pageTransition");

    if (!overlay || ptIsRunning) {

        if (typeof callback === "function") callback();
        return;

    }

    ptIsRunning = true;

    overlay.classList.add("pt-active", "pt-cover");

    window.setTimeout(() => {

        overlay.classList.add("pt-hold");

        if (typeof callback === "function") callback();

        window.setTimeout(() => {

            overlay.classList.remove("pt-cover", "pt-hold");
            overlay.classList.add("pt-exit");

            window.setTimeout(() => {

                overlay.classList.remove("pt-active", "pt-exit");
                ptIsRunning = false;

            }, PT_EXIT_MS);

        }, PT_HOLD_MS);

    }, PT_COVER_MS);

}
