var task1Words = [
    { word: '' }
];

var result = [];
var videos = [];
var noTasks = true;
var variants = [
    {
        id: 'v1',
        value: 'четвертичный'
    },
     {
        id: 'v2',
        value: 'неоген'         
    },
     {
        id: 'v3',
        value: 'палеоген'
    },
     {
        id: 'v4',
        value: 'мел'
    },
     {
        id: 'v5',
        value: 'юра'
    },
     {
        id: 'v6',
        value: 'триас'
    },
     {
        id: 'v7',
        value: 'пермь'
    },
     {
        id: 'v8',
        value: 'карбон'
    },
     {
        id: 'v9',
        value: 'девон'
    },
     {
        id: 'v10',
        value: 'силур'
    },
     {
        id: 'v11',
        value: 'ордовик'
    },
     {
        id: 'v12',
        value: 'кембрий'
    }
];
var variants2 = [
    {
        id: 'v2_1',
        value: 'Базальт'
    },
    {
        id: 'v2_2',
        value: 'Мрамор'
    },
    {
        id: 'v2_3',
        value: 'Песчаник'
    },
    {
        id: 'v2_4',
        value: 'Гранит'
    },
    {
        id: 'v2_5',
        value: 'Кварцит'
    },
    {
        id: 'v2_6',
        value: 'Туф'
    },
    {
        id: 'v2_7',
        value: 'Известняк'
    },
    {
        id: 'v2_8',
        value: 'Мел'
    },
    {
        id: 'v2_9',
        value: 'Пемза'
    },
    {
        id: 'v2_10',
        value: 'Габбро'
    },
    {
        id: 'v2_11',
        value: 'Диорит'
    },
    {
        id: 'v2_12',
        value: 'Обсидиан'
    }
    
];
var destinations = [
    {
        id: 'd1',
        occ: false,
        bgcolor: '#ffff99',
        answer: 'четвертичный'
    },
     {
        id: 'd2',
        occ: false,
        bgcolor: '#ffff66',
        answer: 'неоген'
    },
     {
        id: 'd3',
        occ: false,
        bgcolor: '#ffc000',
        answer: 'палеоген'
    },
     {
        id: 'd4',
        occ: false,
        bgcolor: '#33cc33',
        answer: 'мел'
    },
     {
        id: 'd5',
        occ: false,
        bgcolor: '#3399ff',
        answer: 'юра'
    },
     {
        id: 'd6',
        occ: false,
        bgcolor: '#ff33cc',
        answer: 'триас'
    },
     {
        id: 'd7',
        occ: false,
        bgcolor: '#ff9900',
        answer: 'пермь'
    },
     {
        id: 'd8',
        occ: false,
        bgcolor: '#a6a6a6',
        answer: 'карбон'
    },
     {
        id: 'd9',
        occ: false,
        bgcolor: '#663300',
        answer: 'девон'
    },
     {
        id: 'd10',
        occ: false,
        bgcolor: '#5d8e50',
        answer: 'силур'
    },
     {
        id: 'd11',
        occ: false,
        bgcolor: '#116338',
        answer: 'ордовик'
    },
     {
        id: 'd12',
        occ: false,
        bgcolor: '#2f5750',
        answer: 'кембрий'
    }
];
var edits = [
    {
        id: 'e1',
        occupied: false,
        answer: 'Базальт',
        img: 'img/bazalt.png'
    },
    {
        id: 'e2',
        occupied: false,
        answer: 'Песчаник',
        img: 'img/peschanik.png'
    },
    {
        id: 'e3',
        occupied: false,
        answer: 'Мрамор',
        img: 'img/mramor.png'
    },
    {
        id: 'e4',
        occupied: false,
        answer: 'Гранит',
        img: 'img/granit.png'
    },
    {
        id: 'e5',
        occupied: false,
        answer: 'Кварцит',
        img: 'img/kvarcit.png'
    },
    {
        id: 'e6',
        occupied: false,
        answer: 'Известняк',
        img: 'img/izvestnyak.png'
    },
    {
        id: 'e7',
        occupied: false,
        answer: 'Туф',
        img: 'img/tuf.png'
    },
    {
        id: 'e8',
        occupied: false,
        answer: 'Диорит',
        img: 'img/diorit.png'
    },
    {
        id: 'e9',
        occupied: false,
        answer: 'Пемза',
        img: 'img/pemza.png'
    },
    {
        id: 'e10',
        occupied: false,
        answer: 'Обсидиан',
        img: 'img/obsidian.png'
    },
    {
        id: 'e11',
        occupied: false,
        answer: 'Габбро',
        img: 'img/gabbro.png'
    },
    {
        id: 'e12',
        occupied: false,
        answer: 'Мел',
        img: 'img/mel.png'
    }    
];
var sentences = [
    {
        id: 's1',
        text: '<p>Гор&shy;ные си&shy;сте&shy;мы со&shy;сто&shy;ят из </p><div style="display: inline"><span id="s1_1" class="edit1 zzz two drop"></span></div><p> и групп гор,' 
        + ' сход&shy;ных по воз&shy;рас&shy;ту и про&shy;ис&shy;хож&shy;де&shy;нию. Не&shy;сколь&shy;ко гор&shy;ных си&shy;стем, вы&shy;тя&shy;ну&shy;тых в сплош&shy;ную' 
        + ' или пре&shy;ры&shy;ви&shy;стую, но всё же еди&shy;ную по&shy;ло&shy;су, про&shy;тя&shy;ги&shy;ва&shy;ю&shy;щу&shy;ю&shy;ся через боль&shy;шую часть' 
        + ' ма&shy;те&shy;ри&shy;ка или через не&shy;сколь&shy;ко ма&shy;те&shy;ри&shy;ков на мно&shy;гие ты&shy;ся&shy;чи или де&shy;сят&shy;ки тысяч ки&shy;ло&shy;мет&shy;ров,' 
        + ' об&shy;ра&shy;зу&shy;ют </p><div style="display: inline"><span id="s1_2" class="edit1 zzz two drop"></span></div><p>, про&shy;хо&shy;дя&shy;щие по дну' 
        + ' оке&shy;а&shy;нов об&shy;ра&shy;зу&shy;ют </p><div style="display: inline"><span id="s1_3" class="edit1 zzz two drop"></span></div><p>.</p>',
        answer: ['хребтов','горный пояс','срединно-океанические хребты'],
        occ: [false,false,false],
        case: [{type: 1, mult: true},{type: 0, mult: false},{type: 0, mult: true}],
        no: 0
    },
    {
        id: 's2',
        text: '<p>Вул&shy;кан - гео&shy;ло&shy;ги&shy;че&shy;ское об&shy;ра&shy;зо&shy;ва&shy;ние, воз&shy;ни&shy;ка&shy;ю&shy;щее над ка&shy;на&shy;ла&shy;ми' 
        + ' и тре&shy;щи&shy;на&shy;ми в зем&shy;ной коре, по ко&shy;то&shy;рым на зем&shy;ную по&shy;верх&shy;ность из&shy;вер&shy;га&shy;ют&shy;ся лава,' 
        + ' пепел, го&shy;ря&shy;чие газы, пары воды и об&shy;лом&shy;ки гор&shy;ных пород. Ос&shy;нов&shy;ные части вул&shy;ка&shy;ни&shy;че&shy;ско&shy;го' 
        + ' ап&shy;па&shy;ра&shy;та: маг&shy;ма&shy;ти&shy;че&shy;ский очаг, </p><div style="display: inline"><span id="s2_1" class="edit1 zzz two drop"></span></div>' 
        + '<p> - вы&shy;вод&shy;ной канал, по ко&shy;то&shy;ро&shy;му </p><div style="display: inline"><span id="s2_2" class="edit1 zzz two drop"></span></div><p> под&shy;ни&shy;ма&shy;ет&shy;ся' 
        + ' к по&shy;верх&shy;но&shy;сти; конус - воз&shy;вы&shy;шен&shy;ность на по&shy;верх&shy;но&shy;сти Земли из про&shy;дук&shy;тов вы&shy;бро&shy;са' 
        + ' вул&shy;ка&shy;на; </p><div style="display: inline"><span id="s2_3" class="edit1 zzz two drop"></span></div><p> - углуб&shy;ле&shy;ние на по&shy;верх&shy;но&shy;сти ко&shy;ну&shy;са вул&shy;ка&shy;на.</p>',
        answer: ['жерло вулкана','магма','кратер'],
        occ: [false,false,false],
        case: [{type: 0, mult: false},{type: 0, mult: false},{type: 0, mult: false}],
        no: 1
    },
    {
        id: 's3',
        text: '<p>Уш&shy;ка&shy;ньи ост&shy;ро&shy;ва — по&shy;и&shy;сти&shy;не тер&shy;ри&shy;то&shy;рия за&shy;га&shy;док. Не&shy;смот&shy;ря на малые раз&shy;ме&shy;ры,' 
        + ' они очень ин&shy;те&shy;рес&shy;ны. Вы&shy;яс&shy;не&shy;но, что Уш&shy;ка&shy;ньи ост&shy;ро&shy;ва под&shy;ня&shy;лись из глу&shy;бин Бай&shy;ка&shy;ла в' 
        + ' </p><div style="display: inline"><span id="s3_1" class="edit1 zzz two drop"></span></div><p>, т. е. по&shy;след&shy;нем пе&shy;ри&shy;о&shy;де гео&shy;ло&shy;ги&shy;че&shy;ской ис&shy;то&shy;рии' 
        + ' Земли. Дол&shy;гое время уче&shy;ные счи&shy;та&shy;ли, что эти ост&shy;ро&shy;ва — остат&shy;ки под&shy;вод&shy;но&shy;го Уш&shy;ка&shy;нье&shy;го по&shy;ро&shy;га' 
        + ' и им суж&shy;де&shy;но по&shy;гиб&shy;нуть под дей&shy;стви&shy;ем раз&shy;ру&shy;ши&shy;тель&shy;ной силы бай&shy;каль&shy;ских волн. Од&shy;на&shy;ко' 
        + ' ис&shy;сле&shy;до&shy;ва&shy;ния по&shy;ка&shy;за&shy;ли, что Уш&shy;ка&shy;ньи ост&shy;ро&shy;ва по&shy;сте&shy;пен&shy;но под&shy;ни&shy;ма&shy;ют&shy;ся,' 
        + ' уве&shy;ли&shy;чи&shy;ва&shy;ясь в длину, ши&shy;ри&shy;ну, вы&shy;со&shy;ту. Под&shy;ня&shy;тие обу&shy;слов&shy;ле&shy;но по&shy;движ&shy;но&shy;стью' 
        + ' </p><div style="display: inline"><span id="s3_2" class="edit1 zzz two drop"></span></div><p> в этом ре&shy;ги&shy;о&shy;не, в част&shy;но&shy;сти в рай&shy;о&shy;не под&shy;вод&shy;но&shy;го' 
        + ' Уш&shy;ка&shy;нье&shy;го по&shy;ро&shy;га, ко&shy;то&shy;рый ис&shy;пы&shy;ты&shy;ва&shy;ет по&shy;сте&shy;пен&shy;ное под&shy;ня&shy;тие. Ост&shy;ро&shy;ва' 
        + ' по&shy;тря&shy;са&shy;ют кра&shy;со&shy;той при&shy;ро&shy;ды. Имен&shy;но здесь со&shy;сре&shy;до&shy;то&shy;че&shy;но мно&shy;же&shy;ство' 
        + ' </p><div style="display: inline"><span id="s3_3" class="edit1 zzz two drop"></span></div><p> — видов, ко&shy;то&shy;рые можно встре&shy;тить толь&shy;ко на этом ар&shy;хи&shy;пе&shy;ла&shy;ге.</p>',
        answer: ['четвертичном','земной коры','эндемичных видов'],
        occ: [false,false,false],
        case: [{type: 5, mult: false},{type: 1, mult: false},{type: 1, mult: true}],
        no: 2
    },
    {
        id: 's4',
        text: '<p>Тол&shy;щи&shy;на ли&shy;то&shy;сфе&shy;ры на суше в сред&shy;нем ко&shy;леб&shy;лет&shy;ся от 35—40 км (на рав&shy;нин&shy;ных участ&shy;ках) до 70 км' 
        + ' (в гор&shy;ных рай&shy;о&shy;нах). Под </p><div style="display: inline"><span id="s4_1" class="edit1 zzz two drop"></span></div><p> тол&shy;щи&shy;на зем&shy;ной коры ещё боль&shy;ше:' 
        + ' на&shy;при&shy;мер, под Ги&shy;ма&shy;ла&shy;я&shy;ми мощ&shy;ность её до&shy;сти&shy;га&shy;ет 90 км. Зем&shy;ная кора под оке&shy;а&shy;на&shy;ми самая тон&shy;кая' 
        + ' — в сред&shy;нем около 7—10 км, а в не&shy;ко&shy;то&shy;рых рай&shy;о&shy;нах Ти&shy;хо&shy;го оке&shy;а&shy;на — до 5 км. Тол&shy;щи&shy;ну зем&shy;ной коры можно' 
        + ' опре&shy;де&shy;лить по ско&shy;ро&shy;сти рас&shy;про&shy;стра&shy;не&shy;ния </p><div style="display: inline"><span id="s4_2" class="edit1 zzz two drop"></span></div><p>. По&shy;след&shy;ние' 
        + ' также дают не&shy;ко&shy;то&shy;рые све&shy;де&shy;ния о свой&shy;ствах </p><div style="display: inline"><span id="s4_3" class="edit1 zzz two drop"></span></div><p>, рас&shy;по&shy;ло&shy;жен&shy;ной' 
        + ' под зем&shy;ной корой и ча&shy;стич&shy;но от&shy;но&shy;ся&shy;щей&shy;ся к ли&shy;то&shy;сфе&shy;ре.</p>',
        answer: ['древними горами','сейсмических волн','мантии'],
        occ: [false,false,false],
        case: [{type: 4, mult: true},{type: 1, mult: true},{type: 1, mult: false}],
        no: 3
    },
    {
        id: 's5',
        text: '<p>Ре&shy;льеф Южной Аме&shy;ри&shy;ки очень кон&shy;тра&shy;стен. Южная Аме&shy;ри&shy;ка рас&shy;по&shy;ла&shy;га&shy;ет&shy;ся на одной — Южно-Аме&shy;ри&shy;кан&shy;ской' 
        + ' </p><div style="display: inline"><span id="s5_1" class="edit1 zzz two drop"></span></div><p>. Она дви&shy;жет&shy;ся на се&shy;ве&shy;ро-запад, при этом она стал&shy;ки&shy;ва&shy;ет&shy;ся на Се&shy;ве&shy;ре с ' 
        + 'Ка&shy;риб&shy;ской пли&shy;той, на за&shy;па&shy;де с пли&shy;та&shy;ми Наска и Кокос. След&shy;стви&shy;ем этого яв&shy;ля&shy;ет&shy;ся про&shy;дол&shy;жа&shy;ю&shy;ще&shy;е&shy;ся' 
        + ' и сей&shy;час фор&shy;ми&shy;ро&shy;ва&shy;ние </p><div style="display: inline"><span id="s5_2" class="edit1 zzz two drop"></span></div><p> Анд. На юге име&shy;ют&shy;ся рай&shy;о&shy;ны столк&shy;но&shy;ве&shy;ния с ' 
        + 'пли&shy;той Ско&shy;тия. При этом об&shy;ра&shy;зу&shy;ют&shy;ся </p><div style="display: inline"><span id="s5_3" class="edit1 zzz two drop"></span></div><p>, рас&shy;по&shy;ло&shy;жен&shy;ные между' 
        + ' Ан&shy;тарк&shy;ти&shy;дой и Южной Аме&shy;ри&shy;кой.</p>',
        answer: ['литосферной плите','складчатой области','острова'],
        occ: [false,false,false],
        case: [{type: 2, mult: false},{type: 1, mult: false},{type: 0, mult: true}],
        no: 4
    },
     {
        id: 's6',
        text: '<p>Общие черты ре&shy;лье&shy;фа Рус&shy;ской рав&shy;ни&shy;ны пред&shy;опре&shy;де&shy;ле&shy;ны ее тек&shy;то&shy;ни&shy;че&shy;ским стро&shy;е&shy;ни&shy;ем,' 
         + ' при&shy;над&shy;леж&shy;но&shy;стью рав&shy;ни&shy;ны к древ&shy;ней </p><div style="display: inline"><span id="s6_1" class="edit1 zzz two drop"></span></div><p>, с дав&shy;не&shy;го вре&shy;ме&shy;ни' 
         + ' не ис&shy;пы&shy;ты&shy;вав&shy;шей про&shy;цес&shy;сов го&shy;ро&shy;об&shy;ра&shy;зо&shy;ва&shy;ния. Как по&shy;ка&shy;за&shy;ло бу&shy;ре&shy;ние,' 
         + ' кри&shy;стал&shy;ли&shy;че&shy;ский </p><div style="display: inline"><span id="s6_2" class="edit1 zzz two drop"></span></div><p> Рус&shy;ской плат&shy;фор&shy;мы имеет не&shy;ров&shy;ный гор&shy;ный' 
         + ' ре&shy;льеф, с ко&shy;ле&shy;ба&shy;ни&shy;я&shy;ми высот до 1500—2000 м на рас&shy;сто&shy;я&shy;нии 100—150 км. Его вы&shy;хо&shy;ды на' 
         + ' по&shy;верх&shy;ность на&shy;зы&shy;ва&shy;ют&shy;ся </p><div style="display: inline"><span id="s6_3" class="edit1 zzz two drop"></span></div><p>.</p>',
        answer: ['платформе','фундамент','щитом'],
        occ: [false,false,false],
        case: [{type: 5, mult: false},{type: 0, mult: false},{type: 4, mult: false}],
        no: 5
    },
    {
        id: 's7',
        text: '<p>Ре&shy;льеф этого ма&shy;те&shy;ри&shy;ка за&shy;ви&shy;сит от ис&shy;то&shy;рии раз&shy;ви&shy;тия зем&shy;ной коры, дей&shy;ствия внут&shy;рен&shy;них и ' 
        + 'внеш&shy;них про&shy;цес&shy;сов. В ос&shy;но&shy;ве Аф&shy;ри&shy;ки лежит </p><div style="display: inline"><span id="s7_1" class="edit1 zzz two drop"></span></div><p>, по&shy;это&shy;му на ' 
        + 'ма&shy;те&shy;ри&shy;ке пре&shy;об&shy;ла&shy;да&shy;ют рав&shy;ни&shy;ны. Низ&shy;мен&shy;но&shy;сти до&shy;воль&shy;но редки, они рас&shy;по&shy;ло&shy;же&shy;ны' 
        + ' по бе&shy;ре&shy;гам ма&shy;те&shy;ри&shy;ка. Внут&shy;рен&shy;няя часть Аф&shy;ри&shy;ки за&shy;ня&shy;та вы&shy;со&shy;ки&shy;ми рав&shy;ни&shy;на&shy;ми,' 
        + ' из&shy;ред&shy;ка рас&shy;се&shy;ка&shy;е&shy;мы&shy;ми глу&shy;бо&shy;ки&shy;ми уще&shy;лья&shy;ми — до&shy;ли&shy;на&shy;ми рек. Ма&shy;те&shy;рик похож на ' 
        + 'вы&shy;со&shy;кий стол среди окру&shy;жа&shy;ю&shy;ще&shy;го его оке&shy;а&shy;на. Над этим «сто&shy;лом» воз&shy;вы&shy;ша&shy;ет&shy;ся ряд ещё более' 
        + ' вы&shy;со&shy;ких вер&shy;шин и гор&shy;ных мас&shy;си&shy;вов, мно&shy;гие из ко&shy;то&shy;рых имеют </p><div style="display: inline"><span id="s7_2" class="edit1 zzz two drop"></span></div><p>.' 
        + ' Под вли&shy;я&shy;ни&shy;ем внут&shy;рен&shy;них про&shy;цес&shy;сов от&shy;дель&shy;ные участ&shy;ки плат&shy;фор&shy;мы под&shy;ни&shy;ма&shy;лись, ' 
        + 'об&shy;ра&shy;зуя вы&shy;со&shy;кие <div style="display: inline"><span id="s7_3" class="edit1 zzz two drop"></span></div> (Во&shy;сточ&shy;но-Аф&shy;ри&shy;кан&shy;ское), дру&shy;гие' 
        + ' опус&shy;ка&shy;лись, что при&shy;ве&shy;ло к фор&shy;ми&shy;ро&shy;ва&shy;нию круп&shy;ных кот&shy;ло&shy;вин (Чад, Конго, Ка&shy;ла&shy;ха&shy;ри).',
        answer: ['древняя платформа','вулканическое происхождение','плоскогорья'],
        occ: [false,false,false],
        case: [{type: 0, mult: false},{type: 0, mult: false},{type: 0, mult: true}],
        no: 6
    },
    {
        id: 's8',
        text: '<p>В ре&shy;лье&shy;фе этой части ма&shy;те&shy;ри&shy;ка почти нет рез&shy;ких ко&shy;ле&shy;ба&shy;ний высот, редки зем&shy;ле&shy;тря&shy;се&shy;ния,' 
        + ' от&shy;сут&shy;ству&shy;ют дей&shy;ству&shy;ю&shy;щие вул&shy;ка&shy;ны. Здесь много мил&shy;ли&shy;о&shy;нов лет назад вер&shy;ти&shy;каль&shy;ные ' 
        + '</p><div style="display: inline"><span id="s8_1" class="edit1 zzz two drop"></span></div><p> зем&shy;ной коры при&shy;ве&shy;ли к об&shy;ра&shy;зо&shy;ва&shy;нию Бра&shy;зиль&shy;ско&shy;го ' 
        + 'и Гви&shy;ан&shy;ско&shy;го плос&shy;ко&shy;го&shy;рий. При этом в зем&shy;ной коре об&shy;ра&shy;зо&shy;ва&shy;лись </p><div style="display: inline"><span id="s8_2" class="edit1 zzz two drop">' 
        + '</span></div><p>, в ко&shy;то&shy;рые внед&shy;ря&shy;лась </p><div style="display: inline"><span id="s8_3" class="edit1 zzz two drop"></span></div><p>. Ре&shy;льеф плос&shy;ко&shy;го&shy;рий' 
        + ' раз&shy;но&shy;об&shy;ра&shy;зен: сто&shy;ло&shy;вые горы че&shy;ре&shy;ду&shy;ют&shy;ся с хол&shy;ми&shy;сты&shy;ми про&shy;стран&shy;ства&shy;ми, их сме&shy;ня&shy;ют' 
        + ' не&shy;вы&shy;со&shy;кие мас&shy;си&shy;вы, из&shy;ре&shy;зан&shy;ные уще&shy;лья&shy;ми.</p>',
        answer: ['движения','разломы','магма'],
        occ: [false,false,false],
        case: [{type: 0, mult: true},{type: 0, mult: true},{type: 0, mult: false}],
        no: 7
    },
    {
        id: 's9',
        text: '<p>Бе&shy;ре&shy;го&shy;вая линия Ис&shy;лан&shy;дии имеет про&shy;тя&shy;жен&shy;ность около 5 тыс. км. На се&shy;ве&shy;ро-за&shy;па&shy;де, се&shy;ве&shy;ре' 
        + ' и во&shy;сто&shy;ке ска&shy;ли&shy;стые бе&shy;ре&shy;га рас&shy;чле&shy;не&shy;ны мно&shy;го&shy;чис&shy;лен&shy;ны&shy;ми за&shy;ли&shy;ва&shy;ми — ' 
        + '</p><div style="display: inline"><span id="s9_1" class="edit1 zzz two drop"></span></div><p> и ост&shy;ро&shy;ва&shy;ми. Через всю стра&shy;ну с се&shy;ве&shy;ра на юго-запад ' 
        + 'про&shy;сти&shy;ра&shy;ет&shy;ся об&shy;шир&shy;ная тер&shy;ри&shy;то&shy;рия, по&shy;кры&shy;тая в ос&shy;нов&shy;ном ту&shy;фа&shy;ми и ла&shy;во&shy;вы&shy;ми' 
        + ' по&shy;кро&shy;ва&shy;ми, об&shy;ра&shy;зо&shy;вав&shy;ши&shy;ми&shy;ся в ре&shy;зуль&shy;та&shy;те </p><div style="display: inline"><span id="s9_2" class="edit1 zzz two drop"></span></div><p>,' 
        + ' с ко&shy;то&shy;рым свя&shy;за&shy;но на&shy;ли&shy;чие на тер&shy;ри&shy;то&shy;рии ост&shy;ро&shy;ва го&shy;ря&shy;чих ис&shy;точ&shy;ни&shy;ков и </p><div style="display: inline">' 
        + '<span id="s9_3" class="edit1 zzz two drop"></span></div><p>. По&shy;след&shy;ние были впер&shy;вые изу&shy;че&shy;ны здесь и по&shy;лу&shy;чи&shy;ли свое на&shy;зва&shy;ние' 
        + ' от са&shy;мо&shy;го круп&shy;но&shy;го фон&shy;та&shy;ни&shy;ру&shy;ю&shy;ще&shy;го го&shy;ря&shy;че&shy;го ис&shy;точ&shy;ни&shy;ка Ис&shy;лан&shy;дии.</p>',
        answer: ['фьордами','вулканизма','гейзеров'],
        occ: [false,false,false],
        case: [{type: 4, mult: true},{type: 1, mult: false},{type: 1, mult: true}],
        no: 8
    },    
    {
        id: 's10',
        text: '<p>Внут&shy;рен&shy;ние и внеш&shy;ние силы Земли, дей&shy;ствуя по&shy;сто&shy;ян&shy;но и од&shy;но&shy;вре&shy;мен&shy;но, фор&shy;ми&shy;ру&shy;ют' 
        + ' по&shy;верх&shy;ность нашей пла&shy;не&shy;ты. Со&shy;во&shy;куп&shy;ность не&shy;ров&shy;но&shy;стей по&shy;верх&shy;но&shy;сти Земли на&shy;зы&shy;ва&shy;ет&shy;ся' 
        + ' ре&shy;лье&shy;фом. Среди огром&shy;но&shy;го раз&shy;но&shy;об&shy;ра&shy;зия ре&shy;лье&shy;фа уче&shy;ные вы&shy;де&shy;ля&shy;ют самые круп&shy;ные формы' 
        + ' пла&shy;не&shy;тар&shy;но&shy;го мас&shy;шта&shy;ба - </p><div style="display: inline"><span id="s10_1" class="edit1 zzz two drop"></span></div><p> и оке&shy;а&shy;ны. Глав&shy;ная роль в их ' 
        + 'со&shy;зда&shy;нии при&shy;над&shy;ле&shy;жит внут&shy;рен&shy;ним силам, в ре&shy;зуль&shy;та&shy;те дей&shy;ствия ко&shy;то&shy;рых воз&shy;ни&shy;ка&shy;ют ' 
        + '</p><div style="display: inline"><span id="s10_2" class="edit1 zzz two drop"></span></div><p>, под&shy;ня&shy;тия, опус&shy;ка&shy;ния зем&shy;ной коры. Силы та&shy;ко&shy;го же мас&shy;шта&shy;ба' 
        + ' со&shy;зда&shy;ют об&shy;шир&shy;ные </p><div style="display: inline"><span id="s10_3" class="edit1 zzz two drop"></span></div><p> и гор&shy;ные со&shy;ору&shy;же&shy;ния.</p>',
        answer: ['материки','тектонические разломы','равнины'],
        occ: [false,false,false],
        case: [{type: 0, mult: true},{type: 0, mult: true},{type: 0, mult: true}],
        no: 9
    },    
    {
        id: 's11', 
        text: '<p>Карст - со&shy;во&shy;куп&shy;ность про&shy;цес&shy;сов и яв&shy;ле&shy;ний, свя&shy;зан&shy;ных с де&shy;я&shy;тель&shy;но&shy;стью </p><div style="display: inline"><span id="s11_1" ' 
        + 'class="edit1 zzz two drop"></span></div><p> и вы&shy;ра&shy;жа&shy;ю&shy;щих&shy;ся в рас&shy;тво&shy;ре&shy;нии гор&shy;ных пород. Кар&shy;сто&shy;вые про&shy;цес&shy;сы' 
        + ' про&shy;ис&shy;хо&shy;дят в таких гор&shy;ных по&shy;ро&shy;дах, как, на&shy;при&shy;мер, </p><div style="display: inline"><span id="s11_2" class="edit1 zzz two drop"></span></div><p> и мел. ' 
        + 'В ре&shy;зуль&shy;та&shy;те кар&shy;сто&shy;вых про&shy;цес&shy;сов об&shy;ра&shy;зу&shy;ют&shy;ся от&shy;ри&shy;ца&shy;тель&shy;ные формы ре&shy;лье&shy;фа ' 
        + '(по&shy;верх&shy;ност&shy;ные и под&shy;зем&shy;ные), на&shy;при&shy;мер, </p><div style="display: inline"><span id="s11_3" class="edit1 zzz two drop"></span></div><p>. Наи&shy;боль&shy;шее ' 
        + 'раз&shy;но&shy;об&shy;ра&shy;зие кар&shy;сто&shy;вых форм на&shy;блю&shy;да&shy;ет&shy;ся в от&shy;кры&shy;том типе кар&shy;ста (гор&shy;ные рай&shy;о&shy;ны Крыма, ' 
        + 'Кав&shy;ка&shy;за, Кар&shy;пат, Альп и др.).</p>',
        answer: ['воды','известняк','пещера'],
        occ: [false,false,false],
        case: [{type: 1, mult: false},{type: 0, mult: false},{type: 0, mult: false}],
        no: 10
    },       
    {
        id: 's12',
        text: '<p>Ис&shy;лан&shy;дия – ост&shy;ров в Ат&shy;лан&shy;ти&shy;че&shy;ском оке&shy;а&shy;не у Се&shy;вер&shy;но&shy;го по&shy;ляр&shy;но&shy;го </p><div style="display: inline"><span id="s12_1"' 
        + ' class="edit1 zzz two drop"></span></div><p>. Почти вся тер&shy;ри&shy;то&shy;рия ост&shy;ро&shy;ва пред&shy;став&shy;ля&shy;ет собой вул&shy;ка&shy;ни&shy;че&shy;ское ' 
        + 'плато, сло&shy;жен&shy;ное ту&shy;фа&shy;ми и ла&shy;во&shy;вы&shy;ми по&shy;кро&shy;ва&shy;ми, об&shy;ра&shy;зо&shy;вав&shy;ши&shy;ми&shy;ся в ре&shy;зуль&shy;та&shy;те' 
        + ' </p><div style="display: inline"><span id="s12_2" class="edit1 zzz two drop"></span></div><p>,  ко&shy;то&shy;рым свя&shy;за&shy;но на&shy;ли&shy;чие на тер&shy;ри&shy;то&shy;рии ост&shy;ро&shy;ва' 
        + ' тер&shy;маль&shy;ных вод и го&shy;ря&shy;чих ис&shy;точ&shy;ни&shy;ков – </p><div style="display: inline"><span id="s12_3" class="edit1 zzz two drop"></span></div><p>. По&shy;след&shy;ние были ' 
        + 'впер&shy;вые изу&shy;че&shy;ны здесь и по&shy;лу&shy;чи&shy;ли своё на&shy;зва&shy;ние от са&shy;мо&shy;го круп&shy;но&shy;го фон&shy;та&shy;ни&shy;ру&shy;ю&shy;ще&shy;го' 
        + ' го&shy;ря&shy;че&shy;го ис&shy;точ&shy;ни&shy;ка Ис&shy;лан&shy;дии.</p>',
        answer: ['круга','вулканизма','гейзеров'],
        occ: [false,false,false],
        case: [{type: 1, mult: false},{type: 1, mult: false},{type: 1, mult: true}],
        no: 11
    }
];
var task3vars = [
    {
        id: 'v3_1',
        vars: ['глыбовый','хребет','горный пояс','тектонический','срединно-океанический хребет','складчатый'],
        width: '490px'
    },
    {
        id: 'v3_2',
        vars: ['жерло вулкана','движение','магма','горная порода','платформа','кратер'],
        width: '490px'
    },
    {
        id: 'v3_3',
        vars: ['эндемичный вид','исчезающий вид','четвертичный','кембрийский','земная кора','мантия'],
        width: '490px'
    },
    {
        id: 'v3_4',
        vars: ['волна в океане','сейсмическая волна','мантия','ядро','древняя гора','молодая равнина'],
        width: '490px'
    },
    {
        id: 'v3_5',
        vars: ['складчатая область','литосферная плита','океаническое течение','остров','старая гора','аккумулятивная равнина'],
        width: '490px'
    },
    {
        id: 'v3_6',
        vars: ['складчатая область','платформа','чехол','фундамент','щит','возвышенность'],
        width: '490px'
    },
    {
        id: 'v3_7',
        vars: ['складчатая область','вулканическое происхождение','плоскогорье','низменность','древняя платформа','осадочное происхождение'],
        width: '590px'
    },
    {
        id: 'v3_8',
        vars: ['магма','движение','лава','горная порода','разлом','мантия'],
        width: '390px'
    },
    {
        id: 'v3_9',
        vars: ['вулканизм','карст','фьорд','мыс','гейзер','ключ'],
        width: '350px'
    },
    {
        id: 'v3_10',
        vars: ['остров','террикон','материк','овраг','тектонический разлом','равнина'],
        width: '430px'
    },
    {
        id: 'v3_11',
        vars: ['ветер','вода','базальт','известняк','тектонический разлом','пещера'],
        width: '390px'
    },
    {
        id: 'v3_12',
        vars: ['вулканизм','карст','фьорд','гейзер','круг','тропик'],
        width: '300px'
    }
];

