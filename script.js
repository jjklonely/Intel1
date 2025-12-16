// Локализация
const translations = {
    ru: {
        'hero-title': 'О компании Intel',
        'hero-text-1': 'Intel Corporation — американская корпорация, один из крупнейших производителей микропроцессоров и полупроводниковых компонентов для вычислительной техники. Основана в 1968 году Робертом Нойсом и Гордоном Муром в Санта-Кларе, Калифорния.',
        'hero-text-2': 'Intel является пионером в области разработки процессоров и продолжает лидировать в индустрии, создавая инновационные решения для миллионов устройств по всему миру. Компания известна своими революционными технологиями, включая создание первого микропроцессора в 1971 году.',
        'hero-text-3': 'За более чем 50 лет работы Intel внесла огромный вклад в развитие вычислительной техники. Компания производит процессоры для настольных компьютеров, ноутбуков, серверов, мобильных устройств и встраиваемых систем. Intel также разрабатывает чипсеты, материнские платы, сетевые адаптеры и другие компоненты.',
        'hero-text-4': 'Сегодня Intel продолжает инновации в области искусственного интеллекта, квантовых вычислений, автономных транспортных средств и интернета вещей, оставаясь одним из технологических лидеров мирового масштаба.',
        'stat-founded': 'Год основания',
        'stat-employees': 'Сотрудников',
        'stat-countries': 'Стран присутствия',
        'processors-title': 'Поколения процессоров Intel',
        'advantages-title': 'Преимущества процессоров Intel',
        'advantage-1-title': 'Высокая производительность',
        'advantage-1-text': 'Процессоры Intel обеспечивают выдающуюся производительность для игр, профессиональных приложений и многозадачности благодаря передовым архитектурам и технологиям Turbo Boost.',
        'advantage-2-title': 'Энергоэффективность',
        'advantage-2-text': 'Современные процессоры Intel сочетают высокую производительность с отличной энергоэффективностью, обеспечивая длительную работу ноутбуков и снижение энергопотребления.',
        'advantage-3-title': 'Игровая производительность',
        'advantage-3-text': 'Процессоры Intel Core серии i5, i7 и i9 обеспечивают плавный игровой процесс в современных играх с высокими настройками графики и разрешением.',
        'advantage-4-title': 'Безопасность',
        'advantage-4-text': 'Встроенные технологии безопасности Intel защищают ваши данные и обеспечивают безопасную работу в интернете с помощью аппаратных функций защиты.',
        'advantage-5-title': 'Совместимость',
        'advantage-5-text': 'Процессоры Intel обеспечивают отличную совместимость с широким спектром программного обеспечения, операционных систем и периферийных устройств.',
        'advantage-6-title': 'Инновации',
        'advantage-6-text': 'Intel постоянно внедряет новые технологии, такие как AI-ускорение, поддержка DDR5, PCIe 5.0 и гибридные архитектуры для максимальной производительности.',
        'chat-placeholder': 'Задайте вопрос о процессорах Intel...',
        'modal-title': 'Задать вопрос о процессорах Intel',
        'send': 'Отправить',
        'loading': 'Загрузка...',
        'error': 'Произошла ошибка. Пожалуйста, попробуйте снова.'
    },
    kg: {
        'hero-title': 'Intel компаниясы жөнүндө',
        'hero-text-1': 'Intel Corporation — Америкалык корпорация, эсептөө техникасы үчүн микропроцессорлордун жана жарым өткөргүч компоненттердин эң ири өндүрүүчүлөрдүн бири. 1968-жылы Роберт Нойс жана Гордон Мур тарабынан Калифорниянын Санта-Клара шаарында негизделген.',
        'hero-text-2': 'Intel процессорлорду иштеп чыгуу тармагында пионер болуп саналат жана дүйнө жүзүндөгү миллиондогон түзүлүштөр үчүн инновациялык чечимдерди түзүү менен индустрияда лидерлик кылууну улантууда. Компания 1971-жылы биринчи микропроцессорду түзгөн революциялык технологиялары менен белгилүү.',
        'hero-text-3': '50 жылдан ашык иш менен Intel эсептөө техникасынын өнүгүүсүнө чоң салым кошту. Компания үй компьютерлери, ноутбуктар, серверлер, мобилдик түзүлүштөр жана киргизилген системдер үчүн процессорлорду өндүрөт. Intel ошондой эле чипсеттер, эне платалар, тармак адаптерлери жана башка компоненттерди иштеп чыгат.',
        'hero-text-4': 'Бүгүн Intel жасалма интеллект, кванттык эсептөө, автономдук транспорт каражаттары жана нерселер интернети тармагында инновацияларды улантууда, дүйнөлүк масштабдагы технологиялык лидерлердин бири болуп калууда.',
        'stat-founded': 'Негизделген жылы',
        'stat-employees': 'Кызматкерлер',
        'stat-countries': 'Жайгашкан өлкөлөр',
        'processors-title': 'Intel процессорлордун муундары',
        'advantages-title': 'Intel процессорлордун артыкчылыктары',
        'advantage-1-title': 'Жогорку өндүрүмдүүлүк',
        'advantage-1-text': 'Intel процессорлору оюндар, кесипкөйлөрдүн тиркемелери жана көп милдеттүүлүк үчүн алдыңкы архитектуралар жана Turbo Boost технологиялары аркылуу кереметтүү өндүрүмдүүлүктү камсыз кылат.',
        'advantage-2-title': 'Энергиянын натыйжалуулугу',
        'advantage-2-text': 'Заманбап Intel процессорлору жогорку өндүрүмдүүлүктү мыкты энергиянын натыйжалуулугу менен айкалыштырып, ноутбуктардын узак иштеши жана энергия керектөөсүнүн азайышын камсыз кылат.',
        'advantage-3-title': 'Оюн өндүрүмдүүлүгү',
        'advantage-3-text': 'Intel Core i5, i7 жана i9 сериясынын процессорлору заманбап оюндарда жогорку графика жөндөөлөрү жана чечилиши менен тегиз оюн процессин камсыз кылат.',
        'advantage-4-title': 'Коопсуздук',
        'advantage-4-text': 'Intelдин киргизилген коопсуздук технологиялары маалыматтарыңызды коргойт жана аппараттык коргоо функциялары менен интернетте коопсуз иштөөнү камсыз кылат.',
        'advantage-5-title': 'Ыңгайлаштырылгандык',
        'advantage-5-text': 'Intel процессорлору кеңири программалык камсыздоо, операциялык системдер жана перифериялык түзүлүштөр менен мыкты ыңгайлаштырылгандыкты камсыз кылат.',
        'advantage-6-title': 'Инновациялар',
        'advantage-6-text': 'Intel максималдуу өндүрүмдүүлүк үчүн AI-ылдамдатуу, DDR5 колдоосу, PCIe 5.0 жана гибриддик архитектуралар сыяктуу жаңы технологияларды туруктуу киргизип турат.',
        'chat-placeholder': 'Intel процессорлору жөнүндө суроо бериңиз...',
        'modal-title': 'Intel процессорлору жөнүндө суроо бериңиз',
        'send': 'Жөнөтүү',
        'loading': 'Жүктөлүүдө...',
        'error': 'Ката кетти. Сураныч, кайра аракет кылыңыз.'
    },
    en: {
        'hero-title': 'About Intel Corporation',
        'hero-text-1': 'Intel Corporation is an American corporation, one of the largest manufacturers of microprocessors and semiconductor components for computing technology. Founded in 1968 by Robert Noyce and Gordon Moore in Santa Clara, California.',
        'hero-text-2': 'Intel is a pioneer in processor development and continues to lead the industry, creating innovative solutions for millions of devices worldwide. The company is known for its revolutionary technologies, including the creation of the first microprocessor in 1971.',
        'hero-text-3': 'Over more than 50 years of operation, Intel has made a huge contribution to the development of computing technology. The company produces processors for desktop computers, laptops, servers, mobile devices and embedded systems. Intel also develops chipsets, motherboards, network adapters and other components.',
        'hero-text-4': 'Today, Intel continues to innovate in artificial intelligence, quantum computing, autonomous vehicles and the Internet of Things, remaining one of the world\'s technological leaders.',
        'stat-founded': 'Year Founded',
        'stat-employees': 'Employees',
        'stat-countries': 'Countries',
        'processors-title': 'Intel Processor Generations',
        'advantages-title': 'Intel Processor Advantages',
        'advantage-1-title': 'High Performance',
        'advantage-1-text': 'Intel processors deliver outstanding performance for gaming, professional applications and multitasking thanks to advanced architectures and Turbo Boost technologies.',
        'advantage-2-title': 'Energy Efficiency',
        'advantage-2-text': 'Modern Intel processors combine high performance with excellent energy efficiency, ensuring long laptop operation and reduced power consumption.',
        'advantage-3-title': 'Gaming Performance',
        'advantage-3-text': 'Intel Core i5, i7 and i9 series processors provide smooth gameplay in modern games with high graphics settings and resolution.',
        'advantage-4-title': 'Security',
        'advantage-4-text': 'Built-in Intel security technologies protect your data and ensure safe internet operation with hardware protection features.',
        'advantage-5-title': 'Compatibility',
        'advantage-5-text': 'Intel processors provide excellent compatibility with a wide range of software, operating systems and peripheral devices.',
        'advantage-6-title': 'Innovation',
        'advantage-6-text': 'Intel constantly introduces new technologies such as AI acceleration, DDR5 support, PCIe 5.0 and hybrid architectures for maximum performance.',
        'chat-placeholder': 'Ask a question about Intel processors...',
        'modal-title': 'Ask a Question About Intel Processors',
        'send': 'Send',
        'loading': 'Loading...',
        'error': 'An error occurred. Please try again.'
    }
};

