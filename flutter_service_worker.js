'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7388df428a056f506214553441c6ab2c",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "4e220f779630a679e23d0d00aeafdefb",
"/": "4e220f779630a679e23d0d00aeafdefb",
"main.dart.js": "4f5eca5c1add9faa5399cd1defd08f04",
"resources/apaonessa.pub.asc": "d056faa6ce4d21a4217e784398cc52a3",
"resources/profile.jpg": "00787a6d40093380a195c24ea0e8c51c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "32fb7a90bcf077dde5ebd0c7412d8db3",
"icons/favicon-16x16.png": "fed82958221ae496993e404997d9fa08",
"icons/favicon.ico": "45c9dffd36b6791c2a57b977e61e9501",
"icons/android-chrome-192x192.png": "3d309e771f64c5f91726310fea718032",
"icons/apple-touch-icon.png": "4de1c64150f273f9ef0380b3f5ba0560",
"icons/about.txt": "7366ef76fe7f7485842ba15a4ea55c3f",
"icons/android-chrome-512x512.png": "c5084bdf08afa2272a4019797c567a0e",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/favicon-32x32.png": "3b3a2b3507d20e5e0bcf5b70fd729d88",
"manifest.json": "568e5f7f9942b4b38711b5b9007abd64",
".git/config": "49750834368fa05d6fa837ace949a5be",
".git/objects/0d/43a9464474eeebb401aea9963db1dd8845ee34": "257876ebfbaff99cdb12334a0f03763d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/0c/35c0fabfff918e35ed2afc057926f3858a4624": "d661401a6fb8b645ab06660718b65ac4",
".git/objects/0c/65e0fb0db4c79c0384d75c0292c8f2222ae71a": "a52bda4da29315ba6700c890c0fd7ac9",
".git/objects/0c/4b61b63082cbf51b2f19a0ac6099a63117ca4d": "573c27cf7883a26cb94ebff2d54ac1e5",
".git/objects/0c/88aae6f97246dd434d14f0ac93485a802ed275": "8e298d68d629fddba0fd3df0c8e64cf5",
".git/objects/3e/976af046f3e183b6b4fb7437dfd12d9828a979": "0c4080077769015dca84ddcb59a295fd",
".git/objects/68/82a2fccae749f8fcb9d525224f835f67e739d7": "aa6e344eaa98967cc1547f9fa5f434db",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/9f9091b2761c7fe0c55a89f106935511cf7f81": "c2379a8f9ae47aa6420b1ce1ea468e3a",
".git/objects/9b/586a569188ce8143ff752175e8e722cd38cb9b": "0adb94bf2b54cc061fe78d05328d07fd",
".git/objects/9e/47c8bfe44e129f67b30857d1dbb5538ae9e061": "ed33793c63e25f5569905fbb7f571902",
".git/objects/9e/af2d024353727612b5f40c3417c0155360bb1d": "11679f8b51135cde6e38779b12ab573b",
".git/objects/04/4edec605ca1c10d6bc6be7f0626fccb50c3f5e": "05b1baa3eb198e3576196e750c47b944",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/c3f040f1a239989a7dc588bbd021a1ef65f748": "26b65eb81f7169f391e27d17c0270ce8",
".git/objects/69/63fffa13fe510ad6f26f39af7b2150810600af": "7e5ecae358742abb2ecb243b7ac5a4bf",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/5af06e5ff420065decabd8183b60f639699119": "2e4987ed8eb2db0b825bc8ec7687cfc3",
".git/objects/58/bcfc1215edb4b8df0016deffb7c3e4ee0fa563": "45612cec45ccaa7b9c82330240a88833",
".git/objects/93/9f6edee9fcfccdfd5c5ab4bf1540a6f022c451": "5430a968666443eb52d28e6284a8f5c7",
".git/objects/94/72cf004b60f4abe826f4a34fc18bb2493b2e24": "32bad5ab33e8a6ded22ab74768255351",
".git/objects/0e/0c2671ecc4a3f8a2164624f2e28a44d2acf729": "07c147bdd4c40cd5549f4bd1fd55b4c5",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/6188a34f6a4bbb17134361bc153bbc22e48755": "d31988ef8ac26cd43f0377851ba67a09",
".git/objects/9d/ffa09f62ead071a837591b6b4df3905acc7146": "68c772ec815ea8f383cc7f430ff1119e",
".git/objects/9c/60e802099c8289a08de3554f2e9a771e4b879a": "cad71940fe90264599c2ece1236a67f2",
".git/objects/9c/2d760647f233bee24fced45f55e4af7bf80038": "a2fbb45cd3dddd27427932f962140db3",
".git/objects/a4/7ba0fdafbb0317175dffc6d245aded3b22f392": "f32547d1c26bdd10f2de5d56cd1e529b",
".git/objects/b5/5a576379db383f3e931595ac48af70e2c3e5b6": "db01952d5e05266a847520881869c9d9",
".git/objects/b5/23d8eade7a98b9d2697c3c4c97d0ebf5cc3fa2": "fe6d1dbd234661ed8c348480d6382656",
".git/objects/b5/7d8d1a243337f610d9788c148d0340076e075d": "23d03502cec729112f7d26f326f4848f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/5e6db2eade5b44080b82323e7eb370ad535502": "b62853ca846c1f9429f4317608a6ca8c",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/b3763ee6afbfbebb6bd3f77f7373edaf90a1af": "d4886b3fb4b60634c10edc037739a02e",
".git/objects/b3/a327652c57fcd252e2cc11e1a749374a997aef": "a86120abd89b2d44f0e86b23106818ec",
".git/objects/b3/c1ebf57e621f6ab5e99eda3804b375b2829591": "415f339f1d8993df56154f44077ac975",
".git/objects/b3/5f336806a15e6d982d6496a96a057e7e0e0162": "3169b9284b2eff1fd9d89c5c3c437afb",
".git/objects/df/82912cc48c4a028414593be66a8f5228981411": "21f636851589e11f180b18f90fa7847e",
".git/objects/da/693581c5e6eed97de10cda41be2dd3efd00e41": "618be39f5ac27e8ec9b4a8447d0917d7",
".git/objects/a2/74705a49b06d5b8110ff6acb3817af9fe20bfb": "2d1bc2b4bb64acec686864669331d295",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/348c53fa4182b77a6db36c42d29fb402d0d50a": "fa9a6b4ddcffead3538bb195d663439d",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/1ad2d1cc394bcf24659fc3e12565190df39895": "d55796c350bf34e213fe38e938befeb6",
".git/objects/ae/085a60e61c4f1638bd3af649aa0862e4c6da4c": "53289d76525aaabfa4c30656fb3bb94e",
".git/objects/e5/b7f16cda2003907f55d45d44d6e81c6d3e5179": "9fa1ccde5aa1790ac63a45d20085c77a",
".git/objects/e2/3c9c0ed1d8a21f613ba0732c8e94cc00ecfeba": "87e69272558633864034be58c24a75ed",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/81a6179afc3a1bcc4645d996c76ba391ac0523": "5d72e990221b863af9c5181bf40df612",
".git/objects/c0/745bbef4268a1e01a2b336f72d20df64953701": "da1581128f959ba6e69457c56dc75739",
".git/objects/fd/6cdf69edd24c8e0fd86784310619dcc90b649a": "5ba39982bfd38f9d954c1f72ad29cfbd",
".git/objects/fd/5106ff27b245bd9b21973b924363ee2b2050e2": "4de349ecd02d9cf84b5e630d4ad83c29",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/bb95940e6fb09c2f6853ea737f950f440aec9d": "60c676911b63a067975e065675d078d2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/eff779f1e065a9fffda53ff8673fcb3e0810f9": "3bbd5edf651d44cf133622544511dece",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/aae144296debab8b9e02b19880292799be117d": "02adf0f1ed543929387ff92df05f8324",
".git/objects/c8/17f839e1af1ce6ee7ed9fe5590cc143dc77337": "7eef458e1925d9401fd76c16e5bfe65a",
".git/objects/c8/739478fd3c4abe720b993c6ada7793d14a8ba1": "5de2e78118da57644d29f494bd92f4a7",
".git/objects/fb/182bb56f67776fa8e7c752950f99cf8b2d03ac": "c33112cdf86cc9f26bce5f245f1c4f70",
".git/objects/c1/8924125b32fa9ac967468f86ab7b17f95bac76": "a730d6bc7865b3fc78d719f02a3414dd",
".git/objects/11/b03dbaa5ef14e3833b65ea63a06af7b145510c": "04a276aeac32e5b76cac2bc99a9e4a87",
".git/objects/7d/f5f4166ee7ef58778f7729f57c4fe0711750b3": "21bfe731cfd9e64fbafd707d3b8ace64",
".git/objects/7d/5956526aacf9ed53df945cc7d3ea9f06c7e24f": "709e88e47245eced6105e2c1f7f3cf67",
".git/objects/29/448782590525823d201b6792dd8e4ef6d9036b": "e8e029752f04f39866043081f5f74b5c",
".git/objects/29/fe0139b3366b709c820be37abf7d27e7b45dbf": "af0114a39a524e9aefb09ae185745412",
".git/objects/16/18cca22870aee97b66637cc68b41de1563a16e": "820f27238a9090adb29986767bbe4c99",
".git/objects/42/5c026368612f20b16a270c0f9acca88b2f6821": "fd1cfbbf7cb7b2b0619e60197d4d44df",
".git/objects/89/29d25bc496512c79310b8a5fa75894ec9fca94": "ae13f4a345c234ce0728b8caa302c951",
".git/objects/45/24f3423b36a91ea8a2aa13372a430472c0f57d": "9351f0dd0b290bce890361c4418facbd",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/74/440ad22ba598c1e6b8e1a89f4ca52b3b511122": "4a7cee4abf7424afbcff87fb7e11a155",
".git/objects/74/0e8370c7b1465553a8a8e734f6f2ad8c594636": "12c416f485553ef29f0a8f24180940d3",
".git/objects/1a/db79146d9b56936417e3bcd26564870b0dd1c0": "f98ef865c4b95647b4031da97e8a7404",
".git/objects/28/106b164fe125123dfc86098dc5f7b9b93a2224": "f16fa169a7ad49fa4369e5d2a83e9a38",
".git/objects/28/faa9002b2076945afdbfd283aead83eb651f60": "6cc2564cf3d1f94e5709fbced6ea9175",
".git/objects/7b/8ae3386dcbd4edd5e7be7a8f21dc502576f42f": "a7bee94a88ec30967d4bdc38d7c1116b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/82715fae178e252b30d75306a6898beb2c2658": "f498903a51dd50c71757688920ff6b7c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e8b810905ad715a7bf739e9b15a06c13922ab": "685edd33937db32a541945d5a3d0f2ab",
".git/objects/26/714ec91a79ce3cde6174510b09324d9c9dfee6": "5484f828e49cb9f976debee8e1d86d26",
".git/objects/81/f128aa48dbdd77ee8bef2a33835eff268a70c7": "cf186449590ca9a7f08d440d38eaf6c5",
".git/objects/86/f3b9203201be4a338446efbb36cc9c492b5e4d": "55341a3616c94e88b16ad690365cb806",
".git/objects/86/ad1d1fe442c81428b69789a474040c1944c4ae": "b006231473685dc4b9325f353f2b24b3",
".git/objects/2a/b2835649aa82b63460152e4e4b4c6aae5ffc97": "16fe311a477776691b45eacefd869980",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/27743c3b246493f53201b7c96cbbba2703b7d6": "bfdf190d6b408cdec2ca91c96fd6e8d5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/2cc230bcc51a852f239891ab8687c7e5e32d38": "6a9e1a9f46106adcc78e54c77508894d",
".git/objects/38/13939961a77c22127d8f51874939ff7e1bf8d4": "b7f0cabcefb20b1863b7624db3a90cd2",
".git/objects/38/506ee0581862c6f1409060f8ae65d0fa6640b4": "c1263533b2af69e77bba9d04e8149463",
".git/objects/09/b5789bd12907c00c10a31a3d824bfb98ae0985": "fdbceebae0ec6064cd90ff1cd2bcb48e",
".git/objects/5d/5af5a086df2fd3e18d9989220b61d1528127f6": "7f002ec1d9931896da1a50fc23e6c673",
".git/objects/91/8da99acc7f89da99f18c0e9e0aa688dc64f37a": "c971a9d622f91344481a420b800194b1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/e27083fcd4c14b00c22cbe752b21bf8180cfe0": "dbb079690cfc1e689c711f1edee6e0b2",
".git/objects/65/1ef9da38de12aa34c91602cb93f88ece6d76fd": "0d24f40436631ca2c9949de4abb3365c",
".git/objects/96/a737f5c0582628c133e548e4e7ee2fd89c8b3a": "5d93c54ab827b203d0f74b04c906d911",
".git/objects/96/a5921e82a92c0d362e63dc3707b084ffd57fcd": "b7c6dbfc0892c0edd7f8554023681ccb",
".git/objects/54/b2be693ed97ec11e288816433e1604f54a31e7": "c0ae0146ae18960a442db3e9f3b19b1a",
".git/objects/54/ca8a66529300242cf7bd0747ed94f288dbc381": "ef930fd52180688512fb3b71619875d8",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/53/f2ec22bb1ed1d3a7f4dbca130efea6877a818f": "d2638d7652717736422b0c77aa800c75",
".git/objects/53/5da9320b97f7e62238dabe55b3801ec5e44278": "f972a7494cf7284691364e22eac1c07a",
".git/objects/53/19eecab376856741541532f395d48747bceacf": "2b6625482d7e2a8e346c0f9000ed9896",
".git/objects/53/b18d8d373a5a16b0de82bc363f4cd7b159e77b": "47378165bc1754d1071100126d4cab77",
".git/objects/3f/a118abe670bf763f8ba0566c3beb7ebec851ec": "de83a3757d90acdc3d36e6fac0965f7c",
".git/objects/5b/8dfd45ad9a23fc9809adbed6be3381464e56fa": "e085359bced936defd240ede725b4db2",
".git/objects/37/a459c2865e68115e9a14d69a1a4ffb92fee0c9": "5fb6a14dc44f06ee80982dde2368bc7b",
".git/objects/01/35f412022c6b141200532f87a108dedba1cede": "0f91c35d14b7d1468ae2633697fe05ae",
".git/objects/06/62c861bc6dc8f25cf536b6355d79e053ced05c": "10f4297a162db89034b349a83d818c91",
".git/objects/99/afae27de31dc32b64b2db0c703ec1d7df6deff": "8110ca6c802da3bdbb15a38cd0e7b360",
".git/objects/99/4999404b595e946b857849fabd3df6a765a4c0": "8ad04faeaca65d8c6e7261f9dd0db6aa",
".git/objects/52/ba8a4bf568381475d5c1d14da21df20e1fde0f": "210f67b3151247b2a25a08180106c8f1",
".git/objects/52/a0b6c2dd0db2a4ebdbaea9f7ce964f26c5399a": "7f6d933df80bb429552ab52d41b92ad3",
".git/objects/55/86409200b1737d1488ae06d1b662c87a6332d7": "87b7a81c70f6eae8968a1987d23edcfe",
".git/objects/97/ec329a971df881d805c1236597969971192031": "da33bc5a5ac6c98d2b5eb2823a9c17e8",
".git/objects/63/5cab118a85454136beab55b5ad8a94997b71e5": "111493cb5bdf364be244f29c7ba1b106",
".git/objects/63/b8bd74cebe880b9b2d5273dc9a418a07360ac7": "9da6f879c49d7115c77a98d0b4b720f7",
".git/objects/63/4e4f9d34a4cdb70e07fcdae016188b7fad9f87": "917841527855cacf1e1b0a764b84f404",
".git/objects/0a/ad8254ec8680b372ef7025dced44579bbbc41b": "c2fa06aa9e3fa1285f55b38e646f1c36",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/64/4b356ca6f6a98cc10159c83b220ec4b646e636": "2862d503ef33629ab118e75a9a2fc8ab",
".git/objects/bf/e79bbeea5351756c37bde8714814867cb86601": "668518687cc6f70a1254e1c930f47b1f",
".git/objects/bf/533eb666013a92319da0a760c85ff0fe119ad0": "a25797abecd9eca577b0a4dc3a7b73d2",
".git/objects/bf/864603ce6913144f390a87ab9ca9e0f800b4a7": "2067f261e13bdc5bc78e4b20479b2737",
".git/objects/bf/05379437a1b9d69981b1f00e1ba812887252f8": "2fa8e8973f97b70f8193d1968d384f3f",
".git/objects/d3/cd3f5877839a729a68c33f7db0f53c5c44a942": "1a9944d05dd843c6ac1078a222e69107",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/2d566697f912ff48bd28f8d7c115902ea2a3f6": "fad163115852754e558a7c60bf5ae11a",
".git/objects/a0/3fb2d8d6700e218605e84f2a396b2d2ef54f2d": "47eff4876181aaae669e519e9f75b1b2",
".git/objects/a7/1d0be899d5d134937eebe78dcc882056fd44b7": "33fc7d18f354323184f869fe85294853",
".git/objects/b8/f7f3a6a1595aba497d8e6114b6a32222abf6af": "4110ae7bb0c335c1d40ef3b047b6f877",
".git/objects/b8/1cc736df43f2553e1405463fbac7f91c33039a": "cc5ee84c031d253646cb0832fab36de7",
".git/objects/b1/e8c7956ca1dbce929aea9cb3344709b4af9364": "d4abec0800a86c0820a8d70eccfb90d3",
".git/objects/dd/2279a106da8b64c26674347a5613431feba8f8": "c992e40f7e35f7565f1edb092b31d054",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/0d32d3741ffadd2651894263874b0b5ed5db10": "d5c3813db7e360cb3bb0c2727e3103c4",
".git/objects/dc/b69644fa23c3b8214e0e44d7b74190085c9d5f": "543049f965adc6a5cddb3e72fd99e4a5",
".git/objects/a9/17801c815ed329757835910513974f7999a24c": "58285cb9111f7ea903c0b7658e263d2a",
".git/objects/d5/5faef5f763cf2c138f1d6652fd78c8190f5c93": "c2e2e1445aabbe4f3b3cdcbae0899612",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/780687f3b47930b4b4ceb569d46b22e5e5e930": "499d2a436c35505dfdef6d194c3dbf07",
".git/objects/d2/4b397833632f93156bae2627f0c8cca64dca2d": "8a456bbca340852fe83bf6470cb80805",
".git/objects/aa/6c979eb46f9525003b87eeee1275edf523e4c4": "58ee97fd9db31218be4a97a17fe20113",
".git/objects/aa/90d6b3ef7c8fb2012fa3e9277fbf455af48d13": "3644cfd2ab9a115b386085c3463a2c9a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/68469215fb7ea4e09fae887f5c020f5eaa1438": "6ae2d3acbf442397dd9fc841f050feee",
".git/objects/db/b625fb00e3c83844951df895ca0f61a9f4189d": "aa7ab326e482acfdc944dedc8609922d",
".git/objects/a8/9051f5bace2ea4497e0c843a6b8806f3e9e890": "510f4035cd41fdcc03a7598d6cdd1cc4",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/167330d7937bf7b205e3f81a8fd9ebd25348d8": "441756773b61bd5711fafdf30d14b18e",
".git/objects/a6/4211d593a787626ac97bad18ba43ed6e0997fb": "31811e6594eab75e3960859b831552e6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/37c7e35fab710cde523d5111e327cf9f8f9e24": "91862efa6f39da2dc24d0516c8779b1d",
".git/objects/a1/2daa6b97b7a2b81e8751981476b493b32080cc": "45ed053a064a030f6ba2d43a59431731",
".git/objects/a1/cd686dc8ff67332174a28faac2112c97eb0dfd": "bed5ee0c81d456d7a2f9a6263286d4cd",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/7bc7d885165136885639ba6105790070e1a32e": "ab10714ff181d55328adb05004159b4a",
".git/objects/c4/1718c2bc18eb90b320fe700fb4e5a7cab3fd89": "c63246d0d0093d3a49ddb539c6470b3c",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e6/424c0f0b4a6458ed101aac64b470b32ce46ec9": "6c176f64328c52fc52135a56ab009e0a",
".git/objects/f0/1eea3f51df80fb8eba11a1658722b055d0e6ed": "4d10970b9f5010c073aba5e66dc1de57",
".git/objects/f0/e95fa1404b7b0c43cb606cff3d26d4fb23fe6e": "6cc7038d7ed2869fd51da02ec6d4c64b",
".git/objects/f7/06d8d0790ac03464c3cea695956d9788105a0b": "3c81c0da99a4047ab459ab2441632961",
".git/objects/f7/6f1af03dc0bc47b749e1ae158d061168736a07": "fa62795aeb0e1b863fe96819d2530511",
".git/objects/e8/f651a6dc70b4ac5c4cd0adf9d0d2f5c7c4623d": "6ec75a77f5ea93d27f55409b3d876b8d",
".git/objects/e8/822d12beba7063672f125d7111a6eae8e1fd6f": "3cf4eca079b4331ecf422b7a56dffe31",
".git/objects/fa/03575b48e407264c6783d51281bb3b7ae56f2f": "7028646ed5b608b26ab1f89b220d1a7c",
".git/objects/ff/f1210f184bab7bc8d8d1ff30763c45fb004284": "8eac3cb6bfc5db8577ae87733dbeccf1",
".git/objects/ff/93d68b88595c64f20ba6a429923823c939adbc": "13f275ec6eb166f4fa8424feb4413d85",
".git/objects/c2/47056b9c273448a96ecca73861438b9c4f737d": "dc6c18e7797e0a1263884a64482d856b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/379952e9b22a88a8c482293569e2fcf648ef2a": "aba330c7f120969696ed682286e67fc4",
".git/objects/cb/b23978b7d69bde0e8336d7ba912afb71826958": "aa17c78bfcff36498d51674f6f37b0c3",
".git/objects/cb/14c9556346ee1d992254abe9a1f0ee65ebd430": "e888ca0e50a27bdbcaedc92c959d2f62",
".git/objects/cb/f01039ba1ec7b57ca45e6eb01163e627fc9b07": "0e31e57c73e34aad0ee47bbe4bbc586b",
".git/objects/ce/ecf0956e7422b771d8132f35cb929ff4739d80": "dc6f3213c085d40dcf84ab4d768c3cad",
".git/objects/e0/49e508962ccda31d1f36c03ca88c676fd9e580": "d1a6b918fd8a040c22f954bc44068ad2",
".git/objects/e0/54aaec124c6668a1fb1fbc1f75c7ca04649e72": "c00ccaf7f6cf8f43866bdbeaaa630663",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6a70c23f78fe9a3a02ab8cc6022bf7de87da8e": "e5eec4d9798a0a2045af677166aba625",
".git/objects/2c/f3887e85c064bf87cfd69383448d362fc3902c": "d9c08f47a2785c711f609e266893bdb0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/94dd4ea17bdf17c631c6bfaf91edc979e5579e": "719c4aa4e73e7dbb898f263121993213",
".git/objects/1e/518eccbd7469b5c3051bfb7b4c5cf79ba72d3a": "5413dce2a7ce1e76154bb842d204d582",
".git/objects/4a/b0cdc2155ae915f88c1fc6d23711fe08ce76f5": "8c7325222a37f7e748dbdbca90885980",
".git/objects/4a/59e4902a37a61376b4d953b101aaac5231820f": "05e1a9cb4b5abebf4e77ecd315a0669e",
".git/objects/4a/b1662bc7fed9430bc1d096730e6fc6746b5deb": "857032c3a9fc5b2322a522598c8e2b11",
".git/objects/23/120f903321818f3d06166250dbcc90587295dd": "54d31ed718208c322c8d8f384b1691bc",
".git/objects/23/453310b77754e2a30c77a10ceb8e06c7b540ea": "0e05aeedbb1a8a1cae2db43afb4d7b2a",
".git/objects/23/e5b98daacf7e1e057001982360c1337850439e": "2710415c8b7249ee45576b65bc949b1f",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/12/6aa593df4d23cb3b753e5abd3e056a0e93adf5": "79e0b8f573c5784959ddd9e747504fc0",
".git/objects/12/062311ffb4d445340013bf5c04e50395cb848e": "ee8d7fb0047eabc87a4bcbf59737ec9d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/f323a10797269d0f652e1afc11a86a40c79e4a": "e8b1ec3cf9c46949117c10e8f259d1ec",
".git/objects/8c/f1a99db6a3ce1c6a269687c5eb568254512699": "30709770897489de6fffaa7925082af9",
".git/objects/85/0c29973c57619c99589305bfe0d98c31aaa4de": "41252adf293aacaa92ad2c6111507af9",
".git/objects/1d/3f7d6bd5c7c7fef1cff2fc05ae667723963e8c": "af906d994aa4b86a4cc9853e8412cc8f",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/bca18a254633e8196d1ff7ae9e3b3d58a9427c": "9e43d2132343030a03459354dc9b1db7",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/106ab7a92382c8d1f3d8c1fcb3370e8471f193": "89dfeaa72f31d86fa06c19cb4e9dc94a",
".git/objects/1c/576d42bc800134617290258d59198f582cbeca": "b0af5000dc5ffde8959042f69a377b71",
".git/objects/1c/b461925309d0f9d792589086d0bc1769398864": "a8288df25d7038419c238290a4a34170",
".git/objects/1c/ae3c114c0de7bcbfd241fbdeeb461066d935c4": "8b05cdc224754c5b23cc9cefd8129723",
".git/objects/49/4579d6daa5c78e810a251ae626a4b2668315f6": "8136e9b4baed8d029318cb795012e43c",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/a00dfe782f9ec2a5f270c65a74fece8ec6721a": "dea12cc92d10110567824b1ee00f3bd5",
".git/objects/78/4748d7557d3caa13d85345cd2bf71a7aaad895": "07fc19e72c55d29a298e4ce05a03cd2f",
".git/objects/78/d06fdea33aab2ebc7d995c35e1d92a743088f0": "263db60968356c841b85c9d1b47499a1",
".git/objects/78/124eb3e36cfc4a4944918ee917f1d72671a473": "00aed05c80c2b0071f13b0b4b42262c3",
".git/objects/13/d78f14eacd88416ec13203aa2d202d8aab2414": "0b07bfdc59d2cfd63a8f771a6a507c47",
".git/objects/7a/ce90d9e81a56b4dc00529adc4007a02da2a373": "0f7a80e34584a9a6e7b1cb8b504350e3",
".git/objects/25/acb2a264f2ccc14e3e3616667d6c8c2a1aa521": "872a63209909887fcca1632bf69a1ec5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7961562fc7b2745fd9bc28dd348c2194",
".git/logs/refs/heads/main": "ce86d53affd1c0571a3bde6109956675",
".git/logs/refs/remotes/origin/main": "c53e9f9b74834b065affa5751a1cf7c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "05507cc0baa749aa136cca4b4d6cf12e",
".git/refs/remotes/origin/main": "05507cc0baa749aa136cca4b4d6cf12e",
".git/index": "712b4c34283f471c87c8e2092a9673b3",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "74dac666dafb398632e87e95fcd97f6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