var task4Q = [
    {
        q: 'На рельеф какой из обозначенных на карте России территорий древние покровные оледенения оказали наибольшее влияние?',
        answer: 1,
        map: 'svgrussia',
        caption: 'Рельеф России',
        id: 0
    },
    {
        q: 'Какой буквой на карте Африки обозначена территория, находящаяся в пределах рифтовой зоны?',
        answer: 3,
        map: 'svgafrica',
        caption: 'Рифт Африки',
        id: 1
    },
    {
        q: 'Установите соответствие между процессами и их названиями.',
        answer: [[160,305,-245,-180],[95,300,-245,-90],[-310,-56,-80,10]],
        ids: ['tgorst','tgraben','tsbros'],
        map: 'svggraben',
        caption: 'Горст Грабен Сброс',
        id: 2,
        dpi: 0.75
    },
    {
        q: 'Соотнесите формы дна мирового океана.',
        answer: [[-2,200,-425,-383],[-2,290,-400,-160],[-2,430,-245,-145],[750,922,-500,-140],[458,700,-620,-210],[350,570,-300,-8]],
        ids: ['shelf','sklon','loge','soh','vild','gelob'],
        map: 'svgocean',
        caption: 'Мировой океан',
        id: 3,
        dpi: 1.2
    },
    {
        q: 'Укажите районы возможных землетрясений и извежений вулканов.',
        answer: [['KAM'],['ALT','KVKZ','SAH','DEST']],
        map: 'svgrussia2',
        caption: 'Вулканы',
        id: 4
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче нефти.',
        answer: ['VE','RU','SA','US','CN','IR','IQ','CA','MX','NG','KW','AE'],
        map: 'svgworld',
        res: 'oil',
        caption: 'Нефть',
        id: 5
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче природного газа.',
        answer: ['US','RU','IR','QA','CA','CN','NO','SA','DZ','ID','TM','NL'],
        map: 'svgworld',
        res: 'gas',
        caption: 'Газ',
        id: 6
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче угля.',
        answer: ['CN','US','IN','AU','ID','RU','ZA','DE','PL','KZ','UA','TR'],
        map: 'svgworld',
        res: 'coal',
        caption: 'Уголь',
        id: 7
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче железной руды.',
        answer: ['CN','AU','BR','IN','RU','UA','ZA','US','CA','IR','SE','KZ'],
        map: 'svgworld',
        res: 'iron',
        caption: 'Железо',
        id: 8
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче бокситов.',
        answer: ['AU','BR','IN','CN','GN','ID','JM','RU','SR','VE','KZ','GY'],
        map: 'svgworld',
        res: 'alum',
        caption: 'Бокситы',
        id: 9
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче фосфоритов.',
        answer: ['US','MA','SN','TG','TN','EH','IL','JO','IQ','AU','NR','CN'],
        map: 'svgworld',
        res: 'fosfor',
        caption: 'Фосфориты',
        id: 10
    },
    {
        q: 'Укажите 12 стран лидирующих по добыче урановой руды.',
        answer: ['US','CA','RU','KZ','UZ','CN','AU','MW','NA','NE','ZA','UA'],
        map: 'svgworld',
        res: 'uran',
        caption: 'Уран',
        id: 11
    },
    {
        q: 'Укажите литосферные плиты',
        answer: [{'I': 'I'},{'II': 'II'},{'III': 'III'},{'IV': 'IV'},{'V': 'V'},{'VI': 'VI'},{'VII': 'VII'},{'VIII': 'VIII'},{'IX': 'IX'},{'X': 'X'},{'XI': 'XI'},{'XII': 'XII'},{'XIII': 'XIII'}],
        map: 'svgtectonic',
        caption: 'Литосферные плиты',
        id: 12
    }                  
];