// Данные о процессорах
const processors = {
    ru: [
        {
            name: 'Intel Core 2 Duo',
            generation: 'Поколение Core 2',
            description: 'Процессоры Core 2 Duo были представлены в 2006 году и стали значительным шагом вперед в производительности.',
            features: ['Двухъядерная архитектура', '65-45 нм техпроцесс', 'Поддержка 64-битных инструкций', 'Улучшенная энергоэффективность']
        },
        {
            name: 'Intel Core i3/i5/i7 (1-го поколения)',
            generation: 'Поколение Nehalem/Westmere',
            description: 'Первое поколение процессоров Core i, представленное в 2008-2010 годах. Значительное улучшение архитектуры.',
            features: ['Многоядерная архитектура', 'Технология Turbo Boost', 'Встроенный контроллер памяти', 'Поддержка Hyper-Threading']
        },
        {
            name: 'Intel Core i3/i5/i7 (2-го поколения)',
            generation: 'Поколение Sandy Bridge',
            description: 'Второе поколение, представленное в 2011 году. Интеграция графики в процессор.',
            features: ['Улучшенная архитектура', 'Встроенная графика Intel HD', 'Технология Quick Sync', 'Улучшенная производительность']
        },
        {
            name: 'Intel Core i3/i5/i7 (3-го поколения)',
            generation: 'Поколение Ivy Bridge',
            description: 'Третье поколение с улучшенной энергоэффективностью, представленное в 2012 году.',
            features: ['22 нм техпроцесс', 'Улучшенная встроенная графика', 'Низкое энергопотребление', 'Лучшая производительность на ватт']
        },
        {
            name: 'Intel Core i3/i5/i7 (4-го поколения)',
            generation: 'Поколение Haswell',
            description: 'Четвертое поколение, представленное в 2013 году. Улучшенная производительность и энергоэффективность.',
            features: ['22 нм техпроцесс', 'Улучшенная архитектура', 'Новые инструкции AVX2', 'Лучшая производительность графики']
        },
        {
            name: 'Intel Core i3/i5/i7 (5-го поколения)',
            generation: 'Поколение Broadwell',
            description: 'Пятое поколение с переходом на 14 нм техпроцесс, представленное в 2014-2015 годах.',
            features: ['14 нм техпроцесс', 'Улучшенная энергоэффективность', 'Интеграция Wi-Fi и Bluetooth', 'Меньший размер кристалла']
        },
        {
            name: 'Intel Core i3/i5/i7 (6-го поколения)',
            generation: 'Поколение Skylake',
            description: 'Шестое поколение, представленное в 2015 году. Новая архитектура с улучшенной производительностью.',
            features: ['14 нм техпроцесс', 'Новая архитектура Skylake', 'Поддержка DDR4', 'Улучшенная графика'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7 (7-го поколения)',
            generation: 'Поколение Kaby Lake',
            description: 'Седьмое поколение, представленное в 2016-2017 годах. Оптимизация существующей архитектуры.',
            features: ['14 нм техпроцесс', 'Оптимизированная архитектура', 'Улучшенная графика', 'Поддержка 4K видео']
        },
        {
            name: 'Intel Core i3/i5/i7 (8-го поколения)',
            generation: 'Поколение Coffee Lake',
            description: 'Восьмое поколение, представленное в 2017-2018 годах. Увеличение количества ядер.',
            features: ['14 нм техпроцесс', 'Больше ядер в линейке', 'Улучшенная производительность', 'Поддержка большего объема памяти']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (9-го поколения)',
            generation: 'Поколение Coffee Lake Refresh',
            description: 'Девятое поколение, представленное в 2018-2019 годах. Введение Core i9 в мейнстрим.',
            features: ['14 нм техпроцесс', 'До 8 ядер в Core i9', 'Улучшенная производительность', 'Поддержка высокоскоростной памяти'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (10-го поколения)',
            generation: 'Поколение Comet Lake / Ice Lake',
            description: 'Десятое поколение, представленное в 2019-2020 годах. Два варианта архитектуры.',
            features: ['10-14 нм техпроцесс', 'До 10 ядер', 'Поддержка Wi-Fi 6', 'Улучшенная графика']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (11-го поколения)',
            generation: 'Поколение Rocket Lake / Tiger Lake',
            description: 'Одиннадцатое поколение, представленное в 2020-2021 годах. Улучшенная архитектура и графика.',
            features: ['10-14 нм техпроцесс', 'Новая архитектура Willow Cove', 'Графика Xe', 'Поддержка PCIe 4.0'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (12-го поколения)',
            generation: 'Поколение Alder Lake',
            description: 'Двенадцатое поколение, представленное в 2021 году. Гибридная архитектура с P- и E-ядрами.',
            features: ['10 нм техпроцесс (Intel 7)', 'Гибридная архитектура', 'Поддержка DDR5', 'PCIe 5.0'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (13-го поколения)',
            generation: 'Поколение Raptor Lake',
            description: 'Тринадцатое поколение, представленное в 2022 году. Улучшенная версия Alder Lake.',
            features: ['10 нм техпроцесс (Intel 7)', 'Больше E-ядер', 'Улучшенная производительность', 'Поддержка высокоскоростной памяти']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (14-го поколения)',
            generation: 'Поколение Raptor Lake Refresh / Meteor Lake',
            description: 'Четырнадцатое поколение, представленное в 2023 году. Новые архитектуры и улучшения.',
            features: ['7-10 нм техпроцесс', 'Новая архитектура Meteor Lake', 'Улучшенная энергоэффективность', 'AI-ускорение'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i7-8700K',
            generation: 'Coffee Lake (8-е поколение)',
            description: 'Флагманский процессор 8-го поколения с отличной производительностью для игр и профессиональных задач.',
            features: ['6 ядер / 12 потоков', 'Базовая частота 3.7 ГГц', 'Turbo Boost до 4.7 ГГц', 'Разблокированный множитель'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        }
    ],
    kg: [
        {
            name: 'Intel Core 2 Duo',
            generation: 'Core 2 мууну',
            description: 'Core 2 Duo процессорлору 2006-жылы тааныштырылып, өндүрүмдүүлүктө маанилүү кадам болду.',
            features: ['Эки ядролуу архитектура', '65-45 нм технология', '64-биттик көрсөтмөлөрдү колдоо', 'Жакшыртылган энергиянын натыйжалуулугу']
        },
        {
            name: 'Intel Core i3/i5/i7 (1-муун)',
            generation: 'Nehalem/Westmere мууну',
            description: 'Core i процессорлорунун биринчи мууну, 2008-2010-жылдары тааныштырылган. Архитектуранын маанилүү жакшыртылышы.',
            features: ['Көп ядролуу архитектура', 'Turbo Boost технологиясы', 'Киргизилген эстөө контроллери', 'Hyper-Threading колдоосу']
        },
        {
            name: 'Intel Core i3/i5/i7 (2-муун)',
            generation: 'Sandy Bridge мууну',
            description: 'Экинчи муун, 2011-жылы тааныштырылган. Процессорго графиканын интеграциясы.',
            features: ['Жакшыртылган архитектура', 'Киргизилген Intel HD графикасы', 'Quick Sync технологиясы', 'Жакшыртылган өндүрүмдүүлүк']
        },
        {
            name: 'Intel Core i3/i5/i7 (3-муун)',
            generation: 'Ivy Bridge мууну',
            description: 'Энергиянын натыйжалуулугу жакшыртылган үчүнчү муун, 2012-жылы тааныштырылган.',
            features: ['22 нм технология', 'Жакшыртылган киргизилген графика', 'Төмөн энергия керектөөсү', 'Ватт боюнча жакшы өндүрүмдүүлүк']
        },
        {
            name: 'Intel Core i3/i5/i7 (4-муун)',
            generation: 'Haswell мууну',
            description: 'Төртүнчү муун, 2013-жылы тааныштырылган. Жакшыртылган өндүрүмдүүлүк жана энергиянын натыйжалуулугу.',
            features: ['22 нм технология', 'Жакшыртылган архитектура', 'Жаңы AVX2 көрсөтмөлөрү', 'Графиканын жакшы өндүрүмдүүлүгү']
        },
        {
            name: 'Intel Core i3/i5/i7 (5-муун)',
            generation: 'Broadwell мууну',
            description: '14 нм технологияга өтүү менен бешинчи муун, 2014-2015-жылдары тааныштырылган.',
            features: ['14 нм технология', 'Жакшыртылган энергиянын натыйжалуулугу', 'Wi-Fi жана Bluetooth интеграциясы', 'Кичинекей кристалл көлөмү']
        },
        {
            name: 'Intel Core i3/i5/i7 (6-муун)',
            generation: 'Skylake мууну',
            description: 'Алтынчы муун, 2015-жылы тааныштырылган. Жакшыртылган өндүрүмдүүлүктүү жаңы архитектура.',
            features: ['14 нм технология', 'Жаңы Skylake архитектурасы', 'DDR4 колдоосу', 'Жакшыртылган графика'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7 (7-муун)',
            generation: 'Kaby Lake мууну',
            description: 'Жетинчи муун, 2016-2017-жылдары тааныштырылган. Мурдатан бар архитектуранын оптимизациясы.',
            features: ['14 нм технология', 'Оптимизацияланган архитектура', 'Жакшыртылган графика', '4K видео колдоосу']
        },
        {
            name: 'Intel Core i3/i5/i7 (8-муун)',
            generation: 'Coffee Lake мууну',
            description: 'Сегизинчи муун, 2017-2018-жылдары тааныштырылган. Ядролордун санынын көбөйүшү.',
            features: ['14 нм технология', 'Серияда көбүрөөк ядролор', 'Жакшыртылган өндүрүмдүүлүк', 'Көбүрөөк эстөө көлөмүн колдоо']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (9-муун)',
            generation: 'Coffee Lake Refresh мууну',
            description: 'Тогузунчу муун, 2018-2019-жылдары тааныштырылган. Core i9дун мейнстримге киргизилиши.',
            features: ['14 нм технология', 'Core i9до 8 ядрого чейин', 'Жакшыртылган өндүрүмдүүлүк', 'Жогорку ылдамдыктагы эстөөнү колдоо'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (10-муун)',
            generation: 'Comet Lake / Ice Lake мууну',
            description: 'Онунчу муун, 2019-2020-жылдары тааныштырылган. Эки архитектура варианты.',
            features: ['10-14 нм технология', '10 ядрого чейин', 'Wi-Fi 6 колдоосу', 'Жакшыртылган графика']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (11-муун)',
            generation: 'Rocket Lake / Tiger Lake мууну',
            description: 'Он биринчи муун, 2020-2021-жылдары тааныштырылган. Жакшыртылган архитектура жана графика.',
            features: ['10-14 нм технология', 'Жаңы Willow Cove архитектурасы', 'Xe графикасы', 'PCIe 4.0 колдоосу'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (12-муун)',
            generation: 'Alder Lake мууну',
            description: 'Он экинчи муун, 2021-жылы тааныштырылган. P- жана E-ядролору менен гибриддик архитектура.',
            features: ['10 нм технология (Intel 7)', 'Гибриддик архитектура', 'DDR5 колдоосу', 'PCIe 5.0'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (13-муун)',
            generation: 'Raptor Lake мууну',
            description: 'Он үчүнчү муун, 2022-жылы тааныштырылган. Alder Lakenin жакшыртылган версиясы.',
            features: ['10 нм технология (Intel 7)', 'Көбүрөөк E-ядролор', 'Жакшыртылган өндүрүмдүүлүк', 'Жогорку ылдамдыктагы эстөөнү колдоо']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (14-муун)',
            generation: 'Raptor Lake Refresh / Meteor Lake мууну',
            description: 'Он төртүнчү муун, 2023-жылы тааныштырылган. Жаңы архитектуралар жана жакшыртуулар.',
            features: ['7-10 нм технология', 'Жаңы Meteor Lake архитектурасы', 'Жакшыртылган энергиянын натыйжалуулугу', 'AI-ылдамдатуу'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        }
    ],
    en: [
        {
            name: 'Intel Core 2 Duo',
            generation: 'Core 2 Generation',
            description: 'Core 2 Duo processors were introduced in 2006 and marked a significant step forward in performance.',
            features: ['Dual-core architecture', '65-45 nm process', '64-bit instruction support', 'Improved energy efficiency']
        },
        {
            name: 'Intel Core i3/i5/i7 (1st Gen)',
            generation: 'Nehalem/Westmere Generation',
            description: 'First generation of Core i processors, introduced in 2008-2010. Significant architecture improvement.',
            features: ['Multi-core architecture', 'Turbo Boost technology', 'Integrated memory controller', 'Hyper-Threading support']
        },
        {
            name: 'Intel Core i3/i5/i7 (2nd Gen)',
            generation: 'Sandy Bridge Generation',
            description: 'Second generation, introduced in 2011. Integration of graphics into the processor.',
            features: ['Improved architecture', 'Intel HD integrated graphics', 'Quick Sync technology', 'Improved performance']
        },
        {
            name: 'Intel Core i3/i5/i7 (3rd Gen)',
            generation: 'Ivy Bridge Generation',
            description: 'Third generation with improved energy efficiency, introduced in 2012.',
            features: ['22 nm process', 'Improved integrated graphics', 'Low power consumption', 'Better performance per watt']
        },
        {
            name: 'Intel Core i3/i5/i7 (4th Gen)',
            generation: 'Haswell Generation',
            description: 'Fourth generation, introduced in 2013. Improved performance and energy efficiency.',
            features: ['22 nm process', 'Improved architecture', 'New AVX2 instructions', 'Better graphics performance']
        },
        {
            name: 'Intel Core i3/i5/i7 (5th Gen)',
            generation: 'Broadwell Generation',
            description: 'Fifth generation with transition to 14 nm process, introduced in 2014-2015.',
            features: ['14 nm process', 'Improved energy efficiency', 'Wi-Fi and Bluetooth integration', 'Smaller die size']
        },
        {
            name: 'Intel Core i3/i5/i7 (6th Gen)',
            generation: 'Skylake Generation',
            description: 'Sixth generation, introduced in 2015. New architecture with improved performance.',
            features: ['14 nm process', 'New Skylake architecture', 'DDR4 support', 'Improved graphics'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7 (7th Gen)',
            generation: 'Kaby Lake Generation',
            description: 'Seventh generation, introduced in 2016-2017. Optimization of existing architecture.',
            features: ['14 nm process', 'Optimized architecture', 'Improved graphics', '4K video support']
        },
        {
            name: 'Intel Core i3/i5/i7 (8th Gen)',
            generation: 'Coffee Lake Generation',
            description: 'Eighth generation, introduced in 2017-2018. Increase in number of cores.',
            features: ['14 nm process', 'More cores in the lineup', 'Improved performance', 'Support for more memory']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (9th Gen)',
            generation: 'Coffee Lake Refresh Generation',
            description: 'Ninth generation, introduced in 2018-2019. Introduction of Core i9 to mainstream.',
            features: ['14 nm process', 'Up to 8 cores in Core i9', 'Improved performance', 'High-speed memory support'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (10th Gen)',
            generation: 'Comet Lake / Ice Lake Generation',
            description: 'Tenth generation, introduced in 2019-2020. Two architecture variants.',
            features: ['10-14 nm process', 'Up to 10 cores', 'Wi-Fi 6 support', 'Improved graphics']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (11th Gen)',
            generation: 'Rocket Lake / Tiger Lake Generation',
            description: 'Eleventh generation, introduced in 2020-2021. Improved architecture and graphics.',
            features: ['10-14 nm process', 'New Willow Cove architecture', 'Xe graphics', 'PCIe 4.0 support'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (12th Gen)',
            generation: 'Alder Lake Generation',
            description: 'Twelfth generation, introduced in 2021. Hybrid architecture with P- and E-cores.',
            features: ['10 nm process (Intel 7)', 'Hybrid architecture', 'DDR5 support', 'PCIe 5.0'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (13th Gen)',
            generation: 'Raptor Lake Generation',
            description: 'Thirteenth generation, introduced in 2022. Improved version of Alder Lake.',
            features: ['10 nm process (Intel 7)', 'More E-cores', 'Improved performance', 'High-speed memory support']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (14th Gen)',
            generation: 'Raptor Lake Refresh / Meteor Lake Generation',
            description: 'Fourteenth generation, introduced in 2023. New architectures and improvements.',
            features: ['7-10 nm process', 'New Meteor Lake architecture', 'Improved energy efficiency', 'AI acceleration'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        },
        {
            name: 'Intel Core i7-8700K',
            generation: 'Coffee Lake (8th Gen)',
            description: 'Flagship processor of the 8th generation with excellent performance for gaming and professional tasks.',
            features: ['6 cores / 12 threads', 'Base frequency 3.7 GHz', 'Turbo Boost up to 4.7 GHz', 'Unlocked multiplier'],
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
        }
    ]
};

// Текущий язык
let currentLang = 'ru';
let currentSlide = 0;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initSlider();
    initChat();
    initModal();
});

// Переключение языков
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Обновление текстов
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновление placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Обновление слайдера
    updateSlider();
}

// Слайдер
function initSlider() {
    updateSlider();
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + processors[currentLang].length) % processors[currentLang].length;
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % processors[currentLang].length;
        updateSlider();
    });
    
    // Автопрокрутка
    setInterval(() => {
        currentSlide = (currentSlide + 1) % processors[currentLang].length;
        updateSlider();
    }, 5000);
}

function updateSlider() {
    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');
    const data = processors[currentLang];
    
    track.innerHTML = '';
    dots.innerHTML = '';
    
    data.forEach((processor, index) => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        const imageHtml = processor.image ? `<div class="processor-image"><img src="${processor.image}" alt="${processor.name}" onerror="this.style.display='none'"></div>` : '';
        slide.innerHTML = `
            ${imageHtml}
            <h3>${processor.name}</h3>
            <div class="generation">${processor.generation}</div>
            <p class="description">${processor.description}</p>
            <ul class="features">
                ${processor.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        track.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === currentSlide ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
        dots.appendChild(dot);
    });
    
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Чат
function initChat() {
    const sendBtn = document.getElementById('sendBtn');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const question = chatInput.value.trim();
    
    if (!question) return;
    
    // Добавление вопроса пользователя
    addMessage(chatMessages, question, 'user');
    chatInput.value = '';
    
    // Отправка в ChatGPT
    sendToChatGPT(question, chatMessages);
}

// Модальное окно
function initModal() {
    const modal = document.getElementById('questionModal');
    const aiBtn = document.getElementById('aiQuestionBtn');
    const closeBtn = document.getElementById('closeModal');
    const modalSendBtn = document.getElementById('modalSendBtn');
    const modalInput = document.getElementById('modalInput');
    const modalMessages = document.getElementById('modalMessages');
    
    aiBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    modalSendBtn.addEventListener('click', () => {
        const question = modalInput.value.trim();
        if (question) {
            addMessage(modalMessages, question, 'user');
            modalInput.value = '';
            sendToChatGPT(question, modalMessages);
        }
    });
    
    modalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            modalSendBtn.click();
        }
    });
}

// Добавление сообщения
function addMessage(container, text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

// Отправка в ChatGPT API
async function sendToChatGPT(question, container) {
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'message loading';
    loadingMsg.textContent = translations[currentLang]['loading'];
    container.appendChild(loadingMsg);
    container.scrollTop = container.scrollHeight;
    
    try {
        // ВАЖНО: Замените YOUR_API_KEY на ваш реальный API ключ OpenAI
        const API_KEY = 'YOUR_API_KEY';
        
        if (API_KEY === 'YOUR_API_KEY') {
            loadingMsg.remove();
            addMessage(container, translations[currentLang]['error'] + ' Пожалуйста, укажите ваш API ключ OpenAI в файле script.js', 'assistant');
            return;
        }
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: `You are a helpful assistant that provides information about Intel processors. Answer in ${currentLang === 'ru' ? 'Russian' : currentLang === 'kg' ? 'Kyrgyz' : 'English'}.`
                    },
                    {
                        role: 'user',
                        content: question
                    }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        loadingMsg.remove();
        
        if (data.choices && data.choices[0]) {
            addMessage(container, data.choices[0].message.content, 'assistant');
        } else {
            addMessage(container, translations[currentLang]['error'], 'assistant');
        }
    } catch (error) {
        loadingMsg.remove();
        console.error('Error:', error);
        addMessage(container, translations[currentLang]['error'] + ': ' + error.message, 'assistant');
    }
}

