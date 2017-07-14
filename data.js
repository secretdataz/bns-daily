var alerted = false;

var continents = [
    {//0
        name: "Arena",
        display: "อารีน่า"
    },
    
    {//1
        name: "Veridian Coast",
        display: "เนินเขามังกร"
    },

    {//2
        name: "Cinderlands",
        display: "ทะเลทรายมรณะ"
    },

    {//3
        name: "Moonwater Plains",
        display: "สวนสันติภาพ"
    },

    {//4
        name: "Silverfrost Mountains",
        display: "บุปผาน้ำแข็ง"
    }
]

var dungeons = [
    {},

    {//1
        name: "กองรบทมิฬฝั่งใต้",
        difficulty: 3
    },

    {//2
        name: "สุสานแห่งการสังเวย",
        difficulty: 3
    },

    {//3
        name: "กองรบนาเคนทร์",
        difficulty: 3
    },

    {//4
        name: "ท่าเรือเงาเลือด",
        difficulty: 3
    },

    {//5
        name: "วงกตนาริว",
        difficulty: 3
    },

    {//6
        name: "หอคอยมูชินชั้น 8",
        difficulty: 3
    },

    {//7
        name: "หอคอยมูชินชั้น 9-15",
        difficulty: 3
    },

    {//8
        name: "เขตสัตว์ร้ายลูมัง",
        difficulty: 0
    },

    {//9
        name: "บ่อน้ำประกายหิมะ",
        difficulty: 0
    },

    {//10
        name: "ถ้ำอสูรวิหค",
        difficulty: 2
    },

    {//11
        name: "ถ้ำธิดาน้ำแข็ง",
        difficulty: 2
    },

    {//12
        name: "ถ้ำอวตารวานร",
        difficulty: 2
    },

    {//13
        name: "คุกทาลัน",
        difficulty: 2
    },

    {//14
        name: "ห้องทดลองต้องสาป",
        difficulty: 2
    },

    {//15
        name: "ซากปรักไซเว่ย",
        difficulty: 0
    },

    {//16
        name: "แท่นแห่งการฟื้นคืนชีพ",
        difficulty: 3
    },

    {//17
        name: "ถ้ำเยติ",
        difficulty: 3
    },

    {//18
        name: "ฝันร้ายแห่งราชวังราตรีผนึก",
        difficulty: 3
    },

    {//19
        name: "เขาวงกตสเน่หา",
        difficulty: 3
    },

    {//20
        name: "โกดังน้ำแข็ง",
        difficulty: 3
    },

    {//21
        name: "แท่นอาณัติแห่งสวรรค์",
        difficulty: 3
    },

    {//22
        name: "อนุสรณ์ซอลอกกุง",
        difficulty: 3
    },
]

maps = [
    {//0
        name: "แมตซ์อารีน่า",
        continent: 0
    },

    {//1
        name: "เนินเขามังกร",
        continent: 1
    },

    {//2
        name: "หุบเขามรณะ",
        continent: 2
    },

    {//3
        name: "หอคอยมูชิน",
        continent: 3
    },

    {//4
        name: "ฟาร์มหมู",
        continent: 3
    },

    {//5
        name: "ที่ราบละอองนภา",
        continent: 4
    },

    {//6
        name: "เมืองไซเว่ย",
        continent: 4
    },
    
    {//7
        name: "ป่าไม้เบิร์ช",
        continent: 4
    },

    {//8
        name: "ลานหิมะทิศเหนือ",
        continent: 4
    }
]

var items = [
    {},
    {
        name: "หินโซล"
    }, {
        name: "ถุงหินโซล"
    }
]