var forces = [
    {
        id: '1',
        force: 'Внутренние силы',
        answer: ['Землетрясения','Вулканизмы','Вертикальное движение','Горизонтальное движение'],
        answer2: ['Щиты','Плоскогорье','Разломы','Низменности','Горы','Вулканы']
    },
    {
        id: '2',
        force: 'Внешние силы',
        answer: ['Ветер','Вода','Выветривание','Человек','Мерзлота','Сила тяжести','Оледенение'],
        answer2: ['Каньон','Балка','Барханы','Дюны','Карсты','Морены','Курумы']
    },
    {
        id: '3',
        force: 'Горы',
        answer: ['Горы','Сопки','Хребты']
    },
    {
        id: '4',
        force: 'Равнины',
        answer: ['Низменности','Возвышенности','Плоскогорья']
    }
];
var fvariants = [
    ['Землетрясения','Вулканизмы','Вертикальное движение','Горизонтальное движение','Ветер','Вода','Выветривание','Человек','Мерзлота','Сила тяжести','Оледенение'],
    ['Щиты','Плоскогорье','Разломы','Низменности','Каньон','Балка','Горы','Барханы','Дюны','Карсты','Морены','Курумы','Вулканы'],
    ['Горы','Низменности','Возвышенности','Плоскогорья','Сопки','Хребты']    
];
var task4Answer = {
    simple: 0,
    arr: []
};
var task5Answers;
var task3Index, task4Index;
var task3Results = [];
var taskIndexes = {
    task1ExprIndex: 0,
    task1WordsIndex: 0,
    task2WordsIndex: 0
};


function clearPage1() {
    
    var $page = $('#page_1');
    
    $page.find('.result-text').empty();
    $('#vars').empty().fadeIn();
    $page.find('.drop.drag').removeClass('drag');
    $page.find('.ui-draggable').draggable('destroy');
    destinations.forEach(function(item, i ,arr){
        item.occ = false;
        $('#' + item.id).removeAttr('bgcolor');
        $('#' + item.id).find('.cell').empty();
    });
    
}

function clearPage2() {
    
    var $page = $('#page_2');
    
    $page.find('.result-text').empty();
    $page.find('.vars2').empty();
    $page.find('.images').empty();
    $page.find('.drop.drag').removeClass('drag');
    $page.find('.ui-draggable').draggable('destroy');
    $page.find('.drop').css({background: '#52A2A9'});
    
    edits.forEach(function(item, i, arr) {
        item.occupied = false;
    });
}

function isDestination(id) {
    
    var result = false;
    
    destinations.forEach(function(item, i , destinations) {
        if(item.id == id) {result = true; return;}
    });
    return result;
}

function isCorrectTask1() {
    
    var result = true;
    
    destinations.forEach(function(item, i, arr) {
        if($('#' + item.id).text() != item.answer) {
            $('#' + item.id).attr('bgcolor', '#faa');
            result = false;
        }
    });
    return result;
}

function restoreBg() {
    edits.forEach(function(item, i, arr) {
        if(item.occupied) $('#' + item.id).css({background: '#FFD09D'});
    });
}

function isCorrectTask2() {
    
    var result = true;
    
    edits.forEach(function(item, i, arr) {
        if($('#' + item.id).text() != item.answer) {
            result = false;
            $('#' + item.id).css({
                background: '#faa'
            });
        }
    });
    return result;
}

function taskOnPage1(){
    errCount = 0;
    
    var vars = 12;
    var $page = $('#page_1');
    var $btn1 = $('#btn1');
    
    clearPage1();
    setBtnAnim($btn1);
    
    variants.shuffle();
    variants.forEach(function(item, i, arr){
        $('#vars').append('<div id="'+ item.id +'" class="panel era drag">' + item.value + '</div>');
    });
    var initDrag = function () {
          
        $page.find('.drag').draggable({
            revert: true,
            containment: $page,
            start: function () {
                if(!isDestination($(this)[0].parentElement.id)) $(this).removeClass('panel');
                highlight($page);             
            },
            stop: function () {
               if(!isDestination($(this)[0].parentElement.id)) $(this).addClass('panel');
                deHighlight($page);
            },
            stack: $page.find('.drag'),
        });
    };
    
    var initDrop = function() {
        $page.find('.drop').droppable({
			accept: $page.find('.drag')
        });
    };
    
    var dropdown = function() {        
		$page.find('.drop').droppable({
			drop:  function (e, ui) {
                
                 if(!isDestination($(ui.draggable)[0].parentElement.id)) {      
                     if( $(this).text() == '' ) {
                         $(this).text($(ui.draggable).text());
                         $(ui.draggable).css({display: 'none'});
                         $(this).addClass('drag');
                         initDrag();
                         initDrop();
                     }
                 }
                else {
                    if( $(this).text() != '' ) {                    
                        var str = $(this).text();
                        $(this).text($(ui.draggable).text());
                        $(ui.draggable).text(str);
                        destinations.forEach(function(item, i, destinations) {
                            if(item.id == $(ui.draggable)[0].parentElement.id) {    
                                $('#' + item.id).attr('bgcolor', item.bgcolor);
                                return;
                            }
                        });
                    }
                    else {
                        $(this).removeClass('drag').addClass('drag');
                        $(this).text($(ui.draggable).text());
                        $(ui.draggable).text('');
                         $(ui.draggable).removeClass('drag');
                        destinations.forEach(function(item, i, destinations) {
                            if(item.id == $(ui.draggable)[0].parentElement.id) {
                                $('#' + item.id).attr('bgcolor', '#afa');
                                item.occ = false;
                                return;
                            }
                        });
                        $(ui.draggable).draggable('destroy');
                        initDrag();
                        initDrop();
                    }
                }
                var savedThis = this;
                destinations.forEach(function(item, i, destinations) {
                    if($(savedThis)[0] === $('#' + item.id)[0].childNodes[0]) {    
                        item.occ = true;
                        $('#' + item.id).attr('bgcolor', item.bgcolor);
                        return;
                   }
                });
                
                 deHighlight($page);
            }
		});
	}
    
    initDrag();
    initDrop();
    dropdown();
    
    $btn1.off('click').on('click', function(){
        if(isCorrectTask1()) {
            playAudio('audioSuccess');
            $page.find('.true').removeClass('true');
            $page.find('.false').removeClass('false');
            $page.find('.result-text').addClass('true').text('ВЕРНО');
        }
        else {
            playAudio('audioFail');
            $page.find('.true').removeClass('true');
            $page.find('.false').removeClass('false');
            $page.find('.result-text').addClass('false').text('НЕВЕРНО');
        }
    });  
}

function highlight(page) {
    if(page.attr('id') === 'page_1' ) {
        destinations.forEach(function(item, i, arr) {
            if(!item.occ){
                $('#' + item.id).attr('bgcolor', '#afa');
            }
        });  
    }
    if(page.attr('id') === 'page_2' ) {
        edits.forEach(function(item, i, arr) {
            if(!item.occupied) {
                $('#' + item.id).css({
                    background: '#FFD09D'
                });
            }
        });
    }
    if(page.attr('id') === 'page_3' ) {
        sentences[task3Index].occ.forEach(function(item, i, arr) {
            if(!item) {
                $('#' + sentences[task3Index].id + '_' + (i + 1)).css({
                    'border-color': '#afa'
                });
            }
        });
    }
    if(page.attr('id') === 'page_5' ) {
        if( page.find('.landscape').hasClass('hide') ) {
            page.find('.force1').addClass('highlight');
        }
        else {
            page.find('.landscape').addClass('highlight');
        }
    }
}

function deHighlight(page) {
    if(page.attr('id') === 'page_1' ) {
        destinations.forEach(function(item, i, arr) {
            if(!item.occ){
               $('#' + item.id).removeAttr('bgcolor');
            }
        });
    }
    if(page.attr('id') === 'page_2' ) {
        edits.forEach(function(item, i, arr) {
            if(!item.occupied) {
                $('#' + item.id).css({
                    background: '#52A2A9'
                });
            }
        });
    }
    if(page.attr('id') === 'page_3' ) {
        sentences[task3Index].occ.forEach(function(item, i, arr) {
            if(!item) {
                $('#' + sentences[task3Index].id + '_' + (i + 1)).css({
                    'border-color': '#FFDCB7'
                });
            }
        });
    }
    if(page.attr('id') === 'page_5' ) {
        if( page.find('.landscape').hasClass('hide') ) {
            page.find('.force1').removeClass('highlight');
        }
        else {
            page.find('.force1').removeClass('highlight');
            page.find('.landscape').removeClass('highlight');
        }
    }
}

function isEdits(id) {
    
    var result = false;
    
    edits.forEach(function(item, i, arr) {
        if(item.id == id) { 
            result = true;
            return;
        }
    });
    
    return result;
}

function zoomIt(src) {
    
   // $obj.closest('.image').addClass('zoom');
    $('#page_2').find('.imviewer').css({display: 'flex'});
    $('#page_2').find('.imviewer').empty();
    $('#page_2').find('.imviewer').append('<img src="' + src + '"></div>');
    $('#imviewer1').off('click').on('click', function() {
         $('#page_2').find('.imviewer').css({display: 'none'});        
    });
}

function taskOnPage2() {
    
    var $page = $('#page_2');
    var $btn2 = $('#btn2');
    
    clearPage2();
    
    setBtnAnim($btn2);
    variants2.shuffle();
    variants2.forEach(function(item, i, arr){
        $page.find('.vars2').append('<div id="' + item.id + '" class="panel variants2 drag">' + item.value + '</div>');
    });
    
    edits.shuffle();
    edits.forEach(function(item, i, arr) {
        $page.find('.images').append('<div class="panel image"><img id="im' + item.id + '" src="' + item.img + '"></div>');
        $page.find('.images').append('<div><span id="' + item.id + '" class="edit1 drop"></span></div>');
    });
   
    $btn2.off('click').on('click', function() {
        if(isCorrectTask2()) {
            playAudio('audioSuccess');
            $page.find('.true').removeClass('true');
            $page.find('.false').removeClass('false');
            $page.find('.result-text').addClass('true').text('ВЕРНО');
        }
        else {
            playAudio('audioFail');
            $page.find('.true').removeClass('true');
            $page.find('.false').removeClass('false');
            $page.find('.result-text').addClass('false').text('НЕВЕРНО');
        }
    });
    var initZoom = function() {
        edits.forEach(function(item, i, arr) {
            $('#im' + item.id).off('click').on('click', function() {
                zoomIt(item.img);
            });
        });
    };
     
    var initDrag = function () {
        $page.find('.drag').draggable({
            revert: true,
            containment: $page,
            start: function () {
               //if(!isEdits($(this).attr('id'))) 
                   highlight($page);
                   restoreBg();
            },
            stop: function () {
                //if(!isEdits($(this).attr('id'))) 
                    deHighlight($page);
            },
            stack: $page.find('.drag'),
        });
    };
    
    var initDrop = function(){
         $page.find('.drop').droppable({
            accept: $page.find('.drag')
         });
    };
    
    var dropdown = function() {
        $page.find('.drop').droppable({
            drop: function(e, ui) {
                var savedThis = this;
                if(!isEdits($(ui.draggable).attr('id'))) {
                    $(this).addClass('drag');
                    initDrag();
                    initDrop();
                    if( $(this).text() == '' ) {
                         
                         $(this).text($(ui.draggable).text());
                         $(ui.draggable).css({display: 'none'});
                     }                    
                }
                else {
                    if( $(this).text() !='' ) {
                        var str = $(this).text();
                        $(this).text($(ui.draggable).text());
                        $(ui.draggable).text(str);
                    }
                    else {
                        $(this).removeClass('drag').addClass('drag');
                        $(this).text($(ui.draggable).text());
                        $(ui.draggable).text('');
                        $(ui.draggable).removeClass('drag');
                        
                        $(ui.draggable).css({opacity: 0});
                        setTimeout(function(){                            
                            $(ui.draggable).css({opacity: 1});
                        }, 500);
                        edits.forEach(function(item, i, arr) {
                            if($(ui.draggable)[0] === $('#' + item.id)[0]) {                                   
                                item.occupied = false;                            
                                return;
                            }
                        });
                        $(ui.draggable).draggable('destroy');
                        initDrag();
                        initDrop();
                    }
                }
                
                edits.forEach(function(item, i, arr) {
                    if($(savedThis)[0] === $('#' + item.id)[0]) {    
                        item.occupied = true;
                        return;
                   }
                });
                deHighlight($page);
            }
        });
    };
    initDrag();
    initDrop();
    initZoom();
    dropdown();    
}

function nextSentence(index){
    var $page = $('#page_3');    
    
    $page.find('.senten').html(sentences[index].text);
    $page.find('.vars3').empty();
    $page.find('.vars3').css({width: task3vars[index].width});
    //$page.find('.vars3').css({left: task3vars[index].left});
    task3vars[index].vars.shuffle();
    task3vars[index].vars.forEach(function(item, i , arr) {
        $page.find('.vars3').append('<div class="panel variants3 zzz drag">' + item + '</div>');
    });
};

function isSentence(id){
    
    var result = false;
    var str;
    
    for(var i = 0; i < sentences[task3Index].answer.length; i++){
        str = sentences[task3Index].id + '_' + (i + 1);
        if( str == id ) { 
            result = true;
            break;
        }
    }
    
    return result;
}

function setCase(str, cs, mult, initial) {
    
    
    var result = str;
    var dict = [
        {
            'хребет': 
            {
                case: ['хребет','хребта','хребту','хребет','хребтом','хребте'],
                mcase: ['хребты','хребтов','хребтам','хребты','хребтами','хребтах']
            }  
        },
        {
            
            'горный пояс': 
            {
              case: ['горный пояс','горного пояса','горному поясу','горный пояс','горным поясом','горном поясе'],
              mcase: ['горные пояса','горных поясов','горным поясам','горные пояса','горными поясами','горных поясах']
          }
        },
        {
            'срединно-океанический хребет': 
            {
                case: ['срединно-океанический хребет','срединно-океанического хребета','срединно-океаническому хребету','срединно-океанический хребет','срединно-океаническим хребтом','срединно-океаническом хребте'],
                mcase: ['срединно-океанические хребты','срединно-океанических хребтов','срединно-океаническим хребтам','срединно-океанические хребты','срединно-океаническими хребтами','срединно-океанических хребтах']
            } 
        },
        {
            'глыбовый': 
            {
                case: ['глыбовый','глыбового','глыбовому','глыбовый','глыбовым','глыбовом'],
                mcase: ['глыбовые','глыбовых','глыбовым','глыбовые','глыбовыми','глыбовых']
            }
        },
        {
            'тектонический': 
            {
                case: ['тектонический','тектонического','тектоническому','тектонический','тектоническим','тектоническом'],
                mcase: ['тектонические','тектонических','тектоническим','тектонические','тектоническими','тектонических']
            }
        },
        {
            'складчатый': 
            {
                case: ['складчатый','складчатого','складчатому','складчатый','складчатым','складчатом'],
                mcase: ['складчатые','складчатых','складчатым','складчатые','складчатыми','складчатых']
            }
        },
        {
            'жерло вулкана': 
            {
                case: ['жерло вулкана','жерла вулкана','жерлу вулкана','жерло вулкана','жерлом вулкана','жерлах вулкана'],
                mcase: ['жерла вулканов','жерлов вулканов','жерлам вулканов','жерла вулканов','жерлами вулканов','жерлах вулканов']
            }
        },
        {
            'движение': 
            {
                case: ['движение','движения','движению','движение','движением','движении'],
                mcase: ['движения','движений','движениям','движения','движениями','движениях']
            }
        },
        {
            'магма': 
            {
                case: ['магма','магмы','магме','магма','магмой','магме'],
                mcase: ['магмы','магм','магмам','магмы','магмами','магмах']
            }
        },
        {
            'горная порода': 
            {
                case: ['горная порода','горной породы','горной породе','горную породу','горной породой','горной породе'],
                mcase: ['горные породы','горных пород','горным породам','горные породы','горными породами','горных породах']
            }
        },
        {
            'платформа': 
            {
                case: ['платформа','платформы','платформе','платформу','платформой','платформе'],
                mcase: ['платформы','платформ','платформам','платформы','платформами','платформах']
            }
        },
        {
            'кратер': 
            {
                case: ['кратер','кратера','кратеру','кратер','кратером','кратере'],
                mcase: ['кратеры','кратеров','кратерам','кратеры','кратерами','кратерах']
            }
        },
        {
            'эндемичный вид': 
            {
                case: ['эндемичный вид','эндемичного вида','эндемичному виду','эндемичный вид','эндемичным видом','эндемичном виде'],
                mcase: ['эндемичные виды','эндемичных видов','эндемичным видам','эндемичныйе виды','эндемичными видами','эндемичных видах']
            }
        },
        {
            'исчезающий вид': 
            {
                case: ['эндемичный вид','исчезающего вида','исчезающему виду','исчезающий вид','исчезающим видом','исчезающем виде'],
                mcase: ['исчезающие виды','исчезающих видов','исчезающим видам','исчезающие виды','исчезающими видами','исчезающих видах']
            }
        },
        {
            'четвертичный': 
            {
                case: ['четвертичный','четвертичного','четвертичному','четвертичный','четвертичным','четвертичном'],
                mcase: ['четвертичные','четвертичных','четвертичным','четвертичные','четвертичными','четвертичным']
            }
        },
        {
            'кембрийский': 
            {
                case: ['кембрийский','кембрийского','кембрийскому','кембрийский','кембрийским','кембрийском'],
                mcase: ['кембрийские','кембрийских','кембрийским','кембрийские','кембрийскими','кембрийских']
            }
        },
        {
            'земная кора': 
            {
                case: ['земная кора','земной коры','земной коре','земную кору','земной корой','земной коре'],
                mcase: ['земнае коры','земных кор','земнам корам','земнае коры','земнами корами','земных корах']
            }
        },
        {
            'мантия': 
            {
                case: ['мантия','мантии','мантии','мантию','мантей','мантии'],
                mcase: ['мантии','мантий','мантиям','мантии','мантиями','мантиях']
            }
        },
        {
            'волна в океане': 
            {
                case: ['волна в океане','волны в океане','волнам в океане','волну в океане','волной в океане','волне в океане'],
                mcase: ['волны в океане','волн в океане','волнам в океане','волны в океане','волнами в океане','волнах в океане']
            }
        },
        {
            'сейсмическая волна': 
            {
                case: ['сейсмическая волна','сейсмической волны','сейсмической волне','сейсмическую волну','сейсмической волной','сейсмической волне'],
                mcase: ['сейсмические волны','сейсмических волн','сейсмическим волнам','сейсмические волны','сейсмическими волнами','сейсмической волной']
            }
        },
        {
            'ядро': 
            {
                case: ['ядро','ядра','ядру','ядро','ядром','ядре'],
                mcase: ['ядра','ядр','ядрам','ядра','ядрами','ядрах']
            }
        },
        {
            'древняя гора': 
            {
                case: ['древняя гора','древней горы','древней горе','древнюю гору','древней горой','древней горе'],
                mcase: ['древние горы','древних гор','древним горам','древние горы','древними горами','древних горах']
            }
        },
        {
            'молодая равнина': 
            {
                case: ['молодая равнина','молодой равнины','молодой равнине','молодую равнину','молодой равниной','молодой равнине'],
                mcase: ['молодые равнины','молодых равнин','молодым равнинам','молодые равнины','молодыми равнинами','молодых равнинах']
            }
        },
        {
            'складчатая область': 
            {
                case: ['складчатая область','складчатой области','складчатой области','складчатую область','складчатой областью','складчатой области'],
                mcase: ['складчатые области','складчатых областей','складчатым областям','складчатые области','складчатыми областями','складчатых областях']
            }
        },
        {
            'литосферная плита': 
            {
                case: ['литосферная плита','литосферной плиты','литосферной плите','литосферную плиту','литосферной плитой','литосферной плите'],
                mcase: ['литосферные плиты','литосферных плит','литосферным плитам','литосферные плиты','литосферными плитами','литосферных плитах']
            }
        },
        {
            'океаническое течение': 
            {
                case: ['океаническое течение','океанического течения','океаническому течению','океаническое течение','океаническим течением','океаническом течении'],
                mcase: ['океанические течения','океанических течений','океаническим течениям','океанические течения','океаническими течениями','океанических течениях']
            }
        },
        {
            'остров': 
            {
                case: ['остров','острова','острову','остров','островом','острове'],
                mcase: ['острова','островов','островам','острова','островами','островах']
            }
        },
        {
            'старая гора': 
            {
                case: ['старая гора','старой горы','старой горе','старую гору','старой горой','старой горе'],
                mcase: ['старые горы','старых гор','старым горам','старые горы','старыми горами','старых горах']
            }
        },
        {
            'аккумулятивная равнина': 
            {
                case: ['аккумулятивная равнина','аккумулятивной равнины','аккумулятивной равнине','аккумулятивную равнину','аккумулятивной равниной','аккумулятивной равнине'],
                mcase: ['аккумулятивные равнины','аккумулятивных равнин','аккумулятивным равнинам','аккумулятивные равнины','аккумулятивными равнинами','аккумулятивных равнинах']
            }
        },
        {
            'чехол': 
            {
                case: ['чехол','чехола','чехолу','чехол','чехолом','чехоле'],
                mcase: ['чехлы','чехлов','чехлам','чехлы','чехлами','чехлах']
            }
        },
        {
            'фундамент': 
            {
                case: ['фундамент','фундамента','фундаменту','фундамент','фундаментом','фундаменте'],
                mcase: ['фундаменты','фундаментов','фундаментам','фундаменты','фундаментами','фундаментах']
            }
        },
        {
            'щит': 
            {
                case: ['щит','щита','щиту','щит','щитом','щите'],
                mcase: ['щиты','щитов','щитам','щиты','щитами','щитах']
            }
        },
        {
            'возвышенность': 
            {
                case: ['возвышенность','возвышенности','возвышенности','возвышенность','возвышенностью','возвышенности'],
                mcase: ['возвышенности','возвышенностей','возвышенностям','возвышенности','возвышенностями','возвышенностях']
            }
        },
        {
            'вулканическое происхождение': 
            {
                case: ['вулканическое происхождение','вулканического происхождения','вулканическому происхождению','вулканическое происхождение','вулканическим происхождением','вулканическом происхождении'],
                mcase: ['вулканические происхождения','вулканических происхождений','вулканическим происхождениям','вулканические происхождения','вулканическими происхождениями','вулканических происхождениях']
            }
        },
        {
            'плоскогорье': 
            {
                case: ['плоскогорье','плоскогорья','плоскогорью','плоскогорье','плоскогорьем','плоскогорье'],
                mcase: ['плоскогорья','плоскогорьев','плоскогорьям','плоскогорья','плоскогорьями','плоскогорьях']
            }
        },
        {
            'низменность': 
            {
                case: ['низменность','низменности','низменности','низменность','низменностью','низменности'],
                mcase: ['низменности','низменностей','низменностям','низменности','низменностями','низменностях']
            }
        },
        {
            'древняя платформа': 
            {
                case: ['древняя платформа','древней платформы','древней платформе','древнюю платформу','древней платформой','древней платформе'],
                mcase: ['древние платформы','древних платформ','древним платформам','древние платформы','древними платформами','древних платформах']
            }
        },
        {
            'осадочное происхождение': 
            {
                case: ['осадочное происхождение','осадочного происхождения','осадочному происхождению','осадочное происхождение','осадочным происхождением','осадочном происхождении'],
                mcase: ['осадочные происхождения','осадочных происхождений','осадочным происхождениям','осадочные происхождения','осадочными происхождениями','осадочных происхождениях']
            }
        },
        {
            'лава': 
            {
                case: ['лава','лавы','лаве','лаву','лавой','лаве'],
                mcase: ['лавы','лав','лавам','лавы','лавами','лавах']
            }
        },
        {
            'разлом': 
            {
                case: ['разлом','разлома','разлому','разлом','разломом','разломе'],
                mcase: ['разломы','разломов','разломам','разломы','разломами','разломах']
            }
        },
        {
            'вулканизм': 
            {
                case: ['вулканизм','вулканизма','вулканизму','вулканизм','вулканизмом','вулканизме'],
                mcase: ['вулканизмы','вулканизмов','вулканизмам','вулканизмы','вулканизмами','вулканизмах']
            }
        },
        {
            'карст': 
            {
                case: ['карст','карста','карсту','карст','карстом','карсте'],
                mcase: ['карсты','карстов','карстам','карсты','карстами','карстах']
            }
        },
        {
            'фьорд': 
            {
                case: ['фьорд','фьорда','фьорду','фьорд','фьордом','фьорде'],
                mcase: ['фьорды','фьордов','фьордам','фьорды','фьордами','фьордах']
            }
        },
        {
            'мыс': 
            {
                case: ['мыс','мыса','мысу','мыс','мысом','мысе'],
                mcase: ['мысы','мысов','мысам','мысы','мысами','мысах']
            }
        },
        {
            'гейзер': 
            {
                case: ['гейзер','гейзера','гейзеру','гейзер','гейзером','гейзере'],
                mcase: ['гейзеры','гейзеров','гейзерам','гейзеры','гейзерами','гейзерах']
            }
        },
        {
            'ключ': 
            {
                case: ['ключ','ключа','ключу','ключ','ключом','ключе'],
                mcase: ['ключи','ключей','ключам','ключи','ключами','ключах']
            }
        },
        {
            'террикон': 
            {
                case: ['террикон','террикона','террикону','террикон','терриконом','терриконе'],
                mcase: ['терриконы','терриконов','терриконам','терриконы','терриконами','терриконах']
            }
        },
        {
            'материк': 
            {
                case: ['материк','материка','материку','материк','материком','материке'],
                mcase: ['материки','материков','материкам','материки','материками','материках']
            }
        },
        {
            'овраг': 
            {
                case: ['овраг','оврага','оврагу','овраг','оврагом','овраге'],
                mcase: ['овраги','оврагов','оврагам','овраги','оврагами','оврагах']
            }
        } ,
        {
            'тектонический разлом': 
            {
                case: ['тектонический разлом','тектонического разлома','тектоническому разлому','тектонический разлом','тектоническим разломом','тектоническом разломе'],
                mcase: ['тектонические разломы','тектонических разломов','тектоническим разломам','тектонические разломы','тектоническими разломами','тектонических разломах']
            }
        },
        {
            'равнина': 
            {
                case: ['равнина','равнины','равнине','равнину','равниной','равнине'],
                mcase: ['равнины','равнин','равнинам','равнины','равнинами','равнинах']
            }
        },
        {
            'ветер': 
            {
                case: ['ветер','ветра','ветру','ветер','ветром','ветре'],
                mcase: ['ветра','ветров','ветрам','ветра','ветрами','ветрах']
            }
        },
        {
            'вода': 
            {
                case: ['вода','воды','воде','вода','водой','воде'],
                mcase: ['воды','вод','водам','воды','водами','водах']
            }
        },
        {
            'базальт': 
            {
                case: ['базальт','базальта','базальту','базальт','базальтом','базальте'],
                mcase: ['базальты','базальтов','базальтам','базальты','базальтами','базальтах']
            }
        },
        {
            'известняк': 
            {
                case: ['известняк','известняка','известняку','известняк','известняком','известняке'],
                mcase: ['известняки','известняков','известнякам','известняки','известняками','известняках']
            }
        },
        {
            'пещера': 
            {
                case: ['пещера','пещеры','пещере','пещеру','пещерой','пещере'],
                mcase: ['пещеры','пещер','пещерам','пещеры','пещерами','пещерах']
            }
        },
        {
            'круг': 
            {
                case: ['круг','круга','кругу','круг','кругом','круге'],
                mcase: ['круги','кругов','кругам','круги','кругами','кругах']
            }
        },
        {
            'тропик': 
            {
                case: ['тропик','тропика','тропику','тропик','тропиком','тропике'],
                mcase: ['тропики','тропиков','тропикам','тропики','тропиками','тропиках']
            }
        }
    ];/* ,
        {
            '': 
            {
                case: ['','','','','',''],
                mcase: ['','','','','','']
            }
        } */
    if( initial ) {
        dict.forEach(function(item, i, arr) {
            for(var key in item) {
                item[key].case.forEach(function(item2, j, arr2) {
                    if(item2 == str) {result = item[key].case[0];return;} 
                });
                item[key].mcase.forEach(function(item2, j, arr2) {
                    if(item2 == str) {result = item[key].case[0];return;} 
                });
                if(result != str) return;
            }
        });
    }
    else{
        dict.forEach(function(item, i, arr) {
            if(item[str]) {
                    if  ( mult ) result = item[str].mcase[cs];
                    else result = item[str].case[cs];
                return;
                }
        });
    }
    return result;
}

function showTask3Results() {
    
    var $page = $('#page_3');
    
    $page.find('#btn3').fadeOut();
    $page.find('.result-text').fadeOut();
    $page.find('.vars3').fadeOut();
    $page.find('.senten').fadeOut();
    $page.find('#nextBtn').fadeOut();
    $page.find('.results').empty();
    $page.find('.results').fadeIn(500).css({display: 'inline'});
    $page.find('.results').append('<div class="row">');
    $page.find('.results').append('<div class="col-sm-4 head">Номер вопроса');
    $page.find('.results').append('<div class="col-sm-4 head left">Количество попыток');
    $page.find('.results').append('</div>');
    task3Results.forEach(function(item, i , arr) {
        $page.find('.results').append('<div class="row">');
        $page.find('.results').append('<div class="col-sm-4">' + (i +1));
        $page.find('.results').append('<div class="col-sm-4 left">' + item);
        $page.find('.results').append('</div>');
    });
}

function getId(id) {
    
    var result;
    var arr = id.split('');
    
    result = +arr[arr.length - 1];
    
    return result - 1;
}