var dailies = [
    {
        name: "ไปหยิบขวาน (พิชิต)",
        moneyReward: 2400,
        dungeon: 1,
        location: "กองรบทมิฬฝั่งใต้",
        map: 1,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "สัตว์ศักดิ์สิทธิ์ที่แปดเปื้อน (สำรวจ)",
        moneyReward: 8700,
        dungeon: 2,
        location: "สุสานแห่งการสังเวย",
        map: 2,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ปลดตรวน (พิชิต)",
        moneyReward: 23000,
        dungeon: 3,
        location: "กองรบนาเคนทร์",
        map: 4,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ความเจ็บปวดที่เหลืออยู่",
        moneyReward: 17600,
        dungeon: 6,
        location: "หอคอยมูชินชั้น 8",
        map: 3,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "อดทนต่อความบ้าคลั่ง",
        moneyReward: 18800,
        dungeon: 6,
        location: "หอคอยมูชินชั้น 8",
        map: 3,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ความมืดนิรันดร์",
        moneyReward: 23000,
        dungeon: 6,
        location: "หอคอยมูชินชั้น 8",
        map: 3,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "สนามเด็กเล่นหลายชั้น",
        moneyReward: 46600,
        dungeon: 7,
        location: "หอคอยมูชินชั้น 9-15",
        map: 3,
        categories: ["Dungeon"]
    },

    {
        name: "การทดสอบสุดท้าย",
        moneyReward: 57000,
        dungeon: 7,
        location: "หอคอยมูชินชั้น 9-15",
        map: 3,
        categories: ["Dungeon"]
    },

    {
        name: "ทารามะ",
        moneyReward: 153600,
        dungeon: 7,
        location: "หอคอยมูชินชั้น 9-15",
        map: 3,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "บุกโจมตีท่าเรือสีเลือด",
        moneyReward: 24800,
        dungeon: 4,
        location: "ท่าเรือเงาเลือด",
        map: 4,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "มิโนอูแห่งเขาวงกต (พิชิต)",
        moneyReward: 17600,
        dungeon: 5,
        location: "วงกตนาริว",
        map: 4,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ตัวตลกแห่งเขาวงกต (พิชิต)",
        moneyReward: 17600,
        dungeon: 5,
        location: "วงกตนาริว",
        map: 4,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ตามหาของมีค่าที่ซ่อนอยู่ในเขาวงกต (พิชิต)",
        moneyReward: 23000,
        dungeon: 5,
        location: "วงกตนาริว",
        map: 4,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "กำจัดแมลง",
        moneyReward: 21200,
        dungeon: 8,
        location: "วงกตนาริว",
        map: 5,
        categories: ["Boss"]
    },

    {
        name: "เอาสตริงนี้ออกไป",
        moneyReward: 27200,
        dungeon: 15,
        location: "ซากปรักไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ชนเผ่าที่พรั่งพรู",
        moneyReward: 24900,
        dungeon: 15,
        location: "ซากปรักไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ความรู้สึกของผู้ได้เปรียบ",
        moneyReward: 21200,
        dungeon: 15,
        location: "ซากปรักไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "เป็นทาสทางตอนเหนือ",
        moneyReward: 11820,
        dungeon: 9,
        location: "บ่อน้ำประกายหิมะ",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "สองเผ่า สามผู้นำ",
        moneyReward: 11520,
        dungeon: 9,
        location: "บ่อน้ำประกายหิมะ",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ขยับอยู่ใต้หิมะ",
        moneyReward: 12960,
        dungeon: 9,
        location: "บ่อน้ำประกายหิมะ",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ความเหี้ยมโหดของชูอังคา",
        moneyReward: 15180,
        dungeon: 10,
        location: "ลานหิมะฝั่งเหนือทิศใต้",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ปล่อยเขาไป!!!",
        moneyReward: 15180,
        dungeon: 11,
        location: "ลานหิมะฝั่งเหนือทิศใต้",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "กิจของเหล่าวานร",
        moneyReward: 13380,
        dungeon: 12,
        location: "ป่าไม้เบิร์ชฝั่งตะวันออก",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "เรื่องบันเทิงในคุก",
        moneyReward: 13380,
        dungeon: 13,
        location: "คุกทาลัน",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ดำเนินการต่อไป",
        moneyReward: 16400,
        dungeon: 14,
        location: "ที่ราบละอองนภาทางเหนือ",
        map: 8,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "น้ำแข็งในเส้นเลือด",
        moneyReward: 21100,
        dungeon: 16,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ภาพหลอนอันเหน็บหนาว",
        moneyReward: 16700,
        dungeon: 17,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "สุสานผีดิบที่เกรี้ยวกราด",
        moneyReward: 9840,
        dungeon: 18,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ฝันร้ายที่เมืองต้องสาป",
        moneyReward: 16700,
        dungeon: 18,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ผู้ทำลายประตู",
        moneyReward: 5900,
        dungeon: 19,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "บ่อเกิดแห่งหายนะ",
        moneyReward: 17500,
        dungeon: 19,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "ยามเหมันต์จบลง",
        moneyReward: 12500,
        dungeon: 20,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "กุหลาบจากอดีตกาล",
        moneyReward: 21100,
        dungeon: 21,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "พื้นที่ปิดผนึก",
        moneyReward: 17500,
        dungeon: 22,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },

    {
        name: "เงาพเนจร",
        moneyReward: 10560,
        dungeon: 18,
        location: "เมืองไซเว่ย",
        map: 6,
        categories: ["Dungeon", "Boss"]
    },
]

var defaultSettings = {
    version: 7,
    resetTime: null,
    localTime: new Date(),
    lastModified: new Date(),
    resetHour: '-1',
    editedTime: false,
    showTags: true,
    showContinents: true,
    nightMode: true,
    goldModifier: 1,
    faction: 'false',
    displayDensity: 'cozy',
    done: [
        {
            name: "Default",
            done: [0]
        }
    ],
};

var settings = {
    data: $.extend(true, {}, defaultSettings),

    reset: function() {
        settings.data = $.extend(true, {}, defaultSettings);
        console.log('Reset all settings to default');
    },

    save: function() {
        try {
            localStorage.setItem('bladeAndSoulDailiesSettings', JSON.stringify(settings.data));
        } catch(e) {
            return false;
        }
        console.log('Saved settings: ', settings.data);
    },

    load: function() {
        console.log('Settings load started. Default settings: ', settings.data);
        try {
            if(localStorage.getItem('bladeAndSoulDailiesSettings')) {
                var localOptions = JSON.parse(localStorage.getItem('bladeAndSoulDailiesSettings'));
                for (var option in localOptions) { settings.data[option] = localOptions[option]; }
            } else
                settings.save();
        } catch(e) {
            console.error(e);
            settings.reset();
        }
        console.log('Settings load finished. New settings: ', settings.data)
    },

    update: function(key, value) {
        if(settings.data[key] != value) {
            settings.data[key] = value;
            console.log('Updated', key, ' to ', value, ' New settings: ', settings.data);
            settings.save();
        } else
            console.log('Skipped update of ', key, ' (Same value)', value)
    },

    toggle: function(key) {
        settings.data[key] = !settings.data[key];
        settings.save();
    },

    setToDefault: function(key) {
        console.log('Reset', key, ' to default: ', defaultSettings[key]);
        settings.update(key, defaultSettings[key]);
    }
}