function isCorectSentence() {
    
    var result = false;
    
    if(($('#' + sentences[task3Index].id + '_' + '1').text() == sentences[task3Index].answer[0]) &&
       ($('#' + sentences[task3Index].id + '_' + '2').text() == sentences[task3Index].answer[1]) && 
       ($('#' + sentences[task3Index].id + '_' + '3').text() == sentences[task3Index].answer[2])) {
        result = true;
    }
        
    return result;    
}

function clearPage3() {
    
    var $page = $('#page_3');
 
    $page.find('.vars3').empty();
    for(var i = 0; i < task3Results.length; i++) {
        task3Results[i] = 1;
    }
    task3Index = 0;
    $('#nextBtn').css({display: 'none'});
    $('#nextBtn').html('Следующий<br>вопрос');
    $page.find('.true').removeClass('true');
    $page.find('.false').removeClass('false');
    $page.find('.result-text').text('');
    $page.find('.senten').fadeIn(500);
    $page.find('#btn3').fadeIn(500);
    $page.find('.result-text').fadeIn(500);
    $page.find('.vars3').fadeIn(500);
    $page.find('.results').fadeOut().css({display: 'none'});
    $page.find('.dropdown-content').empty();
    
}

function taskOnPage3(){
    
    var $page = $('#page_3');
    var $abtn = $('#btn3');
    var $next = $('#nextBtn');
    
    var initDrag = function() {        
        $page.find('.drag').draggable({
            revert: true,
            containment: $page,
            start: function () {
                
                $page.find('.true').removeClass('true');
                $page.find('.false').removeClass('false');
                $page.find('.result-text').text('');
                highlight($page);
            },
            stop: function () {
                 deHighlight($page);
            },
            stack: $page.find('.zzz'),
            });
    };
    
    var initDrop = function() {
        $page.find('.drop').droppable({
            accept: $page.find('.drag')
        });
    };
    
    var dropdown = function() {
        
        $page.find('.drop').droppable({
            drop: function(e, ui) {                
                var savedThis = this;
                var idd;
                
                 if(!isSentence($(ui.draggable).attr('id'))) {
                    $(this).addClass('drag');
                    initDrag();
                    initDrop();
                    if( $(this).text() == '' ) {        
                        idd = getId($(this).attr('id'));
                        $(this).text(setCase($(ui.draggable).text(), sentences[task3Index].case[idd].type, sentences[task3Index].case[idd].mult, false));
                        $(ui.draggable).text('-');
                        $(ui.draggable).removeClass('drag');
                        $(ui.draggable).draggable('destroy');
                        $(ui.draggable).addClass('drop');     
                        initDrag();
                        initDrop();
                        dropdown();
                     }
                     else{
                         var str =  $(this).text();
                         idd = getId($(this).attr('id'));
                         $(this).text(setCase($(ui.draggable).text(), sentences[task3Index].case[idd].type, sentences[task3Index].case[idd].mult, false));
                         $(ui.draggable).text(setCase(str, 0, false, true));
                     }
                }
                else{
                    if( $(this).text() == '' ) {
                        idd = getId($(this).attr('id'));
                        $(this).text(setCase(setCase($(ui.draggable).text(), 0, false, true), sentences[task3Index].case[idd].type, sentences[task3Index].case[idd].mult, false));
                        $(ui.draggable).text('');
                        $(this).addClass('drag');
                        $(ui.draggable).removeClass('drag');
                        $(ui.draggable).draggable('destroy');
                        initDrag();
                        initDrop();
                    }
                    else{
                        if($(this).text() == '-'){
                            $(this).text(setCase($(ui.draggable).text(), 0, false, true));
                            $(ui.draggable).text('');
                            $(this).removeClass('drop'); 
                            $(this).addClass('drag');
                            $(ui.draggable).removeClass('drag');
                            $(ui.draggable).draggable('destroy');
                            initDrag();
                            initDrop();
                        }
                        else{
                            var str =  $(this).text();
                            idd = getId($(this).attr('id'));
                            $(this).text(setCase(setCase($(ui.draggable).text(), 0, false, true), sentences[task3Index].case[idd].type, sentences[task3Index].case[idd].mult, false));
                            idd = getId($(ui.draggable).attr('id'));
                            $(ui.draggable).text(setCase(setCase(str, 0, false, true), sentences[task3Index].case[idd].type, sentences[task3Index].case[idd].mult, false));
                        }
                    }
                }
            }
        });
    };
    if(task3Results.length != sentences.length){
        for(var i = 0; i < sentences.length; i++) {
            task3Results.push(1);
        }
    }
    clearPage3();
    sentences.forEach(function(item, i, arr) {        
        $page.find('.dropdown-content').append('<div id="sen-' + item.no + '"class="map-task">Задание ' + (item.no + 1) + '</div>');
        $('#sen-' + item.no).off('click').on('click', function() {            
            task3Index = +$(this).attr('id').split('-').splice(1).join('');            
            nextSentence(task3Index);
            initDrag();
            initDrop();
            dropdown();
        });
    });
    nextSentence(task3Index);
    
    setBtnAnim($abtn);
    setBtnAnim($next);
    
    $abtn.off('click').on('click', function(){
        $page.find('.true').removeClass('true');
        $page.find('.false').removeClass('false');
        if(isCorectSentence()) {             
            playAudio('audioSuccess');            
            $page.find('.result-text').addClass('true').text('ВЕРНО');
            if(task3Index < sentences.length - 1)  {$next.css({display: 'inline'});}
            else {$next.css({display: 'inline'}); $next.html('Показать<br>результаты');}
        }
        else {
            playAudio('audioFail');
            task3Results[task3Index]++;
            $page.find('.result-text').addClass('false').text('НЕВЕРНО');
        }
    });
    
    $next.off('click').on('click', function() {
        task3Index++;
        if(task3Index < sentences.length) {
            nextSentence(task3Index);
            $page.find('.true').removeClass('true');
            $page.find('.false').removeClass('false');
            $page.find('.result-text').text('');
            $next.fadeOut(500).css({disblay: 'none'});
            initDrag();
            initDrop();
            dropdown();
        }
        else{
            task3Index = sentences.length - 1;
            showTask3Results();
        }            
    });  
    
    initDrag();
    initDrop();
    dropdown();
}

var curBtn;
var curText = '';

function page4Next(index) {
    
    var $page = $('#page_4');
    var i = 0;
    $page.find('.true').removeClass('true');
    $page.find('.false').removeClass('false');
    $page.find('.result-text').text('');   
    $page.find('.country-viewer').empty().addClass('hide');
    $page.find('.task4').empty().append(task4Q[index].q);
    $page.find('#' + task4Q[index].map).css({display: 'inline'});
    $page.find('#btnNext4').fadeOut(500).css({display: 'none'});
    $page.find('.tectonic-container').empty().addClass('hide');
    if( task4Q[index].map == 'svgrussia2' ) {
        task4Answer.arr = [[],[]];
        $page.find('.nZone').removeClass('quake');
        $page.find('.nZone').removeClass('vulcano');
        if(  $('#rVulcano').hasClass('selected')  ) $('#rVulcano').removeClass('selected');
        if(  $('#rQuake').hasClass('selected')  ) $('#rQuake').removeClass('selected');
    }
    if( task4Q[index].map == 'svgworld' ) {
        task4Answer.arr = [];
        $page.find('.wregion').removeClass('select');
        $page.find('.zoom-butons').removeClass('hide');
    }
    else {
        $page.find('.zoom-butons').addClass('hide');
        $page.find('.tectonic-container').addClass('hide');
    }
    if( task4Q[index].map == 'svgtectonic' ) {
        task4Answer.arr = [];
        $page.find('.sel').removeClass('sel');
        $page.find('#legion-tect').empty();
        $page.find('.tectonic-container').empty().removeClass('hide');
        for(var key in TECTONIC) {
            $page.find('.tectonic-container').append('<div id="tect-' + i + '" class="panel tectbtn">' + key + '  ' + TECTONIC[key][2] + '</div>');
            $('#tect-' + i).off('click').on('click', function() {
                curBtn = $(this);
                curText = $(this).text().split('  ').splice(0,1).join('');  
                $page.find('.pressed').removeClass('pressed');
                curBtn.addClass('pressed');
            });
            i++;
        }
    }

}

function isCorrectTask4() {
    var result = false;
    var tres = [];
    var m;
    var s1,s2,a1,a2;
    
    if( typeof task4Q[task4Index].answer == 'object' ) {
        if( task4Q[task4Index].ids ) {
            tres = [];
            m = [];
            var arr = task4Q[task4Index].answer;
            task4Q[task4Index].ids.forEach(function(item, i, arr2) {               
                m = $('#' + item).attr('transform').slice(7, -1).split(' ').splice(4, 4);
                if( m[0] >= arr[i][0] && m[0] <= arr[i][1] && m[1] >= arr[i][2] && m[1] <= arr[i][3] ) tres.push(true);
                else tres.push(false);
            });
            result = true;
            tres.forEach(function(item, i, arr2) {               
                if( !item ) {
                    result = false;
                    return false;
                }
            });          
        }
        else{
            if( task4Q[task4Index].res ) {
                s1 = task4Answer.arr.sort().join('');
                a1 = task4Q[task4Index].answer.sort().join('');
                if( s1 == a1 ) result = true;
            }
            else {
                if( task4Q[task4Index].map == 'svgtectonic' ) {
                    if( task4Answer.arr.length == task4Q[task4Index].answer.length  ) result = true;                    
                    task4Q[task4Index].answer.forEach(function(item1, i1, arr1) {
                        if( !result ) return;
                        for(var key1 in item1) {
                            if( !result ) break;
                            task4Answer.arr.forEach(function(item2, i2, arr2) {
                                if( !result ) return;
                                for(var key2 in item2) {
                                    if( !result ) break;
                                    if( key1 == key2 ) {
                                        if(item1[key1] != item2[key2] ) result = false;
                                    }
                                }
                            });
                        }   
                    });
                }
                else {
                    s1 = task4Answer.arr[0].sort().join('');
                    s2 =  task4Answer.arr[1].sort().join('');
                    a1 = task4Q[task4Index].answer[0].sort().join('');
                    a2 = task4Q[task4Index].answer[1].sort().join('');
                    if( s1 == a1 && s2 == a2 ) result = true;
                }
            }
        }
    }
    else {
        if(task4Answer.simple === task4Q[task4Index].answer) result = true;
    }
    
    return result;
}

function clearPage4() {    
    var $page = $('#page_4');
    
    $page.find('.task4').empty();
    task4Index = 0;
    task4Answer.simple = 0 ;
    task4Answer.arr = []
    $('#nextBtn4').html('Следующий<br>вопрос');
    $('#nextBtn4').css({display: 'none'});
    $page.find('.true').removeClass('true');
    $page.find('.false').removeClass('false');
    $page.find('.result-text').text('');
    $page.find('.choice').removeClass('choice');
    $page.find('.dropdown-content').empty();
    task4Q.forEach(function(item, i, arr) {
        $('#' + item.map).css({display: 'none'});
    });
    $('#tgorst').attr('transform','matrix(1 0 0 1 0 0)');
    $('#tgraben').attr('transform','matrix(1 0 0 1 0 0)');
    $('#tsbros').attr('transform','matrix(1 0 0 1 0 0)');
    $('#shelf').attr('transform','matrix(1 0 0 1 0 0)');
    $('#sklon').attr('transform','matrix(1 0 0 1 0 0)');
    $('#loge').attr('transform','matrix(1 0 0 1 0 0)');
    $('#soh').attr('transform','matrix(1 0 0 1 0 0)');
    $('#vild').attr('transform','matrix(1 0 0 1 0 0)');
    $('#gelob').attr('transform','matrix(1 0 0 1 0 0)');
    $page.find('.nZone').removeClass('quake');
    $page.find('.nZone').removeClass('vulcano');
    $page.find('.wregion').removeClass('select');
    if(  $('#rVulcano').hasClass('selected')  ) $('#rVulcano').removeClass('selected');
    if(  $('#rQuake').hasClass('selected')  ) $('#rQuake').removeClass('selected');
    $page.find('.zoom-butons').addClass('hide');
    $page.find('.country-viewer').addClass('hide');
    $page.find('.tectonic-container').addClass('hide');
}

var selectedElement = 0;
var currentX = 0;
var currentY = 0;
var currentMatrix = 0;

function selectElement(evt) {
    selectedElement = evt.target;
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
    
      for(var i=0; i<currentMatrix.length; i++) {
        currentMatrix[i] = parseFloat(currentMatrix[i]);
      }

    selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
    selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
    selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
    selectedElement.setAttributeNS(null, "touchmove", "moveElement(evt)");
    selectedElement.setAttributeNS(null, "touchend", "deselectElement(evt)");
}

function deselectElement(evt){
  if( selectedElement != 0 ) {
    selectedElement.removeAttributeNS(null, "onmousemove");
    selectedElement.removeAttributeNS(null, "onmouseout");
    selectedElement.removeAttributeNS(null, "onmouseup");
    selectedElement.removeAttributeNS(null, "touchmove");
    selectedElement.removeAttributeNS(null, "touchend");
    selectedElement = 0;
  }
}

function moveElement(evt){
  dx = evt.clientX - currentX;
  dy = evt.clientY - currentY;
  if( task4Q[task4Index].dpi  )  {
      currentMatrix[4] += dx*task4Q[task4Index].dpi;
      currentMatrix[5] += dy*task4Q[task4Index].dpi;
  }
  else {    
      currentMatrix[4] += dx;
      currentMatrix[5] += dy;
  }
  newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
            
  selectedElement.setAttributeNS(null, "transform", newMatrix);
   // selectedElement.setAttributeNS(null, "x", dx);
   // selectedElement.setAttributeNS(null, "y", dy);
  currentX = evt.clientX;
  currentY = evt.clientY;
}
function makeSVG(tag, attrs) {
var el= document.createElementNS('http://www.w3.org/2000/svg', tag);

    for (var k in attrs) {
        el.setAttribute(k, attrs[k]);
    }
    return el;
}
function region2Click(evt){
    var currentX = evt.clientX;
    var currentY = evt.clientY;
    
   /* var rect = makeSVG('rect', {x: (currentX - 25), y: (currentY - 25), width: 50, height: 50, rx: 15, ry: 15, class: 'rerect dsp'});
    document.getElementById('ggg').appendChild(rect);*/
    //alert('x = ' + currentX + ' y = ' + currentY);
    /*$('#ggg').append('<rect x="' + currentX + '" y="' + currentY + '" width="50" height="50" rx="15" ry="15" fill="#FFF"/>');*/
   /*svg.rect(currentX, currentY, 100, 50, 10, 10, {fill: 'yellow', stroke: 'navy', strokeWidth: 5});*/
}
var COUNTRIES = {
    'AB': 'Абхазия',    
    'AD': 'Андорра',
    'AE': 'Объединенные Арабские Эмираты',
    'AF': 'Афганистан',
    'AG': 'Антигуа и Барбуда',
    'AL': 'Албания',
    'AM': 'Армения',
    'AO': 'Ангола',
    'AR': 'Аргентина',
    'AT': 'Австрия',
    'AU': 'Австралия',
    'AZ': 'Азербайджан',
    'BA': 'Босния и Герцеговина',
    'BB': 'Барбадос',
    'BD': 'Бангладеш',
    'BE': 'Бельгия',
    'BF': 'Буркина-Фасо',
    'BG': 'Болгария',
    'BH': 'Бахрейн',
    'BI': 'Бурунди',
    'BJ': 'Бенин',
    'BN': 'Бруней-Даруссалам',
    'BO': 'Боливия',
    'BR': 'Бразилия',
    'BS': 'Багамы',
    'BT': 'Бутан',
    'BW': 'Ботсвана',
    'BY': 'Беларусь',
    'BZ': 'Белиз',
    'CA': 'Канада',
    'CD': 'Конго, Демократическая Республика',
    'CF': 'Центрально-Африканская Республика',
    'CG': 'Конго',
    'CH': 'Швейцария',
    'CI': 'Кот д\'вуар',
    'CL': 'Чили',
    'CM': 'Камерун',
    'CN': 'Китай',
    'CO': 'Колумбия',
    'CR': 'Коста-Рика',
    'CU': 'Куба',
    'CV': 'Кабо-Верде',
    'CY': 'Кипр',
    'CZ': 'Чехия',
    'DE': 'Германия',
    'DJ': 'Джибути',
    'DK': 'Дания',
    'DM': 'Доминика',
    'DO': 'Доминиканская Республика',
    'DZ': 'Алжир',
    'EC': 'Эквадор',
    'EE': 'Эстония',
    'EG': 'Египет',
    'EH': 'Западная Сахара',
    'ER': 'Эритрея',
    'ES': 'Испания',
    'ET': 'Эфиопия',
    'FI': 'Финляндия',
    'FJ': 'Фиджи',
    'FR': 'Франция',
    'GA': 'Габон',
    'GB': 'Великобритания',
    'GD': 'Гренада',
    'GE': 'Грузия',   
    'GH': 'Гана',
    'GM': 'Гамбия',
    'GN': 'Гвинея',
    'GQ': 'Экваториальная Гвинея',
    'GR': 'Греция',
    'GT': 'Гватемала',
    'GW': 'Гвинея-Бисау',
    'GY': 'Гайана',
    'HN': 'Гондурас',
    'HR': 'Хорватия',
    'HT': 'Гаити',
    'HU': 'Венгрия',
    'IE': 'Ирландия',
    'ID': 'Индонезия',
    'IL': 'Израиль',
    'IN': 'Индия',
    'IQ': 'Ирак',
    'IR': 'Иран',
    'IS': 'Исландия',
    'IT': 'Италия',
    'JM': 'Ямайка',
    'JO': 'Иордания',
    'JP': 'Япония',
    'KE': 'Кения',
    'KG': 'Киргизия',
    'KH': 'Камбоджа',
    'KM': 'Коморы',
    'KN': 'Сент-Китс и Невис',
    'KP': 'Северная Корея',
    'KR': 'Южная Корея',
    'KW': 'Кувейт',
    'KZ': 'Казахстан',
    'LA': 'Лаос',
    'LB': 'Ливан',
    'LC': 'Сент-Люсия',
    'LI': 'Лихтенштейн',
    'LK': 'Шри-Ланка',
    'LR': 'Либерия',
    'LU': 'Люксембург',
    'LS': 'Лесото',
    'LT': 'Литва',
    'LV': 'Латвия',
    'LY': 'Ливийская Арабская Джамахирия',    
    'MA': 'Марокко',
    'MC': 'Монако',
    'MD': 'Молдова',
    'ME': 'Черногория',
    'MG': 'Мадагаскар',
    'MK': 'Македония',
    'ML': 'Мали',
    'MM': 'Мьянма',
    'MN': 'Монголия',
    'MR': 'Мавритания',
    'MT': 'Мальта',
    'MU': 'Маврикий',
    'MV': 'Мальдивы',
    'MW': 'Малави',
    'MX': 'Мексика',
    'MY': 'Малайзия',
    'MZ': 'Мозамбик',
    'NA': 'Намибия',
    'NE': 'Нигер',
    'NG': 'Нигерия',
    'NI': 'Никарагуа',
    'NL': 'Нидерланды',
    'NO': 'Норвегия',
    'NP': 'Непал',
    'NR': 'Науру',
    'NZ': 'Новая Зеландия',
    'OM': 'Оман',
    'PA': 'Панама',
    'PE': 'Перу',
    'PG': 'Папуа-Новая Гвинея',
    'PH': 'Филиппины',
    'PK': 'Пакистан',
    'PL': 'Польша',
    'PR': 'Пуэрто-Рико',
    'PS': 'Палестинская территория, оккупированная',
    'PT': 'Португалия',
    'PW': 'Палау',
    'PY': 'Парагвай',
    'QA': 'Катар',
    'RO': 'Румыния',
    'RS': 'Сербия',
    'RU': 'Россия',
    'RW': 'Руанда',
    'SA': 'Саудовская Аравия',
    'SB': 'Соломоновы острова',
    'SC': 'Сейшелы',
    'SD': 'Судан',
    'SE': 'Швеция',
    'SG': 'Сингапур',
    'SI': 'Словения',
    'SK': 'Словакия',
    'SL': 'Сьерра-Леоне',
    'SM': 'Сан-Марино',
    'SN': 'Сенегал',
    'SO': 'Сомали',
    'SR': 'Суринам',
    'SS': 'Южный Судан',
    'ST': 'Сан-Томе и Принсипи',
    'SV': 'Эль-Сальвадор',
    'SY': 'Сирийская Арабская Республика',
    'SZ': 'Свазиленд',
    'TD': 'Чад',
    'TG': 'Того',
    'TH': 'Таиланд',
    'TJ': 'Таджикистан',
    'TL': 'Тимор-Лесте',
    'TM': 'Туркмения',
    'TN': 'Тунис',
    'TR': 'Турция',
    'TT': 'Тринидад и Тобаго',
    'TV': 'Тувалу',
    'TZ': 'Танзания',
    'UA': 'Украина',
    'UG': 'Уганда',
    'US': 'США',
    'UY': 'Уругвай',
    'UZ': 'Узбекистан',
    'VA': 'Ватикан',
    'VC': 'Сент-Винсент и Гренадины',    
    'VE': 'Венесуэла',
    'VN': 'Вьетнам',
    'VU': 'Вануату',
    'YE': 'Йемен',
    'ZA': 'Южная Африка',
    'ZM': 'Замбия',
    'ZW': 'Зимбабве',
}
var TECTONIC = {
    'I': [75, 285, 'Тихоокеанская'],
    'II': [650,100, 'Евроазиатская'],
    'III': [270,150, 'Северо-Американская'],
    'IV': [370, 330, 'Южно-Американская'],
    'V': [820, 350, 'Индо-Австралийская'],
    'VI': [530, 270, 'Африканская'],
    'VII': [480, 480, 'Антарктическая'],
    'VIII': [780, 180, 'Китайская'],
    'IX': [215, 330, 'Наска'],
    'X': [220, 255, 'Кокос'],
    'XI': [285, 235, 'Карибская'],
    'XII': [615, 210, 'Аравийская'],
    'XIII': [865, 221, 'Филипинская']
}

function showCountries() {
    var $page = $('#page_4');
    
    $page.find('.country-viewer').removeClass('hide');
    $page.find('.country-viewer').empty();
    task4Answer.arr.forEach(function(item, i, arr) {
        $page.find('.country-viewer').append('<div class="panel country">' + COUNTRIES[item] + '</div>');
    });
    
}

function taskOnPage4(){
    
    var $page = $('#page_4');
    var $abtn = $('#btn4');
    var $next = $('#nextBtn4');
    var $sbros = $('#tsbros'); 
    var $zmBt1 = $('#zmb1');
    var $zmBt2 = $('#zmb2');
    var $zmBt3 = $('#zmb3');    
    var vulcQuake = 'none';
    var worldMapIdx = 0;
    var tectIdx = 0;
    var worldMap = document.getElementById("svgworld");
    var zoom1 = false;
    var zoom2 = false;
    var zoom3 = false;
    
    
    clearPage4();
    task4Q.forEach(function(item, i, arr) {
        $page.find('.dropdown-content').append('<div id="mt-' + item.id + '"class="map-task">' + item.caption + '</div>');
        $('#mt-' + item.id).off('click').on('click', function() {
            $page.find('#' + task4Q[task4Index].map).css({display: 'none'});
            task4Index = +$(this).attr('id').split('-').splice(1).join('');
            if( zoom1 || zoom2 || zoom3 ) {worldMap.setAttributeNS(null,'viewBox','0 0 1158 642'); zoom1 = zoom2 = zoom3 = false;}
            page4Next(task4Index);
        });
    });
    
    page4Next(task4Index);
    
    setBtnAnim($abtn);
    setBtnAnim($next);
    setBtnAnim($zmBt1);
    setBtnAnim($zmBt2);
    setBtnAnim($zmBt3);
    
    $page.find('.tecton').off('click').on('click', function() {
        if( curText != '' && !$(this).hasClass('sel')) {
            $(this).addClass('sel');
            var key = $(this).attr('id').split('-').splice(1).join('');
            var text = makeSVG('text', {x: TECTONIC[key][0], y: TECTONIC[key][1], class: 'legion-text'}); 
            var textNode = document.createTextNode(curText);
            text.appendChild(textNode);
            document.getElementById('legion-tect').appendChild(text);           
            curBtn.removeClass('pressed').addClass('rem');
            curBtn.off('click');
            task4Answer.arr.push({});
            task4Answer.arr[tectIdx][$(this).attr('id').split('-').splice(1).join('')] = curText;
            tectIdx++;
            curText = '';
        }
    });
    $zmBt1.off('click').on('click', function() {
        if( zoom1 ) {
            worldMap.setAttributeNS(null,'viewBox','0 0 1158 642');
            zoom1= false;
            $page.find('.result-bar').removeClass('hide');
        }
        else {
            zoom1=true;
            worldMap.setAttributeNS(null,'viewBox','120 120 180 180');
            $page.find('.result-bar').addClass('hide');
        }
        zoom2 = zoom3 = false;
    });
    
    $zmBt2.off('click').on('click', function() {
        if( zoom2 ) {
            worldMap.setAttributeNS(null,'viewBox','0 0 1158 642');
            zoom2= false;
            $page.find('.result-bar').removeClass('hide');
        }
        else {
            zoom2=true;
            worldMap.setAttributeNS(null,'viewBox','290 120 350 180');
            $page.find('.result-bar').addClass('hide');
        }
        zoom1 = zoom3 = false;        
    });
    
    $zmBt3.off('click').on('click', function() {
        if( zoom3 ) {
            worldMap.setAttributeNS(null,'viewBox','0 0 1158 642');
            zoom3= false;
            $page.find('.result-bar').removeClass('hide');
        }
        else {
            zoom3=true;
            worldMap.setAttributeNS(null,'viewBox','400 150 480 220');
            $page.find('.result-bar').addClass('hide');
        }
        zoom1 = zoom2 = false;
    });
    
    $('#rVulcano').off('click').on('click', function() {        
        if( vulcQuake == 'vulcano' ) vulcQuake = 'none';
        else vulcQuake = 'vulcano';
        $page.find('.result-text').text('');
        if(  $('#rQuake').hasClass('selected')  ) $('#rQuake').removeClass('selected');
        if( !$(this).hasClass('selected') ) $(this).addClass('selected');
        else $(this).removeClass('selected');
    });
    
    $('#rQuake').off('click').on('click', function() {        
        if( vulcQuake == 'quake' ) vulcQuake = 'none';
        else vulcQuake = 'quake';
        $page.find('.result-text').text('');
        if(  $('#rVulcano').hasClass('selected')  ) $('#rVulcano').removeClass('selected');
        if( !$(this).hasClass('selected') ) $(this).addClass('selected');
        else $(this).removeClass('selected');
    });
    
    $page.find('.nZone').off('click').on('click',function() {
        $page.find('.result-text').text('');
        switch( vulcQuake ) {                
                case 'vulcano': {
                    var str = $(this).attr('id').split('-').splice(1).join('');
                    if(  task4Answer.arr[1].indexOf(str) >= 0 ) task4Answer.arr[1].splice(task4Answer.arr[1].indexOf(str),1);
                    task4Answer.arr[0].push(str);
                    if( $(this).hasClass('quake') ) $(this).removeClass('quake');
                    $(this).addClass('vulcano');
                };
                break;
                case 'quake': {
                    var str = $(this).attr('id').split('-').splice(1).join('');
                    if(  task4Answer.arr[0].indexOf(str) >= 0 ) task4Answer.arr[0].splice(task4Answer.arr[1].indexOf(str),1);
                    task4Answer.arr[1].push($(this).attr('id').split('-').splice(1).join(''));
                    if( $(this).hasClass('vulcano') ) $(this).removeClass('vulcano');
                    $(this).addClass('quake');
                };
                break;
                case 'none': {
                    var str = $(this).attr('id').split('-').splice(1).join('');
                    if(  task4Answer.arr[0].indexOf(str) >= 0 ) task4Answer.arr[0].splice(task4Answer.arr[1].indexOf(str),1);                   
                    if( $(this).hasClass('vulcano') ) $(this).removeClass('vulcano');
                    if( $(this).hasClass('quake') ) $(this).removeClass('quake');                   
                };
                break;
        }
        /*if( !$(this).hasClass('clked') ) {
            
            $(this).addClass('clked');
           // $('#r_' + $(this).attr('id').split('_').splice(1).join('')).addClass('dsp');
        }
        else {
            $(this).removeClass('clked');
        }*/
    });
    
    $page.find('.wregion').off('click').on('click', function() {
        $page.find('.result-text').text('');
        if( $(this).hasClass('select') ) {
            if(  task4Answer.arr.indexOf($(this).attr('id')) >= 0 ) task4Answer.arr.splice(task4Answer.arr.indexOf($(this).attr('id')),1);
                $(this).removeClass('select');
                worldMapIdx--;
        }
        else {
            if(  worldMapIdx < 12 ) {
                task4Answer.arr.push($(this).attr('id'));
                $(this).addClass('select');
                worldMapIdx++;
            }
            else{
                $page.find('.alert-container').empty();
                $page.find('.alert-container').removeClass('hide');
                $page.find('.alert-container').append('<div id="arb1" class="alert-bar">Уже выбрано 12 стран, измените свой выбор или нажмите проверить.</div>');
                $('#arb1').off('click').on('click',function() {
                    $page.find('.alert-container').empty();
                    $page.find('.alert-container').addClass('hide');
                });
            }
        }
        showCountries();
        if( worldMapIdx == 0 ) {
            $page.find('.country-viewer').addClass('hide');
        }
    });
    
    $abtn.off('click').on('click', function(){
        $page.find('.true').removeClass('true');
        $page.find('.false').removeClass('false');
        if(isCorrectTask4()) {             
            playAudio('audioSuccess');            
            $page.find('.result-text').addClass('true').text('ВЕРНО');
            if( task4Index < task4Q.length - 1 ) $next.fadeIn(500).css({display: 'inline'});
        }
        else {
            playAudio('audioFail');
            $page.find('.result-text').addClass('false').text('НЕВЕРНО');
            if( task4Q[task4Index].map == 'svgrussia2' ) {
                $page.find('.nZone').removeClass('quake');
                $page.find('.nZone').removeClass('vulcano');
                if(  $('#rVulcano').hasClass('selected')  ) $('#rVulcano').removeClass('selected');
                if(  $('#rQuake').hasClass('selected')  ) $('#rQuake').removeClass('selected');
                task4Answer.arr =[[],[]];
            }
        }
    });
    
    $next.off('click').on('click', function() {        
        $next.fadeOut(500).css({display: 'none'});
        $page.find('#' + task4Q[task4Index].map).css({display: 'none'});
        task4Index++;
        if( task4Index < task4Q.length )  page4Next(task4Index);
        else  task4Index = task4Q.length - 1;
    });
    
    $page.find('#text1').off('click').on('click', function() {
        $page.find('.central').removeClass('choice');
        $page.find('.east').removeClass('choice');
        $page.find('.north').addClass('choice');
        $page.find('.south').removeClass('choice');
        task4Answer.simple = 1;
    });
    $page.find('#text2').off('click').on('click', function() {
        $page.find('.central').removeClass('choice');
        $page.find('.east').removeClass('choice');
        $page.find('.north').removeClass('choice');
        $page.find('.south').addClass('choice');
        task4Answer.simple = 2;
    });
    $page.find('#text3').off('click').on('click', function() {
        $page.find('.north').removeClass('choice');
        $page.find('.east').removeClass('choice');
        $page.find('.south').removeClass('choice');
        $page.find('.central').addClass('choice');
        task4Answer.simple = 3;
    });
    $page.find('#text4').off('click').on('click', function() {
        $page.find('.north').removeClass('choice');
        $page.find('.central').removeClass('choice');
        $page.find('.south').removeClass('choice');
        $page.find('.east').addClass('choice');
        task4Answer.simple = 4;
    }); 
    $page.find('#text2_1').off('click').on('click', function() {
        $page.find('#rift2').removeClass('choice');
        $page.find('#rift3').removeClass('choice');
        $page.find('#rift4').removeClass('choice');
        $page.find('#rift1').addClass('choice');
        task4Answer.simple = 1;
    }); 
    $page.find('#text2_2').off('click').on('click', function() {
        $page.find('#rift1').removeClass('choice');
        $page.find('#rift3').removeClass('choice');
        $page.find('#rift4').removeClass('choice');
        $page.find('#rift2').addClass('choice');
        task4Answer.simple = 2;
    });
    $page.find('#text2_3').off('click').on('click', function() {
        $page.find('#rift1').removeClass('choice');
        $page.find('#rift2').removeClass('choice');
        $page.find('#rift4').removeClass('choice');
        $page.find('#rift3').addClass('choice');
        task4Answer.simple = 3;
    });
    $page.find('#text2_4').off('click').on('click', function() {
        $page.find('#rift1').removeClass('choice');
        $page.find('#rift2').removeClass('choice');
        $page.find('#rift3').removeClass('choice');
        $page.find('#rift4').addClass('choice');
        task4Answer.simple = 4;
    }); 
}

function setTask5(opt) {
    var $page = $('#page_5');
       
    if (opt == 1)
    {
        $page.find('.forces').append('<div class="panel force"><div class="panel force-title">' + forces[0].force +'</div><div class="forces-box"><div id="force1" class="force1 drop"></div><div class="small-blank-space hide"></div><div id="ls1" class="landscape drop hide"></div></div></div>');
        $page.find('.forces').append('<div class="blank-space"></div>');
        $page.find('.forces').append('<div class="panel force"><div class="panel force-title">' + forces[1].force +'</div><div class="forces-box"><div id="ls2" class="landscape drop hide"></div><div class="small-blank-space hide"></div><div id="force2" class="force1 drop"></div></div></div>');
        fvariants[0].shuffle();
        $page.find('.vars5').empty();
        fvariants[0].forEach(function(item, i, arr) {
            $page.find('.vars5').append('<div id="fv_' + (i + 1) + '" class="panel force-name drag">' + item + '</div>');
        });
    }
    if(opt == 2){
        $page.find('.landscape').removeClass('hide');
        $page.find('.small-blank-space').removeClass('hide');
        $page.find('.vars5').empty();
        fvariants[1].shuffle();
        fvariants[1].forEach(function(item, i, arr) {
            $page.find('.vars5').append('<div id="lsv_' + (i + 1) + '" class="panel force-name drag">' + item + '</div>');
        });
    }
    if(opt == 3){
        $page.find('.forces').empty();
        $page.find('.forces').append('<div class="panel force"><div class="panel force-title">' + forces[2].force +'</div><div class="forces-box"><div id="force3" class="force1 drop"></div><div class="landscape hide"></div></div></div>');
        $page.find('.forces').append('<div class="blank-space"></div>');
        $page.find('.forces').append('<div class="panel force"><div class="panel force-title">' + forces[3].force +'</div><div class="forces-box"><div id="force4" class="force1 drop"></div><div class="landscape hide"></div></div></div>');
        $page.find('.vars5').empty();
        fvariants[2].shuffle();
        fvariants[2].forEach(function(item, i, arr) {
            $page.find('.vars5').append('<div id="tp_' + (i + 1) + '" class="panel force-name drag">' + item + '</div>');
        });
    }
    $page.find('.vars5').fadeIn(500);
}

function isCorrectTask5(pt){
    var result = false;
    var a1, a2, r1, r2;
    if( pt == 1 ) {
        a1 = forces[0].answer.sort().join('');
        a2 = forces[1].answer.sort().join('');
        r1 = task5Answers[0].sort().join('');
        r2 = task5Answers[1].sort().join('');
        if( a1 == r1 && a2 == r2 ) result = true;
    }
    if( pt == 2 ) {
        a1 = forces[0].answer2.sort().join('');
        a2 = forces[1].answer2.sort().join('');
        r1 = task5Answers[2].sort().join('');
        r2 = task5Answers[3].sort().join('');
        if( a1 == r1 && a2 == r2 ) result = true;
    }
    if( pt == 3 ) {
        a1 = forces[2].answer.sort().join('');
        a2 = forces[3].answer.sort().join('');
        r1 = task5Answers[4].sort().join('');
        r2 = task5Answers[5].sort().join('');
        if( a1 == r1 && a2 == r2 ) result = true;
    }
    return result;
}

function showTask5Result() {
    var $page = $('#page_5');
    
}

function clearPage5() {
    var $page = $('#page_5');
    task5Answers = [[],[],[],[],[],[]];
    t5Idx = 0;
    
    $page.find('.forces').empty();
    $page.find('.result-bar').addClass('hide');
    $('#btn5').removeClass('hide');
}

var t5Idx;

function taskOnPage5() {
    
    var $page = $('#page_5');
    var $btn = $('#btn5');
    var next = false;
    
    clearPage5();
    setTask5(1);
    setBtnAnim($btn);
    
    
    
    var initDrag = function(){
        $page.find('.drag').draggable({
            revert: true,
            containment: $page,
            start: function() {
                highlight($page);
            },
            stop: function() {
                deHighlight($page);
            },
            stack: $page.find('.drag')
        });
    }
    
    var initDrop = function() {
        $page.find('.drop').droppable({
            accept: $page.find('.drag')
        });
    }
    var dropdown = function(){
         $page.find('.drop').droppable({
            drop: function(e, ui) {
                $page.find('.result-bar').addClass('hide');
                if( $page.find('.landscape').hasClass('hide') ) {
                    if( next ) {
                        if( $(this).attr('id') === 'force3' ) {                            
                            $(this).append('<div id=f3_"' +  $(ui.draggable).attr('id').split('').splice(3).join('') + '" class="panel force-name">' + $(ui.draggable).text() + '</div>');
                            task5Answers[4].push($(ui.draggable).text());
                        }
                        else {
                            $(this).append('<div id=f4_"' + $(ui.draggable).attr('id').split('').splice(3).join('') + '" class="panel force-name">' + $(ui.draggable).text() + '</div>');
                            task5Answers[5].push($(ui.draggable).text());
                        }
                        t5Idx++;
                        if( t5Idx == fvariants[2].length ) {
                            t5Idx = 0;
                            $page.find('.true').removeClass('true');
                            $page.find('.false').removeClass('false');
                            $page.find('.vars5').fadeOut(500);
                            if( isCorrectTask5(3) ) {                            
                                playAudio('audioSuccess');
                                $page.find('.result-text').addClass('true').text('ВЕРНО');
                                $page.find('.result-bar').removeClass('hide');
                                $('#btn5').addClass('hide');
                            }
                            else {
                                playAudio('audioFail');
                                $page.find('.result-bar').removeClass('hide');
                                $('#btn5').removeClass('hide');
                                $page.find('.result-text').addClass('false').text('НЕВЕРНО');
                            }
                        }
                    }
                    else {
                        if( $(this).attr('id') === 'force1' ) {
                            $(this).append('<div id=f1_"' +  $(ui.draggable).attr('id').split('').splice(3).join('') + '" class="panel force-name">' + $(ui.draggable).text() + '</div>');
                            task5Answers[0].push($(ui.draggable).text());
                        }
                        else {
                            $(this).append('<div id=f2_"' + $(ui.draggable).attr('id').split('').splice(3).join('') + '" class="panel force-name">' + $(ui.draggable).text() + '</div>');
                            task5Answers[1].push($(ui.draggable).text());
                        }
                        t5Idx++;
                        if( t5Idx == fvariants[0].length ) {
                            t5Idx = 0;
                            $page.find('.true').removeClass('true');
                            $page.find('.false').removeClass('false');

                            if( isCorrectTask5(1) ) {                            
                                playAudio('audioSuccess');
                                $page.find('.result-text').addClass('true').text('ВЕРНО');
                                $page.find('.result-bar').removeClass('hide');
                                $('#btn5').addClass('hide');
                                setTask5(2);
                                $page.find('.force1').removeClass('drop');
                                initDrag();
                                initDrop();
                                dropdown();
                            }
                            else {
                                $page.find('.vars5').fadeOut(500);
                                playAudio('audioFail');
                                $page.find('.result-bar').removeClass('hide');
                                $('#btn5').removeClass('hide');
                                $page.find('.result-text').addClass('false').text('НЕВЕРНО');
                            }
                        }
                    }
                }
                else{
                     if( $(this).attr('id') === 'ls1' ) {
                        $(this).append('<div id=l1_"' + $(ui.draggable).attr('id').split('').splice(3).join('') + '" class="panel force-name">' + $(ui.draggable).text() + '</div>');
                        task5Answers[2].push($(ui.draggable).text());
                    }
                    else {
                        $(this).append('<div id=l2_"' + $(ui.draggable).attr('id').split('').splice(3).join('') + '" class="panel force-name">' + $(ui.draggable).text() + '</div>');
                        task5Answers[3].push($(ui.draggable).text());
                    }
                    t5Idx++;
                    if( t5Idx == fvariants[1].length  ) {
                        t5Idx = 0;
                        $page.find('.vars5').fadeOut(500);
                        $page.find('.true').removeClass('true');
                        $page.find('.false').removeClass('false');
                        if( isCorrectTask5(2) ) {
                           $page.find('.result-text').addClass('true').text('ВЕРНО'); 
                           $page.find('.result-bar').removeClass('hide');
                           $('#btn5').removeClass('hide').html('Далее');
                           next = true; 
                           playAudio('audioSuccess');
                        }
                        else {
                            playAudio('audioFail');
                            $page.find('.result-bar').removeClass('hide');
                            $('#btn5').removeClass('hide');
                            $page.find('.result-text').addClass('false').text('НЕВЕРНО');
                        }
                    }
                }
                $(ui.draggable).addClass('hide');
                deHighlight($page);
            }
        });
    }
    
    $btn.off('click').on('click', function() {
        if( next ) {
            setTask5(3);
            $page.find('.result-bar').addClass('hide');
            task5Answers[4] =  [];
            task5Answers[5] = [];
            $('#btn5').addClass('hide').html('Повторить');
        }
        else {
            if( $page.find('.landscape').hasClass('hide') ) {
                clearPage5();
                setTask5(1);           
            }
            else {
                $page.find('.landscape').empty();
                t5Idx = 0;
                task5Answers[2] = [];
                task5Answers[3] = [];
                setTask5(2);
                $page.find('.result-bar').addClass('hide');
            }
        }
        initDrag();
        initDrop();
        dropdown();
    });
    
    initDrag();
    initDrop();
    dropdown();
}

var task6Q = [
    {
        id: '01',
        type: '01',
        q: 'Какое из утверждений о внутреннем строении Земли верно?',
        answer: 'Толщина материковой земной коры больше океанической',
        vars: ['Толщина материковой земной коры больше океанической',
                  'Земной шар состоит из двух частей - земной коры и ядра',
                  'Все полезные ископаемые образуются из вещества мантии',
                  'Толщина материковой земной коры меньше океанической'],
        points: '1',
        level: '1'
    },
    {
        id: '02',
        type: '01',
        q: 'Какая из перечисленных горных пород является магматической',
        answer: 'гранит',
        vars: ['известняк','песок','гранит','мрамор'],
        points: '1',
        level: '1'
    },
    {
        id: '03',
        type: '02',
        q: 'Установите соответствие между горной породой и её применением',
        answer: [{'торф':'удобрение'},{'уголь':'топливо'},{'мрамор':'строительный материал'}],
        vars: ['строительный материал','удобрение','топливо','драгоценный камень'],
        points: '2',
        keys: ['торф','уголь','мрамор'],
        level: '1'
    },
    {
        id: '04',
        type: '01',
        q: 'В каком из высказываний идёт речь о рельефе?',
        answer: 'Все неровности поверхности Земли.',
        vars: ['Все неровности поверхности Земли.','Медленные движения земной коры.','Область развития жизни.','Твёрдая оболочка Земли.'],
        points: '1',
        level: '1'
    },
    {
        id: '05',
        type: '01',
        q: 'На территории какого материка расположена высочайшая вершина мира?',
        answer: 'Евразия',
        vars: ['Евразия','Африка','Австралия','Антарктида','Северная Америка','Южная Америка','Европа','Азия'],
        points: '1',
        level: '2'
    },
    {
        id: '06',
        type: '01',
        q: 'Какая из перечисленных форм рельефа сформировалась в результате деятельности ветра?',
        answer: 'дюна',
        vars: ['дюна','овраг','моренная гряда','вулкан'],
        points: '1',
        level: '1'
    },
    {
        id: '07',
        type: '01',
        q: 'В каком из высказываний идёт речь о землетрясении?',
        answer: 'Колебания земной коры, вызванные подземными толчками.',
        vars: ['Колебания земной коры, вызванные подземными толчками.',
                  'Обширные участки земной поверхности, приподнятые над равнинами.',
                  'Излияние магмы на поверхность.',
                  'Превышение одной точки земной поверхности над другой.'],
        points: '1',
        level: '1'
    },
    {
        id: '08',
        type: '02',
        q: 'Установите соответствие между формой рельефа и материком, на котором она расположена.',
        answer: [{'Кордильеры':'Северная Америка'},{'Кавказ':'Евразия'},{'Амазонская низменность':'Южная Америка'}],
        vars: ['Северная Америка','Евразия','Южная Америка','Автсралия'],
        points: '2',
        keys: ['Кордильеры','Кавказ','Амазонская низменность'],
        level: '2'
    },
    {
        id: '09',
        type: '02',
        q: 'Установите соответствие между формами рельефа и основными факторами их образования.',
        answer: [{'холмы и гряды':'ледники'},{'карьеры и терриконы':'человек'},{'дюны и барханы':'ветер'}],
        vars: ['ветер','ледники','человек','подземные воды'],
        points: '2',
        keys: ['холмы и гряды','карьеры и терриконы','дюны и барханы'],
        level: '1'
    },
    {
        id: '10',
        type: '01',
        q: 'Какая форма рельефа обозначена на рисунке цифрой 3?',
        answer: 'Кордильеры',
        vars: ['Кордильеры','Анды',' Восточно-Европейская равнина','Гималаи'],
        points: '1',
        img: 'img/mapgeo01.png',
        level: '2'
    },
    {
        id: '11',
        type: '02',
        q: 'Установите соответствие между формами рельефа и их обозначением на карте.',
        answer: [{'Анды':'2'},{'Восточно-Европейская равнина':'1'},{'Гималаи':'4'}],
        vars: ['1','2','3','4'],
        points: '2',
        keys: ['Анды',' Восточно-Европейская равнина','Гималаи'],
        img: 'img/mapgeo01.png',
        level: '2'
    },
    {
        id: '12',
        type: '01',
        q: 'Какое утверждение о земной коре верно?',
        answer: 'Земная кора самый верхний слой литосферы.',
        vars: ['Земная кора сложена только магматическими горными породами.',
                  'Толщина земной коры везде одинакова.',
                  'Толщина материковой земной коры меньше океанической.',
                  'Земная кора самый верхний слой литосферы.'],
        points: '1',
        level: '1'
    },
    {
        id: '13',
        type: '01',
        q: 'Какая из перечисленных горных пород является осадочной?',
        answer: 'уголь',
        vars: ['уголь','базальт','гранит','мрамор'],
        points: '1',
        level: '1'
    },
    {
        id: '14',
        type: '02',
        q: 'Установите соответствие между горной породой и её применением.',
        answer: [{'нефть':'топливо'},{'гранит':'строительный материал'},{'торф':'удобрение'}],
        vars: ['топливо','удобрение','строительный материал','драгоценный камень'],
        points: '2',
        keys: ['нефть','гранит','торф'],
        level: '1'
    },
    {
        id: '15',
        type: '01',
        q: 'В каком из высказываний идёт речь о равнине?',
        answer: 'Участок земной поверхности с небольшими колебаниями высот.',
        vars: ['Переходной участок земной поверхности от суши к океану.',
                  'Участок земной поверхности с небольшими колебаниями высот.',
                  'Вытянутые понижения в рельефе.',
                  'Участок земной поверхности, лежащий ниже уровня моря.'],
        points: '1',
        level: '1'
    },
    {
        id: '16',
        type: '01',
        q: 'На территории какого океана расположена глубочайшая впадина мира?',
        answer: 'Тихий океан',
        vars: ['Тихий океан','Индийский океан','Атлантический океан','Северный Ледовитый океан'],
        points: '1',
        level: '2'
    },
    {
        id: '17',
        type: '01',
        q: 'Какая из перечисленных форм рельефа сформировалась в результате деятельности внутренних сил земли?',
        answer: 'вулкан',
        vars: ['террикон','овраг','вулкан','дюна'],
        points: '1',
        level: '1'
    },
    {
        id: '18',
        type: '01',
        q: 'В каком из высказываний идёт речь о вулканизме?',
        answer: 'Излияние магмы на поверхность.',
        vars: ['Медленные движения земной коры, вызванные подземными толчками.',
                  'Колебания земной коры, вызванные подземными толчками.',
                  'Излияние магмы на поверхность.',
                  'Превышение одной точки земной поверхности над другой.'],
        points: '1',
        level: '1'
    },
    {
        id: '19',
        type: '02',
        q: 'Установите соответствие между формой рельефа и материком, на котором она расположена.',
        answer: [{'Анды':'Южная Америка'},{'Уральские горы':'Евразия'},{'Атлас':'Африка'}],
        vars: ['Северная Америка','Африка','Евразия','Южная Америка'],
        points: '2',
        keys: ['Анды','Уральские горы','Атлас'],
        level: '2'
    },
    {
        id: '20',
        type: '02',
        q: 'Установите соответствие между формами рельефа и факторами их образования.',
        answer:  [{'овраги':'поверхностные воды'},{'карьеры и терриконы':'человек'},{'холмы и гряды':'ледники'}],
        vars: ['поверхностные воды','ледники','человек','подземные воды'],
        points: '2',
        keys: ['овраги','карьеры и терриконы','холмы и гряды'],
        level: '3'
    },
    {
        id: '21',
        type: '01',
        q: 'Какая из обозначенных цифрами на рисунке форм рельефа имеет наименьшую высоту?',
        answer: '3',
        vars: ['1','2','3','4'],
        points: '1',
        img: 'img/mapgeo02.png',
        level: '2'
    },
    {
        id: '22',
        type: '02',
        q: 'Установите соответствие между формами реьефа и их обозначением на карте.',
        answer:  [{'Кордильеры':'2'},{'Заподно-Сибирская равнина':'3'},{'Бразильское плоскогорье':'1'}],
        vars: ['1','2','3','4'],
        points: '2',
        keys: ['Кордильеры','Заподно-Сибирская равнина','Бразильское плоскогорье'],
        img: 'img/mapgeo02.png',
        level: '2'
    },
    {
        id: '23',
        type: '02',
        q: 'На карте буквами обозначены наивысшие вершины гор. Расположите эти вершины в порядке в порядке возрастания их абсолютных высот.',
        answer: [{'1':'C'},{'2':'A'},{'3':'B'}],
        vars: ['A','B','C'],
        points: '2',
        keys: ['1','2','3'],
        img: 'img/mapgeo04.png',
        level: '2'
    },
    {
        id: '24',
        type: '01',
        q: 'На какой из перечисленных территорий найболее вероятны сильные землетрясения?',
        answer: 'Японские острова',
        vars: ['Уральские горы','Японские острова','остров Мадагаскар','остров Великобритания'],
        points: '1',
        level: '2'
    },
    {
        id: '25',
        type: '01',
        q: 'Какое сочетание "горная порода – её тип" верно?',
        answer: 'песок – осадочная',
        vars: ['каменная соль – метаморфическая','нефть – метаморфическая','песок – осадочная','мрамор – магматическая'],
        points: '1',
        level: '1'
    },
    {
        id: '26',
        type: '02',
        q: 'На карте буквами обозначены наивысшие вершины гор. Расположите эти вершины в порядке возрастания их абсолютной высоты.',
        answer: [{'1':'B'},{'2':'A'},{'3':'C'}],
        vars: ['A','B','C'],
        points: '2',
        keys:  ['1','2','3'],
        img: 'img/mapgeo03.png',
        level: '2'
    },
    {
        id: '27',
        type: '01',
        q: 'Какое сочетание «горная порода – её тип» верно?',
        answer: 'известняк – осадочная',
        vars: ['уголь – магматическая','известняк – осадочная','гранит – метаморфическая','мрамор – магматическая'],
        points: '1',
        level: '1'
    },
    {
        id: '28',
        type: '01',
        q: 'На какой из перечисленных территорий найболее вероятны сильные землетрясения?',
        answer: 'остров Ява',
        vars: ['остров Гренландия','Скандинавский полуостров','Уральские горы','остров Ява'],
        points: '1',
        level: '2'
    },
    {
        id: '29',
        type: '01',
        q: 'Что такое щит?',
        answer: 'выход кристалического фундамента платформы на поверхность',
        vars: ['выход кристалического фундамента платформы на поверхность',
                  'участок платформы над водами морей',
                  'высокий горный хребет, препятсвующий движению воздушных масс',
                  'протяженный участок песчаной пустыни'],
        points: '1',
        level: '2'
    },
    {
        id: '30',
        type: '01',
        q: 'Байкальская, каледонская, герцинская, мезозойская – это:',
        answer: 'эпохи горообразования',
        vars: ['эпохи горообразования','природные минеральные воды','периоды смены царств живой природы','названия скважин, где добываются полезные ископаемые'],
        points: '1',
        level: '2'
    },
    {
        id: '31',
        type: '01',
        q: 'Определите какой платформы на территории России не существует.',
        answer: 'Колымская',
        vars: ['Восточно-Европейская','Западно-Сибирская','Сибирская','Колымская'],
        points: '1',
        level: '3'
    },
    {
        id: '32',
        type: '01',
        q: 'Низшая точка поверхности России (-28 м) расположена',
        answer: 'на берегу Каспийского моря',
        vars: ['на берегу озера Эльтон','в Минусинской котловине','на берегу Каспийского моря','в Васюганских болотах'],
        points: '1',
        level: '3'
    },
    {
        id: '33',
        type: '01',
        q: 'Самыми протяженными горами России являются:',
        answer: 'Уральские',
        vars: ['Уральские','Кавказкие','Алтай','Саяны'],
        points: '1',
        level: '3'
    },
    {
        id: '34',
        type: '01',
        q: 'Высшая точка страны – г. Эльбрус – расположена:',
        answer: 'на Кавказе',
        vars: ['на Кавказе','на Алтае','в Саянах','на хребте Джугджур'],
        points: '1',
        level: '3'
    },
    {
        id: '35',
        type: '01',
        q: 'Восточно-Европейская равнина в районе Московской области:',
        answer: 'испытывает слабые поднятия',
        vars: ['поднимается со скоростью 12 мм/год','испытывает слабые поднятия','находится в стабильном состоянии','опускается со скоростью 4 мм/год'],
        points: '1',
        level: '3'
    },
    {
        id: '36',
        type: '01',
        q: 'Сильные землетрясения постоянно происходят на самом большом острове России. Что это за остров?',
        answer: 'Сахалин',
        vars: ['Октябрьской революции','Северный','Сахалин','Врангеля'],
        points: '1',
        level: '3'
    },
    {
        id: '37',
        type: '01',
        q: 'Назовите самый высокий вулкан России:',
        answer: 'Ключевская Сопка',
        vars: ['Кроноцкая Сопка','Ключевская Сопка','Алаид','Толбачик'],
        points: '1',
        level: '3'
    },
    {
        id: '38',
        type: '01',
        q: 'В какой горной породе не образуются карстовые формы рельефа?',
        answer: 'в граните',
        vars: ['в известняке','в каменной соли','в гипсе','в граните'],
        points: '1',
        level: '3'
    },
    {
        id: '39',
        type: '01',
        q: 'Какой формой рельефа является бархан?',
        answer: 'эоловой',
        vars: ['эрозийной','карстовой','эоловой','ледниковой'],
        points: '1',
        level: '1'
    },
    {
        id: '40',
        type: '01',
        q: 'Определите, какой из названных металлов не является цветным:',
        answer: 'железо',
        vars: ['медь','цинк','свинец','железо'],
        points: '1',
        level: '3'
    },
    {
        id: '41',
        type: '01',
        q: 'Какое полезное ископаемое называют «черное золото»?',
        answer: 'нефть',
        vars: ['каменный уголь','нефть','железную руду','торф'],
        points: '1',
        level: '1'
    },
    {
        id: '42',
        type: '01',
        q: 'Какое строительное полезное ископаемое является основой производства кирпича?',
        answer: 'глина',
        vars: ['сода','глина','щебень','песок'],
        points: '1',
        level: '3'
    },
    {
        id: '43',
        type: '01',
        q: 'Выберите правильное определение термина «рекультивация»:',
        answer: 'восстановление нарушенных земель',
        vars: ['восстановление нарушенных земель',
                  'возвращение культурных ценностей',
                  'создание в населённом пункте культурных учреждений',
                  'создание новых сельскохозяйственных технологий'],
        points: '1',
        level: '3'
    }
    /*,
    {
        id: '',
        type: '',
        q: '',
        answer: '',
        vars: ['','','',''],
        points: '1',
        level: ''
    }
    
    ,
        keys: ['','','']
        [{'':''},{'':''},{'':''}]
        « »*/
];

var task6Index, cPoints, mPoints, task6Local;
var task6Answer;

function getMark(lvl, points) {
    
    var mark = {
        '1': 
        {
            '5': [18,20],
            '4': [14,17],
            '3': [9,13]
        },
        '2': 
        {
            '5': [18,20],
            '4': [14,17],
            '3': [9,13]
        },
        '3': 
        {
            '5': [11,13],
            '4': [8,10],
            '3': [6,7]
        }
    };
    var result = '';
    
    for(var key1 in mark) {
        if( key1 == lvl ) {
            for(var key2 in mark[key1]) {
                if( points >= mark[key1][key2][0] && points <= mark[key1][key2][1] ) {
                    result = key2;
                }
            }
        }
    }
    if( result == '' ) result = '2';
    
    return result;
}

function task6Next(idx) {
    var $page = $('#page_6');
    
    mPoints += +task6Q[idx].points;
    $page.find('.score').html(cPoints + '/'+ mPoints);
    if( task6Q[idx].type === '01' ) {
        $page.find('.questions-bar').html('<div class="panel question">' + task6Local + '. ' + task6Q[idx].q + '<div>');
        $page.find('.vars6').empty();
        if( task6Q[idx].img ) {
            $page.find('.questions-bar').append('<div class="panel image two"><img src="' + task6Q[idx].img +'"></div>');
            $page.find('.variants-bar').addClass('lower');
            $page.find('.questions-bar').addClass('higher');
        }
        else {
            task6Q[idx].vars.shuffle();
            $page.find('.variants-bar').removeClass('lower');
            $page.find('.questions-bar').removeClass('higher');
        }
        task6Q[idx].vars.forEach(function(item, i, arr) {
            $page.find('.vars6').append('<div id="t' + task6Q[idx].id + '_' + (i + 1) + '" class="panel variant">' + (i + 1) + ') ' + item + '</div>');
            $page.find('.variant').off('click').on('click', function() {
               $page.find('.selected').removeClass('selected');
               $(this).addClass('selected');
               task6Answer =  $(this).text().split('').splice(3).join('');
               $page.find('.result-bar').fadeIn(500).removeClass('hide');
            });
        });
    }
    if( task6Q[idx].type === '02' ) {
        $page.find('.questions-bar').html('<div class="panel question">' + task6Local + '. ' + task6Q[idx].q + '<div>');
        if( task6Q[idx].img ) {
            $page.find('.questions-bar').append('<div class="panel image two"><img src="' + task6Q[idx].img +'"></div>');
            $page.find('.variants-bar').addClass('lower');
            $page.find('.questions-bar').addClass('higher');
        }
        else {
            task6Q[idx].vars.shuffle();
            $page.find('.variants-bar').removeClass('lower');
            $page.find('.questions-bar').removeClass('higher');
            task6Q[idx].keys.shuffle();
        }
        $page.find('.questions-bar').append('<div class="table-bar"></div>');    
        $page.find('.table-bar').append('<div class="row one"><div class="col-sm-4 type2 h">' + task6Q[idx].keys[0] + '</div><div class="col-sm-4 type2 h">' + task6Q[idx].keys[1] + '</div><div class="col-sm-4 type2 h">' + task6Q[idx].keys[2] + '</div></div>');
        $page.find('.table-bar').append('<div class="row one"><div id="d_1" class="col-sm-4 type2 drop zzz b"></div><div id="d_2" class="col-sm-4 type2 drop zzz b"></div><div id="d_3" class="col-sm-4 type2 drop zzz b"></div></div>');
        $page.find('.vars6').empty();        
        task6Q[idx].vars.forEach(function(item, i, arr) {
            $page.find('.vars6').append('<div id="t' + task6Q[idx].id + '_' + (i + 1) + '" class="panel variant drag zzz">' + (i + 1) + ') ' + item + '</div>');           
        });
    }
    task6Local++;
}

function isTask6Correct(idx) {
    var result = false;
    var r1= [];
    
    if( task6Q[idx].type === '01') {
        if(  task6Q[idx].answer == task6Answer ) result = true;
    }
    if( task6Q[idx].type === '02') {
        r1= [];
        task6Q[idx].answer.forEach(function(item, i, arr) {
            for(var key1 in item) {
                task6Answer.forEach(function(item2, i2, arr2) {
                    for(var key2 in item2) {
                        if( key1 === key2 ) {
                            if( item[key1] === item2[key2] ) r1.push(true);
                            else  r1.push(false);
                        }
                    }
                });
            }
        });
        result = true;
        r1.forEach(function(item, i, arr) {
            if( !item ) {
                result = false; 
                return;
            }
        });
    }
    
    return result;
}

function clearPage6() {
    var $page = $('#page_6');
    
    task6Index = 0;
    cPoints = mPoints = 0;
    task6Answer = 0;
    task6Local = 1;
    $page.find('.result-bar').addClass('hide');
    $page.find('.variants-bar').addClass('hide');
    $page.find('.questions-bar').addClass('hide');
    $page.find('.score').addClass('hide');
    $page.find('.task6').text('Выберите ваш уровень.');
    $page.find('.result-text').empty();
    $page.find('.vars6').empty();
    $page.find('.task6-control').empty().removeClass('hide');
    $('#btn6').text('Проверить');
}

function taskOnPage6() {
    
    var $page = $('#page_6');
    var $btn = $('#btn6'); 
    var initDrag = function() {
        $page.find('.drag').draggable({
            revert: true,
            contaiment: $page,
            start: function() {
            
            },
            stop: function() {
                
            },
            stack: $page.find('.zzz')
        });
    };
    var initDrop = function() {
        $page.find('.drop').droppable({
            accept: $page.find('.drag')
        });
    };
    var dropdown = function() {
        $page.find('.drop').droppable({
            drop: function(e, ui) {
                if( $(this).text() == '' ) {
                    $(this).text($(ui.draggable).text().split('').splice(3).join(''));
                    $(ui.draggable).addClass('hide');
                    $(this).addClass('drag');
                    initDrag();
                    initDrop();
                    if( $page.find('.drag.hide').length == task6Q[task6Index].answer.length ) {
                        $page.find('.result-bar').fadeIn(500).removeClass('hide');
                    }
                }
                else {
                    if( $(ui.draggable).attr('id').split('').splice(0,1).join('') == 'd' ) {
                        var tmp = $(this).text();
                        $(this).text($(ui.draggable).text());
                        $(ui.draggable).text(tmp);
                    }
                    else {
                        var str = $(ui.draggable).text().split('').splice(0,3).join('');
                        var str2 = $(this).text();
                        $(this).text($(ui.draggable).text().split('').splice(3).join(''));
                        $(ui.draggable).text(str + str2);
                    }
                }
                if( !$page.find('.result-bar').hasClass('hide') ) {
                    task6Answer = [];
                    var j = 0, len = task6Q[task6Index].answer.length;
                    while( j < len ) { 
                        $page.find('.type2.h').each(function(i, elem) {
                            $page.find('.type2.b').each(function(i2, el2) {
                                if( i == i2 ) { 
                                    task6Answer.push({});
                                    task6Answer[j][$(elem).text()] = $(el2).text(); 
                                    return false;
                                }                            
                            });
                            j++;
                        });
                    }        
                }
            }
        });
    };
    clearPage6();
    task6Q.shuffle();
    $page.find('.task6-control').append('<button id="lvl-1" class="control-btn">Уровень 1</div><button id="lvl-2" class="control-btn">Уровень 2</div><button id="lvl-3" class="control-btn">Уровень 3</div>');
    var curLvl;
    $page.find('.control-btn').off('click').on('click', function() {
        curLvl = $(this).attr('id').split('-').splice(1).join('');
        $page.find('.task6-control').addClass('hide');
        $page.find('.variants-bar').removeClass('hide');
        $page.find('.questions-bar').removeClass('hide');
        $page.find('.score').removeClass('hide');
        $page.find('.task6').text('Ответьте правильно на ворос.');
        while( curLvl != task6Q[task6Index].level && task6Index < task6Q.length ) {       
            task6Index++;
            if( task6Index == task6Q.length ) break;
        }
        task6Next(task6Index);
        initDrag();
        initDrop();
        dropdown();
    });
    /*while( curLvl != task6Q[task6Index].level ) {       
        task6Index++;
    }
    task6Next(task6Index);*/
    setBtnAnim($btn);
    $btn.off('click').on('click', function() {
        $page.find('.true').removeClass('true');
        $page.find('.false').removeClass('false');
        if( $(this).text() === 'Проверить' ) {
            if( isTask6Correct(task6Index) ) {
                 cPoints += +task6Q[task6Index].points;
                 $(this).text('Далее');
                 $page.find('.result-text').addClass('true').text('ВЕРНО'); 
                 playAudio('audioSuccess');       
            }  
            else {      
                playAudio('audioFail');
                $page.find('.result-text').addClass('false').text('НЕВЕРНО');
                $(this).text('Далее');
            }
        }
        else{            
            if( $(this).text() === 'Далее' ) {
                task6Index++;
                if( task6Index < task6Q.length ) {
                    while( curLvl != task6Q[task6Index].level) {       
                        task6Index++;
                        if( task6Index == task6Q.length ) break;
                    }           
                }
                if( task6Index < task6Q.length ) {
                    
                    task6Next(task6Index);
                    if( task6Q[task6Index].type === '02' ) {
                        initDrag();
                        initDrop();
                        dropdown();
                    }
                    $page.find('.result-text').empty();
                    $page.find('.result-bar').fadeOut(500).addClass('hide');        
                    $(this).text('Проверить');
                }
                else {
                    $page.find('.result-text').empty();
                    $page.find('.result-bar').fadeOut(500).addClass('hide');        
                    $(this).text('Проверить');
                    $page.find('.variants-bar').addClass('hide');
                    $page.find('.score').addClass('hide');
                    $page.find('.task6').text('Результат.');
                    $page.find('.questions-bar').empty().html('<div class="panel question font-large">Набрано балов ' + cPoints + ' из ' + mPoints + '.<br><center>Оценка: ' + getMark(curLvl, cPoints) + '</center></div>');
                }
            }
        }
       
         /*if( $(this).text() === 'Ещё раз' ) {
            
        }*/
    });
    initDrag();
    initDrop();
    dropdown();
        
        
        
}