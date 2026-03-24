const fin = "false";
var MS1_dan = "null";
var cost_AB01   = ["-",  4,  5,  2,  5,  2,  2,  5,  2,  3,  2,  3,  2,  3,  5,  7,  5,  3,  4,  3,  6,  6,  6,  4,  2,  4,  5,  3,  4,  4,  3,  5,  7,  5,  6,  4,  3,  3,  4,  2,  2,  4,  5,  3,  6,  6,  2,  5,  3,  4,  3,  4,  3,  1,  4,  3,  5,  5,  3,  2,  2,  3,  4,  3,  3,  5,  3,  5,  2,  2,  7,  2,  6,  4,  2,  3,  1,  3,  4,  4,  3,  4,  2,  2,  1,  1,  5,  3,  2,  3];
var move_AB01   = ["-",200,110,110, 60, 80,120,190,210,210,190,200,240,290,110,220,200,240, 60,160,240,240,150, 80,110,100,380,140,140,200,150, 50,290,210,290,220,180,120,170, 60,200,260,160,300,130,390,160,190,200, 80,210,150,120, 90, 70,280,220,180,160,130,130,250,150,110,140,290,140, 60,160,150,360,140,180,140, 90,170,150,230,130, 70, 80,190,330,100,100,120,290, 90,110,150];
var long_AB01   = ["-",110,190,190,280,160,230,360,  0,190,110,100,190,230,280,510,120, 90,220,100,240,140,450,110,100,300,360,100,330,110,170,300,230,160,100,100,150,  0,220,150,110,350, 60,200,170,440, 70,  0,200,270,330,200,150,180,220,270,180,110, 60, 80,120,100,300,140,110,230,130,420,130,210,300,120,320,180,210,120, 50,150, 80,100,180,120,130,160, 70, 30,290, 90,230,260];
var middle_AB01 = ["-",370, 70, 90, 50, 60,120,110,260,150,180,160, 80,300, 90,240,150,460,130,200,480,300,160,200,150, 70,350,160,130,190,100,110,300,120,350,580, 50,280, 80,100,180,200,200,300,360,380,170,330,150, 80,110,240,150,130,120,150,170,200,200,140,120,250,130,140,140,290,140,240,130, 80,300,120,180,100, 50,120,150,250,180,180,130,170,200,110,150,150,290,100,120,200];
var hp_AB01     = ["-",380,170,110,180,140,120,240,330,170,200,170, 80,220, 90,420,240,300,120,200,500,370,390,240,230,140,230,170,260,180,110,200,380,170,340,360, 80,250,110,110,190,260,180,290,390,420,220,520,100,180,120,160,120, 70,130,130,160,250,120,150,130,250,280,150,150,230,110,240, 80, 60,260,120,430,140,170,110,120,200,150,220,130, 80,130,130,150,180,160,260,220,100];
var link_a_AB01 = ["-","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム外伝","機動戦士ガンダム外伝","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","Re:RISE","Re:RISE","Re:RISE","Re:RISE","Re:RISE","Re:RISE","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム","機動戦士ガンダム外伝","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムUC","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","ガンダムSEED","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","鉄血のオルフェンズ","Re:RIZE","Re:RIZE","Re:RIZE","Re:RIZE"];
var link_b_AB01 = ["-","その名はガンダム","その名はガンダム","-","-","-","-","赤のプライド","-","-","漆黒の戦士","漆黒の戦士","漆黒の戦士","-","-","サイコミュの使い手","その名はガンダム","サイコミュの使い手","サイコミュの使い手","サイコミュの使い手","赤のプライド","赤のプライド","サイコミュの使い手","サイコミュの使い手","-","専用機の実力","その名はガンダム","その名はガンダム","赤のプライド","奪われし機体","奪われし機体","奪われし機体","奪われし機体","漆黒の戦士","-","屈強なる鉄の華","屈強なる鉄の華","屈強なる鉄の華","屈強なる鉄の華","-","-","専用機の実力","専用機の実力","-","-","その名はガンダム","その名はガンダム","-","-","-","-","ニュータイプの潜在能力","ニュータイプの潜在能力","-","-","ニュータイプの潜在能力","ニュータイプの潜在能力","ベテランの技量","黒い三連星","黒い三連星","黒い三連星","優れた格闘センス","ニュータイプの潜在能力","ニュータイプの潜在能力","ニュータイプの潜在能力","ニュータイプの潜在能力","ニュータイプの潜在能力","優れた射撃センス","ベテランの技量","-","優れた射撃センス","優れた格闘センス","優れた射撃センス","優れた射撃センス","優れた射撃センス","優れた格闘センス","ベテランの技量","屈強なる鉄の華","屈強なる鉄の華","屈強なる鉄の華","屈強なる鉄の華","-","-","-","ベテランの技量","-","巧みな連携戦術","巧みな連携戦術","巧みな連携戦術","巧みな連携戦術"];

var link              = [0,"機動戦士ガンダム","第08MS小隊","MS IGLOO","機動戦士ガンダム外伝","ククルス・ドアンの島","復讐のレクイエム","サンダーボルト","MSV","THE BLUE DESTINY","U.C.ENGAGE","ポケットの中の戦争","ガンダム0083","機動戦士Zガンダム","ADVANCE OF Z","機動戦士ガンダムZZ","逆襲のシャア","逆襲のシャア(SIDE-F)","閃光のハサウェイ","機動戦士ガンダムF91","クロスボーン・ガンダム","ガンダムUC","アクロス・ザ・スカイ","機動戦士ガンダムNT","機動戦士Vガンダム","Gのレコンギスタ","∀ガンダム","Gガンダム","ガンダムW","Endless Waltz","機動新世紀ガンダムX","ガンダムSEED","SEED DESTINY","SEED FREEDOM","SEED ASTRAY","STARGAZER","ガンダムOO","ガンダムAGE","鉄血のオルフェンズ","ウルズハント","水星の魔女","ビルドファイターズ","トライ","ビルドダイバーズ","Re:RIZE","ビルドメタバース","GQuuuuuuX","N-EXTREME","ジージェネ","トライエイジ","サイコミュの使い手","その名はガンダム","ニュータイプの潜在能力","ベテランの技量","屈強なる鉄の華","巧みな連携戦術","黒い三連星","漆黒の戦士","赤のプライド","専用機の実力","奪われし機体","優れた格闘センス","優れた射撃センス"];
var link_kouka        = [0,[0,0,0.1,0,0,0],[0,0,0,0.1,0.1,0],[0,0,0,0.1,0.1,0],[0,0,0,0.1,0.1,0],[0,0,0,0.1,0.1,0],[0,0,0.1,0,0,0],[0,0,0,0.1,0.1,0],[0,0,0,0.1,0.1,0],[0,0,0,0.1,0.1,0],[0,0,0.1,0,0,0],[0,0,0,0,0,0.1],[0,0,0.1,0,0,0],[0,0,0,0.1,0.1,0],[0,0,0.1,0,0,0],[0,0,0,0,0,0.1],[0,0,0,0.1,0.1,0],[0,0,0,0,0,0.1],[0,0,0,0.1,0.1,0],[0,0,0.1,0,0,0],[0,0,0.1,0,0,0],[0,0,0.1,0,0,0],[0,0,0.1,0,0,0],[0,0,0.1,0,0,0],[0,0,0.1,0,0,0],[0,0,0,0,0,0.1]];
var link_kouka_cost   = ["null",1,1,1,1,1];
var link_kouka_move   = ["null",1,1,1,1,1];
var link_kouka_long   = ["null",1,1,1,1,1];
var link_kouka_middle = ["null",1,1,1,1,1];
var link_kouka_hp     = ["null",1,1,1,1,1];


const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

window.onload = start();

async function start() {
    await sleep(3000);
    loops();
}


async function loops(){
    while(fin != "true"){
        await sleep(100);
        //MS1
        MS1_dan = document.getElementById("MS1_dan").value;
        if(MS1_dan){
            console.log(MS1_dan);
        }else{
            MS1_dan = "null";
            document.getElementById("MS1g").src = "blank.png";
        }
        MS1_ban = document.getElementById("MS1_ban").value;
        if(MS1_ban){
            console.log(MS1_ban);
        }else{
            MS1_ban = "null";
            document.getElementById("MS1g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(MS1_dan != "null" & MS1_ban != "null"){
            console.log(MS1_dan + "-" + MS1_ban);
            document.getElementById("MS1g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + MS1_dan + "-" + MS1_ban + ".png";
            await sleep(10);
            joutai_MS1 = document.getElementById('MS1g');
            console.log(joutai_MS1);
            if (joutai_MS1.complete && joutai_MS1.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("MS1g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        MS1_ban = Number(MS1_ban);
        switch (MS1_dan){
            case "AB01":
                MS1_cost   =   cost_AB01[MS1_ban];
                MS1_move   =   move_AB01[MS1_ban];
                MS1_long   =   long_AB01[MS1_ban];
                MS1_middle = middle_AB01[MS1_ban];
                MS1_hp     =     hp_AB01[MS1_ban];
                MS1_link_a = link_a_AB01[MS1_ban];
                MS1_link_b = link_b_AB01[MS1_ban];
                break;
            case "AB02":
                MS1_cost   =   cost_AB02[MS1_ban];
                MS1_move   =   move_AB02[MS1_ban];
                MS1_long   =   long_AB02[MS1_ban];
                MS1_middle = middle_AB02[MS1_ban];
                MS1_hp     =     hp_AB02[MS1_ban];
                MS1_link_a = link_a_AB02[MS1_ban];
                MS1_link_b = link_b_AB02[MS1_ban];
                break;
            case "AB03":
                MS1_cost   =   cost_AB03[MS1_ban];
                MS1_move   =   move_AB03[MS1_ban];
                MS1_long   =   long_AB03[MS1_ban];
                MS1_middle = middle_AB03[MS1_ban];
                MS1_hp     =     hp_AB03[MS1_ban];
                MS1_link_a = link_a_AB03[MS1_ban];
                MS1_link_b = link_b_AB03[MS1_ban];
                break;
            case "AB04":
                MS1_cost   =   cost_AB04[MS1_ban];
                MS1_move   =   move_AB04[MS1_ban];
                MS1_long   =   long_AB04[MS1_ban];
                MS1_middle = middle_AB04[MS1_ban];
                MS1_hp     =     hp_AB04[MS1_ban];
                MS1_link_a = link_a_AB04[MS1_ban];
                MS1_link_b = link_b_AB04[MS1_ban];
                break;
            case "LX01":
                MS1_cost   =   cost_LX01[MS1_ban];
                MS1_move   =   move_LX01[MS1_ban];
                MS1_long   =   long_LX01[MS1_ban];
                MS1_middle = middle_LX01[MS1_ban];
                MS1_hp     =     hp_LX01[MS1_ban];
                MS1_link_a = link_a_LX01[MS1_ban];
                MS1_link_b = link_b_LX01[MS1_ban];
                break;
            case "LX02":
                MS1_cost   =   cost_LX02[MS1_ban];
                MS1_move   =   move_LX02[MS1_ban];
                MS1_long   =   long_LX02[MS1_ban];
                MS1_middle = middle_LX02[MS1_ban];
                MS1_hp     =     hp_LX02[MS1_ban];
                MS1_link_a = link_a_LX02[MS1_ban];
                MS1_link_b = link_b_LX02[MS1_ban];
                break;
            case "LX03":
                MS1_cost   =   cost_LX03[MS1_ban];
                MS1_move   =   move_LX03[MS1_ban];
                MS1_long   =   long_LX03[MS1_ban];
                MS1_middle = middle_LX03[MS1_ban];
                MS1_hp     =     hp_LX03[MS1_ban];
                MS1_link_a = link_a_LX03[MS1_ban];
                MS1_link_b = link_b_LX03[MS1_ban];
                break;
            case "LX04":
                MS1_cost   =   cost_LX04[MS1_ban];
                MS1_move   =   move_LX04[MS1_ban];
                MS1_long   =   long_LX04[MS1_ban];
                MS1_middle = middle_LX04[MS1_ban];
                MS1_hp     =     hp_LX04[MS1_ban];
                MS1_link_a = link_a_LX04[MS1_ban];
                MS1_link_b = link_b_LX04[MS1_ban];
                break;
            case "UT01":
                MS1_cost   =   cost_UT01[MS1_ban];
                MS1_move   =   move_UT01[MS1_ban];
                MS1_long   =   long_UT01[MS1_ban];
                MS1_middle = middle_UT01[MS1_ban];
                MS1_hp     =     hp_UT01[MS1_ban];
                MS1_link_a = link_a_UT01[MS1_ban];
                MS1_link_b = link_b_UT01[MS1_ban];
                break;
            case "UT02":
                MS1_cost   =   cost_UT02[MS1_ban];
                MS1_move   =   move_UT02[MS1_ban];
                MS1_long   =   long_UT02[MS1_ban];
                MS1_middle = middle_UT02[MS1_ban];
                MS1_hp     =     hp_UT02[MS1_ban];
                MS1_link_a = link_a_UT02[MS1_ban];
                MS1_link_b = link_b_UT02[MS1_ban];
                break;
            case "UT03":
                MS1_cost   =   cost_UT03[MS1_ban];
                MS1_move   =   move_UT03[MS1_ban];
                MS1_long   =   long_UT03[MS1_ban];
                MS1_middle = middle_UT03[MS1_ban];
                MS1_hp     =     hp_UT03[MS1_ban];
                MS1_link_a = link_a_UT03[MS1_ban];
                MS1_link_b = link_b_UT03[MS1_ban];
                break;
            case "UT04":
                MS1_cost   =   cost_UT04[MS1_ban];
                MS1_move   =   move_UT04[MS1_ban];
                MS1_long   =   long_UT04[MS1_ban];
                MS1_middle = middle_UT04[MS1_ban];
                MS1_hp     =     hp_UT04[MS1_ban];
                MS1_link_a = link_a_UT04[MS1_ban];
                MS1_link_b = link_b_UT04[MS1_ban];
                break;
            case "UT05":
                MS1_cost   =   cost_UT05[MS1_ban];
                MS1_move   =   move_UT05[MS1_ban];
                MS1_long   =   long_UT05[MS1_ban];
                MS1_middle = middle_UT05[MS1_ban];
                MS1_hp     =     hp_UT05[MS1_ban];
                MS1_link_a = link_a_UT05[MS1_ban];
                MS1_link_b = link_b_UT05[MS1_ban];
                break;
            case "UT06":
                MS1_cost   =   cost_UT06[MS1_ban];
                MS1_move   =   move_UT06[MS1_ban];
                MS1_long   =   long_UT06[MS1_ban];
                MS1_middle = middle_UT06[MS1_ban];
                MS1_hp     =     hp_UT06[MS1_ban];
                MS1_link_a = link_a_UT06[MS1_ban];
                MS1_link_b = link_b_UT06[MS1_ban];
                break;
            case "FQ01":
                MS1_cost   =   cost_FQ01[MS1_ban];
                MS1_move   =   move_FQ01[MS1_ban];
                MS1_long   =   long_FQ01[MS1_ban];
                MS1_middle = middle_FQ01[MS1_ban];
                MS1_hp     =     hp_FQ01[MS1_ban];
                MS1_link_a = link_a_FQ01[MS1_ban];
                MS1_link_b = link_b_FQ01[MS1_ban];
                break;
            case "FQ02":
                MS1_cost   =   cost_FQ02[MS1_ban];
                MS1_move   =   move_FQ02[MS1_ban];
                MS1_long   =   long_FQ02[MS1_ban];
                MS1_middle = middle_FQ02[MS1_ban];
                MS1_hp     =     hp_FQ02[MS1_ban];
                MS1_link_a = link_a_FQ02[MS1_ban];
                MS1_link_b = link_b_FQ02[MS1_ban];
                break;
            case "FQ03":
                MS1_cost   =   cost_FQ03[MS1_ban];
                MS1_move   =   move_FQ03[MS1_ban];
                MS1_long   =   long_FQ03[MS1_ban];
                MS1_middle = middle_FQ03[MS1_ban];
                MS1_hp     =     hp_FQ03[MS1_ban];
                MS1_link_a = link_a_FQ03[MS1_ban];
                MS1_link_b = link_b_FQ03[MS1_ban];
                break;
            case "FQ04":
                MS1_cost   =   cost_FQ04[MS1_ban];
                MS1_move   =   move_FQ04[MS1_ban];
                MS1_long   =   long_FQ04[MS1_ban];
                MS1_middle = middle_FQ04[MS1_ban];
                MS1_hp     =     hp_FQ04[MS1_ban];
                MS1_link_a = link_a_FQ04[MS1_ban];
                MS1_link_b = link_b_FQ04[MS1_ban];
                break;
            case "FQ05":
                MS1_cost   =   cost_FQ05[MS1_ban];
                MS1_move   =   move_FQ05[MS1_ban];
                MS1_long   =   long_FQ05[MS1_ban];
                MS1_middle = middle_FQ05[MS1_ban];
                MS1_hp     =     hp_FQ05[MS1_ban];
                MS1_link_a = link_a_FQ05[MS1_ban];
                MS1_link_b = link_b_FQ05[MS1_ban];
                break;
            case "FQ06":
                MS1_cost   =   cost_FQ06[MS1_ban];
                MS1_move   =   move_FQ06[MS1_ban];
                MS1_long   =   long_FQ06[MS1_ban];
                MS1_middle = middle_FQ06[MS1_ban];
                MS1_hp     =     hp_FQ06[MS1_ban];
                MS1_link_a = link_a_FQ06[MS1_ban];
                MS1_link_b = link_b_FQ06[MS1_ban];
                break;
            case "VE01":
                MS1_cost   =   cost_VE01[MS1_ban];
                MS1_move   =   move_VE01[MS1_ban];
                MS1_long   =   long_VE01[MS1_ban];
                MS1_middle = middle_VE01[MS1_ban];
                MS1_hp     =     hp_VE01[MS1_ban];
                MS1_link_a = link_a_VE01[MS1_ban];
                MS1_link_b = link_b_VE01[MS1_ban];
                break;
            case "AR01":
                MS1_cost   =   cost_AR01[MS1_ban];
                MS1_moVEB   =   moVEB_AR01[MS1_ban];
                MS1_long   =   long_AR01[MS1_ban];
                MS1_middle = middle_AR01[MS1_ban];
                MS1_hp     =     hp_AR01[MS1_ban];
                MS1_link_a = link_a_AR01[MS1_ban];
                MS1_link_b = link_b_AR01[MS1_ban];
                break;
            case "AR02":
                MS1_cost   =   cost_AR02[MS1_ban];
                MS1_moVEB   =   moVEB_AR02[MS1_ban];
                MS1_long   =   long_AR02[MS1_ban];
                MS1_middle = middle_AR02[MS1_ban];
                MS1_hp     =     hp_AR02[MS1_ban];
                MS1_link_a = link_a_AR02[MS1_ban];
                MS1_link_b = link_b_AR02[MS1_ban];
                break;
            case "AR03":
                MS1_cost   =   cost_AR03[MS1_ban];
                MS1_moVEB   =   moVEB_AR03[MS1_ban];
                MS1_long   =   long_AR03[MS1_ban];
                MS1_middle = middle_AR03[MS1_ban];
                MS1_hp     =     hp_AR03[MS1_ban];
                MS1_link_a = link_a_AR03[MS1_ban];
                MS1_link_b = link_b_AR03[MS1_ban];
                break;
            case "AR04":
                MS1_cost   =   cost_AR04[MS1_ban];
                MS1_moVEB   =   moVEB_AR04[MS1_ban];
                MS1_long   =   long_AR04[MS1_ban];
                MS1_middle = middle_AR04[MS1_ban];
                MS1_hp     =     hp_AR04[MS1_ban];
                MS1_link_a = link_a_AR04[MS1_ban];
                MS1_link_b = link_b_AR04[MS1_ban];
                break;
            case "LXR01":
                MS1_cost   =   cost_LXR01[MS1_ban];
                MS1_moVEB   =   moVEB_LXR01[MS1_ban];
                MS1_long   =   long_LXR01[MS1_ban];
                MS1_middle = middle_LXR01[MS1_ban];
                MS1_hp     =     hp_LXR01[MS1_ban];
                MS1_link_a = link_a_LXR01[MS1_ban];
                MS1_link_b = link_b_LXR01[MS1_ban];
                break;
            case "LXR02":
                MS1_cost   =   cost_LXR02[MS1_ban];
                MS1_moVEB   =   moVEB_LXR02[MS1_ban];
                MS1_long   =   long_LXR02[MS1_ban];
                MS1_middle = middle_LXR02[MS1_ban];
                MS1_hp     =     hp_LXR02[MS1_ban];
                MS1_link_a = link_a_LXR02[MS1_ban];
                MS1_link_b = link_b_LXR02[MS1_ban];
                break;
            case "LXR03":
                MS1_cost   =   cost_LXR03[MS1_ban];
                MS1_moVEB   =   moVEB_LXR03[MS1_ban];
                MS1_long   =   long_LXR03[MS1_ban];
                MS1_middle = middle_LXR03[MS1_ban];
                MS1_hp     =     hp_LXR03[MS1_ban];
                MS1_link_a = link_a_LXR03[MS1_ban];
                MS1_link_b = link_b_LXR03[MS1_ban];
                break;
            case "LXR04":
                MS1_cost   =   cost_LXR04[MS1_ban];
                MS1_moVEB   =   moVEB_LXR04[MS1_ban];
                MS1_long   =   long_LXR04[MS1_ban];
                MS1_middle = middle_LXR04[MS1_ban];
                MS1_hp     =     hp_LXR04[MS1_ban];
                MS1_link_a = link_a_LXR04[MS1_ban];
                MS1_link_b = link_b_LXR04[MS1_ban];
                break;
            case "UTB01":
                MS1_cost   =   cost_UTB01[MS1_ban];
                MS1_moVEB   =   moVEB_UTB01[MS1_ban];
                MS1_long   =   long_UTB01[MS1_ban];
                MS1_middle = middle_UTB01[MS1_ban];
                MS1_hp     =     hp_UTB01[MS1_ban];
                MS1_link_a = link_a_UTB01[MS1_ban];
                MS1_link_b = link_b_UTB01[MS1_ban];
                break;
            case "UTB02":
                MS1_cost   =   cost_UTB02[MS1_ban];
                MS1_moVEB   =   moVEB_UTB02[MS1_ban];
                MS1_long   =   long_UTB02[MS1_ban];
                MS1_middle = middle_UTB02[MS1_ban];
                MS1_hp     =     hp_UTB02[MS1_ban];
                MS1_link_a = link_a_UTB02[MS1_ban];
                MS1_link_b = link_b_UTB02[MS1_ban];
                break;
            case "UTB03":
                MS1_cost   =   cost_UTB03[MS1_ban];
                MS1_moVEB   =   moVEB_UTB03[MS1_ban];
                MS1_long   =   long_UTB03[MS1_ban];
                MS1_middle = middle_UTB03[MS1_ban];
                MS1_hp     =     hp_UTB03[MS1_ban];
                MS1_link_a = link_a_UTB03[MS1_ban];
                MS1_link_b = link_b_UTB03[MS1_ban];
                break;
            case "UTB04":
                MS1_cost   =   cost_UTB04[MS1_ban];
                MS1_moVEB   =   moVEB_UTB04[MS1_ban];
                MS1_long   =   long_UTB04[MS1_ban];
                MS1_middle = middle_UTB04[MS1_ban];
                MS1_hp     =     hp_UTB04[MS1_ban];
                MS1_link_a = link_a_UTB04[MS1_ban];
                MS1_link_b = link_b_UTB04[MS1_ban];
                break;
            case "UTB05":
                MS1_cost   =   cost_UTB05[MS1_ban];
                MS1_moVEB   =   moVEB_UTB05[MS1_ban];
                MS1_long   =   long_UTB05[MS1_ban];
                MS1_middle = middle_UTB05[MS1_ban];
                MS1_hp     =     hp_UTB05[MS1_ban];
                MS1_link_a = link_a_UTB05[MS1_ban];
                MS1_link_b = link_b_UTB05[MS1_ban];
                break;
            case "UTB06":
                MS1_cost   =   cost_UTB06[MS1_ban];
                MS1_moVEB   =   moVEB_UTB06[MS1_ban];
                MS1_long   =   long_UTB06[MS1_ban];
                MS1_middle = middle_UTB06[MS1_ban];
                MS1_hp     =     hp_UTB06[MS1_ban];
                MS1_link_a = link_a_UTB06[MS1_ban];
                MS1_link_b = link_b_UTB06[MS1_ban];
                break;
            case "FQB01":
                MS1_cost   =   cost_FQB01[MS1_ban];
                MS1_moVEB   =   moVEB_FQB01[MS1_ban];
                MS1_long   =   long_FQB01[MS1_ban];
                MS1_middle = middle_FQB01[MS1_ban];
                MS1_hp     =     hp_FQB01[MS1_ban];
                MS1_link_a = link_a_FQB01[MS1_ban];
                MS1_link_b = link_b_FQB01[MS1_ban];
                break;
            case "FQB02":
                MS1_cost   =   cost_FQB02[MS1_ban];
                MS1_moVEB   =   moVEB_FQB02[MS1_ban];
                MS1_long   =   long_FQB02[MS1_ban];
                MS1_middle = middle_FQB02[MS1_ban];
                MS1_hp     =     hp_FQB02[MS1_ban];
                MS1_link_a = link_a_FQB02[MS1_ban];
                MS1_link_b = link_b_FQB02[MS1_ban];
                break;
            case "FQB03":
                MS1_cost   =   cost_FQB03[MS1_ban];
                MS1_moVEB   =   moVEB_FQB03[MS1_ban];
                MS1_long   =   long_FQB03[MS1_ban];
                MS1_middle = middle_FQB03[MS1_ban];
                MS1_hp     =     hp_FQB03[MS1_ban];
                MS1_link_a = link_a_FQB03[MS1_ban];
                MS1_link_b = link_b_FQB03[MS1_ban];
                break;
            case "FQB04":
                MS1_cost   =   cost_FQB04[MS1_ban];
                MS1_moVEB   =   moVEB_FQB04[MS1_ban];
                MS1_long   =   long_FQB04[MS1_ban];
                MS1_middle = middle_FQB04[MS1_ban];
                MS1_hp     =     hp_FQB04[MS1_ban];
                MS1_link_a = link_a_FQB04[MS1_ban];
                MS1_link_b = link_b_FQB04[MS1_ban];
                break;
            case "FQB05":
                MS1_cost   =   cost_FQB05[MS1_ban];
                MS1_moVEB   =   moVEB_FQB05[MS1_ban];
                MS1_long   =   long_FQB05[MS1_ban];
                MS1_middle = middle_FQB05[MS1_ban];
                MS1_hp     =     hp_FQB05[MS1_ban];
                MS1_link_a = link_a_FQB05[MS1_ban];
                MS1_link_b = link_b_FQB05[MS1_ban];
                break;
            case "FQB06":
                MS1_cost   =   cost_FQB06[MS1_ban];
                MS1_moVEB   =   moVEB_FQB06[MS1_ban];
                MS1_long   =   long_FQB06[MS1_ban];
                MS1_middle = middle_FQB06[MS1_ban];
                MS1_hp     =     hp_FQB06[MS1_ban];
                MS1_link_a = link_a_FQB06[MS1_ban];
                MS1_link_b = link_b_FQB06[MS1_ban];
                break;
            case "VEB01":
                MS1_cost   =   cost_VEB01[MS1_ban];
                MS1_moVEB   =   moVEB_VEB01[MS1_ban];
                MS1_long   =   long_VEB01[MS1_ban];
                MS1_middle = middle_VEB01[MS1_ban];
                MS1_hp     =     hp_VEB01[MS1_ban];
                MS1_link_a = link_a_VEB01[MS1_ban];
                MS1_link_b = link_b_VEB01[MS1_ban];
                break;
            case "BP01":
                MS1_cost   =   cost_BP01[MS1_ban];
                MS1_moVEB   =   moVEB_BP01[MS1_ban];
                MS1_long   =   long_BP01[MS1_ban];
                MS1_middle = middle_BP01[MS1_ban];
                MS1_hp     =     hp_BP01[MS1_ban];
                MS1_link_a = link_a_BP01[MS1_ban];
                MS1_link_b = link_b_BP01[MS1_ban];
                break;
            case "BP02":
                MS1_cost   =   cost_BP02[MS1_ban];
                MS1_moVEB   = moVEB_BP02[MS1_ban];
                MS1_long   =   long_BP02[MS1_ban];
                MS1_middle = middle_BP02[MS1_ban];
                MS1_hp     =     hp_BP02[MS1_ban];
                MS1_link_a = link_a_BP02[MS1_ban];
                MS1_link_b = link_b_BP02[MS1_ban];
                break;
            case "BP03":
                MS1_cost   =   cost_BP03[MS1_ban];
                MS1_moVEB   = moVEB_BP03[MS1_ban];
                MS1_long   =   long_BP03[MS1_ban];
                MS1_middle = middle_BP03[MS1_ban];
                MS1_hp     =     hp_BP03[MS1_ban];
                MS1_link_a = link_a_BP03[MS1_ban];
                MS1_link_b = link_b_BP03[MS1_ban];
                break;
            case "BP04":
                MS1_cost   =   cost_BP04[MS1_ban];
                MS1_moVEB   = moVEB_BP04[MS1_ban];
                MS1_long   =   long_BP04[MS1_ban];
                MS1_middle = middle_BP04[MS1_ban];
                MS1_hp     =     hp_BP04[MS1_ban];
                MS1_link_a = link_a_BP04[MS1_ban];
                MS1_link_b = link_b_BP04[MS1_ban];
                break;
            case "BP05":
                MS1_cost   =   cost_BP05[MS1_ban];
                MS1_moVEB   = moVEB_BP05[MS1_ban];
                MS1_long   =   long_BP05[MS1_ban];
                MS1_middle = middle_BP05[MS1_ban];
                MS1_hp     =     hp_BP05[MS1_ban];
                MS1_link_a = link_a_BP05[MS1_ban];
                MS1_link_b = link_b_BP05[MS1_ban];
                break;
            case "BP06":
                MS1_cost   =   cost_BP06[MS1_ban];
                MS1_moVEB   = moVEB_BP06[MS1_ban];
                MS1_long   =   long_BP06[MS1_ban];
                MS1_middle = middle_BP06[MS1_ban];
                MS1_hp     =     hp_BP06[MS1_ban];
                MS1_link_a = link_a_BP06[MS1_ban];
                MS1_link_b = link_b_BP06[MS1_ban];
                break;
            case "PR":
                MS1_cost   =   cost_PR[MS1_ban];
                MS1_moVEB   =   moVEB_PR[MS1_ban];
                MS1_long   =   long_PR[MS1_ban];
                MS1_middle = middle_PR[MS1_ban];
                MS1_hp     =     hp_PR[MS1_ban];
                MS1_link_a = link_a_PR[MS1_ban];
                MS1_link_b = link_b_PR[MS1_ban];
                break;
            case "TEST":
                MS1_cost   =   cost_TEST[MS1_ban];
                MS1_moVEB   = moVEB_TEST[MS1_ban];
                MS1_long   =   long_TEST[MS1_ban];
                MS1_middle = middle_TEST[MS1_ban];
                MS1_hp     =     hp_TEST[MS1_ban];
                MS1_link_a = link_a_TEST[MS1_ban];
                MS1_link_b = link_b_TEST[MS1_ban];
                break;
            case "TEST-A":
                MS1_cost   =   cost_TEST-a[MS1_ban];
                MS1_moVEB   = moVEB_TEST-a[MS1_ban];
                MS1_long   =   long_TEST-a[MS1_ban];
                MS1_middle = middle_TEST-a[MS1_ban];
                MS1_hp     =     hp_TEST-a[MS1_ban];
                MS1_link_a = link_a_TEST-a[MS1_ban];
                MS1_link_b = link_b_TEST-a[MS1_ban];
                break;
            case "ST01":
                MS1_cost   =   cost_ST01[MS1_ban];
                MS1_moVEB   = moVEB_ST01[MS1_ban];
                MS1_long   =   long_ST01[MS1_ban];
                MS1_middle = middle_ST01[MS1_ban];
                MS1_hp     =     hp_ST01[MS1_ban];
                MS1_link_a = link_a_ST01[MS1_ban];
                MS1_link_b = link_b_ST01[MS1_ban];
                break;
            case "ST02":
                MS1_cost   =   cost_ST02[MS1_ban];
                MS1_moVEB   = moVEB_ST02[MS1_ban];
                MS1_long   =   long_ST02[MS1_ban];
                MS1_middle = middle_ST02[MS1_ban];
                MS1_hp     =     hp_ST02[MS1_ban];
                MS1_link_a = link_a_ST02[MS1_ban];
                MS1_link_b = link_b_ST02[MS1_ban];
                break;
            case "ST03":
                MS1_cost   =   cost_ST03[MS1_ban];
                MS1_moVEB   = moVEB_ST03[MS1_ban];
                MS1_long   =   long_ST03[MS1_ban];
                MS1_middle = middle_ST03[MS1_ban];
                MS1_hp     =     hp_ST03[MS1_ban];
                MS1_link_a = link_a_ST03[MS1_ban];
                MS1_link_b = link_b_ST03[MS1_ban];
                break;
            default:
                MS1_cost   = "-";
                MS1_move   = "-";
                MS1_long   = "-";
                MS1_middle = "-";
                MS1_hp     = "-";
                MS1_link_a = "-";
                MS1_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!MS1_cost){
                MS1_cost = "-";
            }
            if(!MS1_move){
                MS1_move = "-";
            }
            if(!MS1_long){
                MS1_long = "-";
            }
            if(!MS1_middle){
                MS1_middle = "-";
            }
            if(!MS1_hp){
                MS1_hp = "-";
            }
            if(!MS1_link_a){
                MS1_link_a = "-";
            }
            if(!MS1_link_b){
                MS1_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_MS1").textContent = MS1_cost;
        document.getElementById("move_MS1").textContent = MS1_move;
        document.getElementById("long_MS1").textContent = MS1_long;
        document.getElementById("middle_MS1").textContent = MS1_middle;
        document.getElementById("HP_MS1").textContent = MS1_hp;
        document.getElementById("link_MSa1").textContent = MS1_link_a;
        document.getElementById("link_MSb1").textContent = MS1_link_b;
        }
        //MS2
        MS2_dan = document.getElementById("MS2_dan").value;
        if(MS2_dan){
            console.log(MS2_dan);
        }else{
            MS2_dan = "null";
            document.getElementById("MS2g").src = "blank.png";
        }
        MS2_ban = document.getElementById("MS2_ban").value;
        if(MS2_ban){
            console.log(MS2_ban);
        }else{
            MS2_ban = "null";
            document.getElementById("MS2g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(MS2_dan != "null" & MS2_ban != "null"){
            console.log(MS2_dan + "-" + MS2_ban);
            document.getElementById("MS2g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + MS2_dan + "-" + MS2_ban + ".png";
            await sleep(10);
            joutai_MS2 = document.getElementById('MS2g');
            console.log(joutai_MS2);
            if (joutai_MS2.complete && joutai_MS2.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("MS2g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        MS2_ban = Number(MS2_ban);
        switch (MS2_dan){
            case "AB01":
                MS2_cost   =   cost_AB01[MS2_ban];
                MS2_move   =   move_AB01[MS2_ban];
                MS2_long   =   long_AB01[MS2_ban];
                MS2_middle = middle_AB01[MS2_ban];
                MS2_hp     =     hp_AB01[MS2_ban];
                MS2_link_a = link_a_AB01[MS2_ban];
                MS2_link_b = link_b_AB01[MS2_ban];
                break;
            case "AB02":
                MS2_cost   =   cost_AB02[MS2_ban];
                MS2_move   =   move_AB02[MS2_ban];
                MS2_long   =   long_AB02[MS2_ban];
                MS2_middle = middle_AB02[MS2_ban];
                MS2_hp     =     hp_AB02[MS2_ban];
                MS2_link_a = link_a_AB02[MS2_ban];
                MS2_link_b = link_b_AB02[MS2_ban];
                break;
            case "AB03":
                MS2_cost   =   cost_AB03[MS2_ban];
                MS2_move   =   move_AB03[MS2_ban];
                MS2_long   =   long_AB03[MS2_ban];
                MS2_middle = middle_AB03[MS2_ban];
                MS2_hp     =     hp_AB03[MS2_ban];
                MS2_link_a = link_a_AB03[MS2_ban];
                MS2_link_b = link_b_AB03[MS2_ban];
                break;
            case "AB04":
                MS2_cost   =   cost_AB04[MS2_ban];
                MS2_move   =   move_AB04[MS2_ban];
                MS2_long   =   long_AB04[MS2_ban];
                MS2_middle = middle_AB04[MS2_ban];
                MS2_hp     =     hp_AB04[MS2_ban];
                MS2_link_a = link_a_AB04[MS2_ban];
                MS2_link_b = link_b_AB04[MS2_ban];
                break;
            case "LX01":
                MS2_cost   =   cost_LX01[MS2_ban];
                MS2_move   =   move_LX01[MS2_ban];
                MS2_long   =   long_LX01[MS2_ban];
                MS2_middle = middle_LX01[MS2_ban];
                MS2_hp     =     hp_LX01[MS2_ban];
                MS2_link_a = link_a_LX01[MS2_ban];
                MS2_link_b = link_b_LX01[MS2_ban];
                break;
            case "LX02":
                MS2_cost   =   cost_LX02[MS2_ban];
                MS2_move   =   move_LX02[MS2_ban];
                MS2_long   =   long_LX02[MS2_ban];
                MS2_middle = middle_LX02[MS2_ban];
                MS2_hp     =     hp_LX02[MS2_ban];
                MS2_link_a = link_a_LX02[MS2_ban];
                MS2_link_b = link_b_LX02[MS2_ban];
                break;
            case "LX03":
                MS2_cost   =   cost_LX03[MS2_ban];
                MS2_move   =   move_LX03[MS2_ban];
                MS2_long   =   long_LX03[MS2_ban];
                MS2_middle = middle_LX03[MS2_ban];
                MS2_hp     =     hp_LX03[MS2_ban];
                MS2_link_a = link_a_LX03[MS2_ban];
                MS2_link_b = link_b_LX03[MS2_ban];
                break;
            case "LX04":
                MS2_cost   =   cost_LX04[MS2_ban];
                MS2_move   =   move_LX04[MS2_ban];
                MS2_long   =   long_LX04[MS2_ban];
                MS2_middle = middle_LX04[MS2_ban];
                MS2_hp     =     hp_LX04[MS2_ban];
                MS2_link_a = link_a_LX04[MS2_ban];
                MS2_link_b = link_b_LX04[MS2_ban];
                break;
            case "UT01":
                MS2_cost   =   cost_UT01[MS2_ban];
                MS2_move   =   move_UT01[MS2_ban];
                MS2_long   =   long_UT01[MS2_ban];
                MS2_middle = middle_UT01[MS2_ban];
                MS2_hp     =     hp_UT01[MS2_ban];
                MS2_link_a = link_a_UT01[MS2_ban];
                MS2_link_b = link_b_UT01[MS2_ban];
                break;
            case "UT02":
                MS2_cost   =   cost_UT02[MS2_ban];
                MS2_move   =   move_UT02[MS2_ban];
                MS2_long   =   long_UT02[MS2_ban];
                MS2_middle = middle_UT02[MS2_ban];
                MS2_hp     =     hp_UT02[MS2_ban];
                MS2_link_a = link_a_UT02[MS2_ban];
                MS2_link_b = link_b_UT02[MS2_ban];
                break;
            case "UT03":
                MS2_cost   =   cost_UT03[MS2_ban];
                MS2_move   =   move_UT03[MS2_ban];
                MS2_long   =   long_UT03[MS2_ban];
                MS2_middle = middle_UT03[MS2_ban];
                MS2_hp     =     hp_UT03[MS2_ban];
                MS2_link_a = link_a_UT03[MS2_ban];
                MS2_link_b = link_b_UT03[MS2_ban];
                break;
            case "UT04":
                MS2_cost   =   cost_UT04[MS2_ban];
                MS2_move   =   move_UT04[MS2_ban];
                MS2_long   =   long_UT04[MS2_ban];
                MS2_middle = middle_UT04[MS2_ban];
                MS2_hp     =     hp_UT04[MS2_ban];
                MS2_link_a = link_a_UT04[MS2_ban];
                MS2_link_b = link_b_UT04[MS2_ban];
                break;
            case "UT05":
                MS2_cost   =   cost_UT05[MS2_ban];
                MS2_move   =   move_UT05[MS2_ban];
                MS2_long   =   long_UT05[MS2_ban];
                MS2_middle = middle_UT05[MS2_ban];
                MS2_hp     =     hp_UT05[MS2_ban];
                MS2_link_a = link_a_UT05[MS2_ban];
                MS2_link_b = link_b_UT05[MS2_ban];
                break;
            case "UT06":
                MS2_cost   =   cost_UT06[MS2_ban];
                MS2_move   =   move_UT06[MS2_ban];
                MS2_long   =   long_UT06[MS2_ban];
                MS2_middle = middle_UT06[MS2_ban];
                MS2_hp     =     hp_UT06[MS2_ban];
                MS2_link_a = link_a_UT06[MS2_ban];
                MS2_link_b = link_b_UT06[MS2_ban];
                break;
            case "FQ01":
                MS2_cost   =   cost_FQ01[MS2_ban];
                MS2_move   =   move_FQ01[MS2_ban];
                MS2_long   =   long_FQ01[MS2_ban];
                MS2_middle = middle_FQ01[MS2_ban];
                MS2_hp     =     hp_FQ01[MS2_ban];
                MS2_link_a = link_a_FQ01[MS2_ban];
                MS2_link_b = link_b_FQ01[MS2_ban];
                break;
            case "FQ02":
                MS2_cost   =   cost_FQ02[MS2_ban];
                MS2_move   =   move_FQ02[MS2_ban];
                MS2_long   =   long_FQ02[MS2_ban];
                MS2_middle = middle_FQ02[MS2_ban];
                MS2_hp     =     hp_FQ02[MS2_ban];
                MS2_link_a = link_a_FQ02[MS2_ban];
                MS2_link_b = link_b_FQ02[MS2_ban];
                break;
            case "FQ03":
                MS2_cost   =   cost_FQ03[MS2_ban];
                MS2_move   =   move_FQ03[MS2_ban];
                MS2_long   =   long_FQ03[MS2_ban];
                MS2_middle = middle_FQ03[MS2_ban];
                MS2_hp     =     hp_FQ03[MS2_ban];
                MS2_link_a = link_a_FQ03[MS2_ban];
                MS2_link_b = link_b_FQ03[MS2_ban];
                break;
            case "FQ04":
                MS2_cost   =   cost_FQ04[MS2_ban];
                MS2_move   =   move_FQ04[MS2_ban];
                MS2_long   =   long_FQ04[MS2_ban];
                MS2_middle = middle_FQ04[MS2_ban];
                MS2_hp     =     hp_FQ04[MS2_ban];
                MS2_link_a = link_a_FQ04[MS2_ban];
                MS2_link_b = link_b_FQ04[MS2_ban];
                break;
            case "FQ05":
                MS2_cost   =   cost_FQ05[MS2_ban];
                MS2_move   =   move_FQ05[MS2_ban];
                MS2_long   =   long_FQ05[MS2_ban];
                MS2_middle = middle_FQ05[MS2_ban];
                MS2_hp     =     hp_FQ05[MS2_ban];
                MS2_link_a = link_a_FQ05[MS2_ban];
                MS2_link_b = link_b_FQ05[MS2_ban];
                break;
            case "FQ06":
                MS2_cost   =   cost_FQ06[MS2_ban];
                MS2_move   =   move_FQ06[MS2_ban];
                MS2_long   =   long_FQ06[MS2_ban];
                MS2_middle = middle_FQ06[MS2_ban];
                MS2_hp     =     hp_FQ06[MS2_ban];
                MS2_link_a = link_a_FQ06[MS2_ban];
                MS2_link_b = link_b_FQ06[MS2_ban];
                break;
            case "VE01":
                MS2_cost   =   cost_VE01[MS2_ban];
                MS2_move   =   move_VE01[MS2_ban];
                MS2_long   =   long_VE01[MS2_ban];
                MS2_middle = middle_VE01[MS2_ban];
                MS2_hp     =     hp_VE01[MS2_ban];
                MS2_link_a = link_a_VE01[MS2_ban];
                MS2_link_b = link_b_VE01[MS2_ban];
                break;
            case "AR01":
                MS2_cost   =   cost_AR01[MS2_ban];
                MS2_moVEB   =   moVEB_AR01[MS2_ban];
                MS2_long   =   long_AR01[MS2_ban];
                MS2_middle = middle_AR01[MS2_ban];
                MS2_hp     =     hp_AR01[MS2_ban];
                MS2_link_a = link_a_AR01[MS2_ban];
                MS2_link_b = link_b_AR01[MS2_ban];
                break;
            case "AR02":
                MS2_cost   =   cost_AR02[MS2_ban];
                MS2_moVEB   =   moVEB_AR02[MS2_ban];
                MS2_long   =   long_AR02[MS2_ban];
                MS2_middle = middle_AR02[MS2_ban];
                MS2_hp     =     hp_AR02[MS2_ban];
                MS2_link_a = link_a_AR02[MS2_ban];
                MS2_link_b = link_b_AR02[MS2_ban];
                break;
            case "AR03":
                MS2_cost   =   cost_AR03[MS2_ban];
                MS2_moVEB   =   moVEB_AR03[MS2_ban];
                MS2_long   =   long_AR03[MS2_ban];
                MS2_middle = middle_AR03[MS2_ban];
                MS2_hp     =     hp_AR03[MS2_ban];
                MS2_link_a = link_a_AR03[MS2_ban];
                MS2_link_b = link_b_AR03[MS2_ban];
                break;
            case "AR04":
                MS2_cost   =   cost_AR04[MS2_ban];
                MS2_moVEB   =   moVEB_AR04[MS2_ban];
                MS2_long   =   long_AR04[MS2_ban];
                MS2_middle = middle_AR04[MS2_ban];
                MS2_hp     =     hp_AR04[MS2_ban];
                MS2_link_a = link_a_AR04[MS2_ban];
                MS2_link_b = link_b_AR04[MS2_ban];
                break;
            case "LXR01":
                MS2_cost   =   cost_LXR01[MS2_ban];
                MS2_moVEB   =   moVEB_LXR01[MS2_ban];
                MS2_long   =   long_LXR01[MS2_ban];
                MS2_middle = middle_LXR01[MS2_ban];
                MS2_hp     =     hp_LXR01[MS2_ban];
                MS2_link_a = link_a_LXR01[MS2_ban];
                MS2_link_b = link_b_LXR01[MS2_ban];
                break;
            case "LXR02":
                MS2_cost   =   cost_LXR02[MS2_ban];
                MS2_moVEB   =   moVEB_LXR02[MS2_ban];
                MS2_long   =   long_LXR02[MS2_ban];
                MS2_middle = middle_LXR02[MS2_ban];
                MS2_hp     =     hp_LXR02[MS2_ban];
                MS2_link_a = link_a_LXR02[MS2_ban];
                MS2_link_b = link_b_LXR02[MS2_ban];
                break;
            case "LXR03":
                MS2_cost   =   cost_LXR03[MS2_ban];
                MS2_moVEB   =   moVEB_LXR03[MS2_ban];
                MS2_long   =   long_LXR03[MS2_ban];
                MS2_middle = middle_LXR03[MS2_ban];
                MS2_hp     =     hp_LXR03[MS2_ban];
                MS2_link_a = link_a_LXR03[MS2_ban];
                MS2_link_b = link_b_LXR03[MS2_ban];
                break;
            case "LXR04":
                MS2_cost   =   cost_LXR04[MS2_ban];
                MS2_moVEB   =   moVEB_LXR04[MS2_ban];
                MS2_long   =   long_LXR04[MS2_ban];
                MS2_middle = middle_LXR04[MS2_ban];
                MS2_hp     =     hp_LXR04[MS2_ban];
                MS2_link_a = link_a_LXR04[MS2_ban];
                MS2_link_b = link_b_LXR04[MS2_ban];
                break;
            case "UTB01":
                MS2_cost   =   cost_UTB01[MS2_ban];
                MS2_moVEB   =   moVEB_UTB01[MS2_ban];
                MS2_long   =   long_UTB01[MS2_ban];
                MS2_middle = middle_UTB01[MS2_ban];
                MS2_hp     =     hp_UTB01[MS2_ban];
                MS2_link_a = link_a_UTB01[MS2_ban];
                MS2_link_b = link_b_UTB01[MS2_ban];
                break;
            case "UTB02":
                MS2_cost   =   cost_UTB02[MS2_ban];
                MS2_moVEB   =   moVEB_UTB02[MS2_ban];
                MS2_long   =   long_UTB02[MS2_ban];
                MS2_middle = middle_UTB02[MS2_ban];
                MS2_hp     =     hp_UTB02[MS2_ban];
                MS2_link_a = link_a_UTB02[MS2_ban];
                MS2_link_b = link_b_UTB02[MS2_ban];
                break;
            case "UTB03":
                MS2_cost   =   cost_UTB03[MS2_ban];
                MS2_moVEB   =   moVEB_UTB03[MS2_ban];
                MS2_long   =   long_UTB03[MS2_ban];
                MS2_middle = middle_UTB03[MS2_ban];
                MS2_hp     =     hp_UTB03[MS2_ban];
                MS2_link_a = link_a_UTB03[MS2_ban];
                MS2_link_b = link_b_UTB03[MS2_ban];
                break;
            case "UTB04":
                MS2_cost   =   cost_UTB04[MS2_ban];
                MS2_moVEB   =   moVEB_UTB04[MS2_ban];
                MS2_long   =   long_UTB04[MS2_ban];
                MS2_middle = middle_UTB04[MS2_ban];
                MS2_hp     =     hp_UTB04[MS2_ban];
                MS2_link_a = link_a_UTB04[MS2_ban];
                MS2_link_b = link_b_UTB04[MS2_ban];
                break;
            case "UTB05":
                MS2_cost   =   cost_UTB05[MS2_ban];
                MS2_moVEB   =   moVEB_UTB05[MS2_ban];
                MS2_long   =   long_UTB05[MS2_ban];
                MS2_middle = middle_UTB05[MS2_ban];
                MS2_hp     =     hp_UTB05[MS2_ban];
                MS2_link_a = link_a_UTB05[MS2_ban];
                MS2_link_b = link_b_UTB05[MS2_ban];
                break;
            case "UTB06":
                MS2_cost   =   cost_UTB06[MS2_ban];
                MS2_moVEB   =   moVEB_UTB06[MS2_ban];
                MS2_long   =   long_UTB06[MS2_ban];
                MS2_middle = middle_UTB06[MS2_ban];
                MS2_hp     =     hp_UTB06[MS2_ban];
                MS2_link_a = link_a_UTB06[MS2_ban];
                MS2_link_b = link_b_UTB06[MS2_ban];
                break;
            case "FQB01":
                MS2_cost   =   cost_FQB01[MS2_ban];
                MS2_moVEB   =   moVEB_FQB01[MS2_ban];
                MS2_long   =   long_FQB01[MS2_ban];
                MS2_middle = middle_FQB01[MS2_ban];
                MS2_hp     =     hp_FQB01[MS2_ban];
                MS2_link_a = link_a_FQB01[MS2_ban];
                MS2_link_b = link_b_FQB01[MS2_ban];
                break;
            case "FQB02":
                MS2_cost   =   cost_FQB02[MS2_ban];
                MS2_moVEB   =   moVEB_FQB02[MS2_ban];
                MS2_long   =   long_FQB02[MS2_ban];
                MS2_middle = middle_FQB02[MS2_ban];
                MS2_hp     =     hp_FQB02[MS2_ban];
                MS2_link_a = link_a_FQB02[MS2_ban];
                MS2_link_b = link_b_FQB02[MS2_ban];
                break;
            case "FQB03":
                MS2_cost   =   cost_FQB03[MS2_ban];
                MS2_moVEB   =   moVEB_FQB03[MS2_ban];
                MS2_long   =   long_FQB03[MS2_ban];
                MS2_middle = middle_FQB03[MS2_ban];
                MS2_hp     =     hp_FQB03[MS2_ban];
                MS2_link_a = link_a_FQB03[MS2_ban];
                MS2_link_b = link_b_FQB03[MS2_ban];
                break;
            case "FQB04":
                MS2_cost   =   cost_FQB04[MS2_ban];
                MS2_moVEB   =   moVEB_FQB04[MS2_ban];
                MS2_long   =   long_FQB04[MS2_ban];
                MS2_middle = middle_FQB04[MS2_ban];
                MS2_hp     =     hp_FQB04[MS2_ban];
                MS2_link_a = link_a_FQB04[MS2_ban];
                MS2_link_b = link_b_FQB04[MS2_ban];
                break;
            case "FQB05":
                MS2_cost   =   cost_FQB05[MS2_ban];
                MS2_moVEB   =   moVEB_FQB05[MS2_ban];
                MS2_long   =   long_FQB05[MS2_ban];
                MS2_middle = middle_FQB05[MS2_ban];
                MS2_hp     =     hp_FQB05[MS2_ban];
                MS2_link_a = link_a_FQB05[MS2_ban];
                MS2_link_b = link_b_FQB05[MS2_ban];
                break;
            case "FQB06":
                MS2_cost   =   cost_FQB06[MS2_ban];
                MS2_moVEB   =   moVEB_FQB06[MS2_ban];
                MS2_long   =   long_FQB06[MS2_ban];
                MS2_middle = middle_FQB06[MS2_ban];
                MS2_hp     =     hp_FQB06[MS2_ban];
                MS2_link_a = link_a_FQB06[MS2_ban];
                MS2_link_b = link_b_FQB06[MS2_ban];
                break;
            case "VEB01":
                MS2_cost   =   cost_VEB01[MS2_ban];
                MS2_moVEB   =   moVEB_VEB01[MS2_ban];
                MS2_long   =   long_VEB01[MS2_ban];
                MS2_middle = middle_VEB01[MS2_ban];
                MS2_hp     =     hp_VEB01[MS2_ban];
                MS2_link_a = link_a_VEB01[MS2_ban];
                MS2_link_b = link_b_VEB01[MS2_ban];
                break;
            case "BP01":
                MS2_cost   =   cost_BP01[MS2_ban];
                MS2_moVEB   =   moVEB_BP01[MS2_ban];
                MS2_long   =   long_BP01[MS2_ban];
                MS2_middle = middle_BP01[MS2_ban];
                MS2_hp     =     hp_BP01[MS2_ban];
                MS2_link_a = link_a_BP01[MS2_ban];
                MS2_link_b = link_b_BP01[MS2_ban];
                break;
            case "BP02":
                MS2_cost   =   cost_BP02[MS2_ban];
                MS2_moVEB   = moVEB_BP02[MS2_ban];
                MS2_long   =   long_BP02[MS2_ban];
                MS2_middle = middle_BP02[MS2_ban];
                MS2_hp     =     hp_BP02[MS2_ban];
                MS2_link_a = link_a_BP02[MS2_ban];
                MS2_link_b = link_b_BP02[MS2_ban];
                break;
            case "BP03":
                MS2_cost   =   cost_BP03[MS2_ban];
                MS2_moVEB   = moVEB_BP03[MS2_ban];
                MS2_long   =   long_BP03[MS2_ban];
                MS2_middle = middle_BP03[MS2_ban];
                MS2_hp     =     hp_BP03[MS2_ban];
                MS2_link_a = link_a_BP03[MS2_ban];
                MS2_link_b = link_b_BP03[MS2_ban];
                break;
            case "BP04":
                MS2_cost   =   cost_BP04[MS2_ban];
                MS2_moVEB   = moVEB_BP04[MS2_ban];
                MS2_long   =   long_BP04[MS2_ban];
                MS2_middle = middle_BP04[MS2_ban];
                MS2_hp     =     hp_BP04[MS2_ban];
                MS2_link_a = link_a_BP04[MS2_ban];
                MS2_link_b = link_b_BP04[MS2_ban];
                break;
            case "BP05":
                MS2_cost   =   cost_BP05[MS2_ban];
                MS2_moVEB   = moVEB_BP05[MS2_ban];
                MS2_long   =   long_BP05[MS2_ban];
                MS2_middle = middle_BP05[MS2_ban];
                MS2_hp     =     hp_BP05[MS2_ban];
                MS2_link_a = link_a_BP05[MS2_ban];
                MS2_link_b = link_b_BP05[MS2_ban];
                break;
            case "BP06":
                MS2_cost   =   cost_BP06[MS2_ban];
                MS2_moVEB   = moVEB_BP06[MS2_ban];
                MS2_long   =   long_BP06[MS2_ban];
                MS2_middle = middle_BP06[MS2_ban];
                MS2_hp     =     hp_BP06[MS2_ban];
                MS2_link_a = link_a_BP06[MS2_ban];
                MS2_link_b = link_b_BP06[MS2_ban];
                break;
            case "PR":
                MS2_cost   =   cost_PR[MS2_ban];
                MS2_moVEB   =   moVEB_PR[MS2_ban];
                MS2_long   =   long_PR[MS2_ban];
                MS2_middle = middle_PR[MS2_ban];
                MS2_hp     =     hp_PR[MS2_ban];
                MS2_link_a = link_a_PR[MS2_ban];
                MS2_link_b = link_b_PR[MS2_ban];
                break;
            case "TEST":
                MS2_cost   =   cost_TEST[MS2_ban];
                MS2_moVEB   = moVEB_TEST[MS2_ban];
                MS2_long   =   long_TEST[MS2_ban];
                MS2_middle = middle_TEST[MS2_ban];
                MS2_hp     =     hp_TEST[MS2_ban];
                MS2_link_a = link_a_TEST[MS2_ban];
                MS2_link_b = link_b_TEST[MS2_ban];
                break;
            case "TEST-A":
                MS2_cost   =   cost_TEST-a[MS2_ban];
                MS2_moVEB   = moVEB_TEST-a[MS2_ban];
                MS2_long   =   long_TEST-a[MS2_ban];
                MS2_middle = middle_TEST-a[MS2_ban];
                MS2_hp     =     hp_TEST-a[MS2_ban];
                MS2_link_a = link_a_TEST-a[MS2_ban];
                MS2_link_b = link_b_TEST-a[MS2_ban];
                break;
            case "ST01":
                MS2_cost   =   cost_ST01[MS2_ban];
                MS2_moVEB   = moVEB_ST01[MS2_ban];
                MS2_long   =   long_ST01[MS2_ban];
                MS2_middle = middle_ST01[MS2_ban];
                MS2_hp     =     hp_ST01[MS2_ban];
                MS2_link_a = link_a_ST01[MS2_ban];
                MS2_link_b = link_b_ST01[MS2_ban];
                break;
            case "ST02":
                MS2_cost   =   cost_ST02[MS2_ban];
                MS2_moVEB   = moVEB_ST02[MS2_ban];
                MS2_long   =   long_ST02[MS2_ban];
                MS2_middle = middle_ST02[MS2_ban];
                MS2_hp     =     hp_ST02[MS2_ban];
                MS2_link_a = link_a_ST02[MS2_ban];
                MS2_link_b = link_b_ST02[MS2_ban];
                break;
            case "ST03":
                MS2_cost   =   cost_ST03[MS2_ban];
                MS2_moVEB   = moVEB_ST03[MS2_ban];
                MS2_long   =   long_ST03[MS2_ban];
                MS2_middle = middle_ST03[MS2_ban];
                MS2_hp     =     hp_ST03[MS2_ban];
                MS2_link_a = link_a_ST03[MS2_ban];
                MS2_link_b = link_b_ST03[MS2_ban];
                break;
            default:
                MS2_cost   = "-";
                MS2_move   = "-";
                MS2_long   = "-";
                MS2_middle = "-";
                MS2_hp     = "-";
                MS2_link_a = "-";
                MS2_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!MS2_cost){
                MS2_cost = "-";
            }
            if(!MS2_move){
                MS2_move = "-";
            }
            if(!MS2_long){
                MS2_long = "-";
            }
            if(!MS2_middle){
                MS2_middle = "-";
            }
            if(!MS2_hp){
                MS2_hp = "-";
            }
            if(!MS2_link_a){
                MS2_link_a = "-";
            }
            if(!MS2_link_b){
                MS2_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_MS2").textContent = MS2_cost;
        document.getElementById("move_MS2").textContent = MS2_move;
        document.getElementById("long_MS2").textContent = MS2_long;
        document.getElementById("middle_MS2").textContent = MS2_middle;
        document.getElementById("HP_MS2").textContent = MS2_hp;
        document.getElementById("link_MSa2").textContent = MS2_link_a;
        document.getElementById("link_MSb2").textContent = MS2_link_b;
        }
        //MS3
        MS3_dan = document.getElementById("MS3_dan").value;
        if(MS3_dan){
            console.log(MS3_dan);
        }else{
            MS3_dan = "null";
            document.getElementById("MS3g").src = "blank.png";
        }
        MS3_ban = document.getElementById("MS3_ban").value;
        if(MS3_ban){
            console.log(MS3_ban);
        }else{
            MS3_ban = "null";
            document.getElementById("MS3g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(MS3_dan != "null" & MS3_ban != "null"){
            console.log(MS3_dan + "-" + MS3_ban);
            document.getElementById("MS3g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + MS3_dan + "-" + MS3_ban + ".png";
            await sleep(10);
            joutai_MS3 = document.getElementById('MS3g');
            console.log(joutai_MS3);
            if (joutai_MS3.complete && joutai_MS3.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("MS3g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        MS3_ban = Number(MS3_ban);
        switch (MS3_dan){
            case "AB01":
                MS3_cost   =   cost_AB01[MS3_ban];
                MS3_move   =   move_AB01[MS3_ban];
                MS3_long   =   long_AB01[MS3_ban];
                MS3_middle = middle_AB01[MS3_ban];
                MS3_hp     =     hp_AB01[MS3_ban];
                MS3_link_a = link_a_AB01[MS3_ban];
                MS3_link_b = link_b_AB01[MS3_ban];
                break;
            case "AB02":
                MS3_cost   =   cost_AB02[MS3_ban];
                MS3_move   =   move_AB02[MS3_ban];
                MS3_long   =   long_AB02[MS3_ban];
                MS3_middle = middle_AB02[MS3_ban];
                MS3_hp     =     hp_AB02[MS3_ban];
                MS3_link_a = link_a_AB02[MS3_ban];
                MS3_link_b = link_b_AB02[MS3_ban];
                break;
            case "AB03":
                MS3_cost   =   cost_AB03[MS3_ban];
                MS3_move   =   move_AB03[MS3_ban];
                MS3_long   =   long_AB03[MS3_ban];
                MS3_middle = middle_AB03[MS3_ban];
                MS3_hp     =     hp_AB03[MS3_ban];
                MS3_link_a = link_a_AB03[MS3_ban];
                MS3_link_b = link_b_AB03[MS3_ban];
                break;
            case "AB04":
                MS3_cost   =   cost_AB04[MS3_ban];
                MS3_move   =   move_AB04[MS3_ban];
                MS3_long   =   long_AB04[MS3_ban];
                MS3_middle = middle_AB04[MS3_ban];
                MS3_hp     =     hp_AB04[MS3_ban];
                MS3_link_a = link_a_AB04[MS3_ban];
                MS3_link_b = link_b_AB04[MS3_ban];
                break;
            case "LX01":
                MS3_cost   =   cost_LX01[MS3_ban];
                MS3_move   =   move_LX01[MS3_ban];
                MS3_long   =   long_LX01[MS3_ban];
                MS3_middle = middle_LX01[MS3_ban];
                MS3_hp     =     hp_LX01[MS3_ban];
                MS3_link_a = link_a_LX01[MS3_ban];
                MS3_link_b = link_b_LX01[MS3_ban];
                break;
            case "LX02":
                MS3_cost   =   cost_LX02[MS3_ban];
                MS3_move   =   move_LX02[MS3_ban];
                MS3_long   =   long_LX02[MS3_ban];
                MS3_middle = middle_LX02[MS3_ban];
                MS3_hp     =     hp_LX02[MS3_ban];
                MS3_link_a = link_a_LX02[MS3_ban];
                MS3_link_b = link_b_LX02[MS3_ban];
                break;
            case "LX03":
                MS3_cost   =   cost_LX03[MS3_ban];
                MS3_move   =   move_LX03[MS3_ban];
                MS3_long   =   long_LX03[MS3_ban];
                MS3_middle = middle_LX03[MS3_ban];
                MS3_hp     =     hp_LX03[MS3_ban];
                MS3_link_a = link_a_LX03[MS3_ban];
                MS3_link_b = link_b_LX03[MS3_ban];
                break;
            case "LX04":
                MS3_cost   =   cost_LX04[MS3_ban];
                MS3_move   =   move_LX04[MS3_ban];
                MS3_long   =   long_LX04[MS3_ban];
                MS3_middle = middle_LX04[MS3_ban];
                MS3_hp     =     hp_LX04[MS3_ban];
                MS3_link_a = link_a_LX04[MS3_ban];
                MS3_link_b = link_b_LX04[MS3_ban];
                break;
            case "UT01":
                MS3_cost   =   cost_UT01[MS3_ban];
                MS3_move   =   move_UT01[MS3_ban];
                MS3_long   =   long_UT01[MS3_ban];
                MS3_middle = middle_UT01[MS3_ban];
                MS3_hp     =     hp_UT01[MS3_ban];
                MS3_link_a = link_a_UT01[MS3_ban];
                MS3_link_b = link_b_UT01[MS3_ban];
                break;
            case "UT02":
                MS3_cost   =   cost_UT02[MS3_ban];
                MS3_move   =   move_UT02[MS3_ban];
                MS3_long   =   long_UT02[MS3_ban];
                MS3_middle = middle_UT02[MS3_ban];
                MS3_hp     =     hp_UT02[MS3_ban];
                MS3_link_a = link_a_UT02[MS3_ban];
                MS3_link_b = link_b_UT02[MS3_ban];
                break;
            case "UT03":
                MS3_cost   =   cost_UT03[MS3_ban];
                MS3_move   =   move_UT03[MS3_ban];
                MS3_long   =   long_UT03[MS3_ban];
                MS3_middle = middle_UT03[MS3_ban];
                MS3_hp     =     hp_UT03[MS3_ban];
                MS3_link_a = link_a_UT03[MS3_ban];
                MS3_link_b = link_b_UT03[MS3_ban];
                break;
            case "UT04":
                MS3_cost   =   cost_UT04[MS3_ban];
                MS3_move   =   move_UT04[MS3_ban];
                MS3_long   =   long_UT04[MS3_ban];
                MS3_middle = middle_UT04[MS3_ban];
                MS3_hp     =     hp_UT04[MS3_ban];
                MS3_link_a = link_a_UT04[MS3_ban];
                MS3_link_b = link_b_UT04[MS3_ban];
                break;
            case "UT05":
                MS3_cost   =   cost_UT05[MS3_ban];
                MS3_move   =   move_UT05[MS3_ban];
                MS3_long   =   long_UT05[MS3_ban];
                MS3_middle = middle_UT05[MS3_ban];
                MS3_hp     =     hp_UT05[MS3_ban];
                MS3_link_a = link_a_UT05[MS3_ban];
                MS3_link_b = link_b_UT05[MS3_ban];
                break;
            case "UT06":
                MS3_cost   =   cost_UT06[MS3_ban];
                MS3_move   =   move_UT06[MS3_ban];
                MS3_long   =   long_UT06[MS3_ban];
                MS3_middle = middle_UT06[MS3_ban];
                MS3_hp     =     hp_UT06[MS3_ban];
                MS3_link_a = link_a_UT06[MS3_ban];
                MS3_link_b = link_b_UT06[MS3_ban];
                break;
            case "FQ01":
                MS3_cost   =   cost_FQ01[MS3_ban];
                MS3_move   =   move_FQ01[MS3_ban];
                MS3_long   =   long_FQ01[MS3_ban];
                MS3_middle = middle_FQ01[MS3_ban];
                MS3_hp     =     hp_FQ01[MS3_ban];
                MS3_link_a = link_a_FQ01[MS3_ban];
                MS3_link_b = link_b_FQ01[MS3_ban];
                break;
            case "FQ02":
                MS3_cost   =   cost_FQ02[MS3_ban];
                MS3_move   =   move_FQ02[MS3_ban];
                MS3_long   =   long_FQ02[MS3_ban];
                MS3_middle = middle_FQ02[MS3_ban];
                MS3_hp     =     hp_FQ02[MS3_ban];
                MS3_link_a = link_a_FQ02[MS3_ban];
                MS3_link_b = link_b_FQ02[MS3_ban];
                break;
            case "FQ03":
                MS3_cost   =   cost_FQ03[MS3_ban];
                MS3_move   =   move_FQ03[MS3_ban];
                MS3_long   =   long_FQ03[MS3_ban];
                MS3_middle = middle_FQ03[MS3_ban];
                MS3_hp     =     hp_FQ03[MS3_ban];
                MS3_link_a = link_a_FQ03[MS3_ban];
                MS3_link_b = link_b_FQ03[MS3_ban];
                break;
            case "FQ04":
                MS3_cost   =   cost_FQ04[MS3_ban];
                MS3_move   =   move_FQ04[MS3_ban];
                MS3_long   =   long_FQ04[MS3_ban];
                MS3_middle = middle_FQ04[MS3_ban];
                MS3_hp     =     hp_FQ04[MS3_ban];
                MS3_link_a = link_a_FQ04[MS3_ban];
                MS3_link_b = link_b_FQ04[MS3_ban];
                break;
            case "FQ05":
                MS3_cost   =   cost_FQ05[MS3_ban];
                MS3_move   =   move_FQ05[MS3_ban];
                MS3_long   =   long_FQ05[MS3_ban];
                MS3_middle = middle_FQ05[MS3_ban];
                MS3_hp     =     hp_FQ05[MS3_ban];
                MS3_link_a = link_a_FQ05[MS3_ban];
                MS3_link_b = link_b_FQ05[MS3_ban];
                break;
            case "FQ06":
                MS3_cost   =   cost_FQ06[MS3_ban];
                MS3_move   =   move_FQ06[MS3_ban];
                MS3_long   =   long_FQ06[MS3_ban];
                MS3_middle = middle_FQ06[MS3_ban];
                MS3_hp     =     hp_FQ06[MS3_ban];
                MS3_link_a = link_a_FQ06[MS3_ban];
                MS3_link_b = link_b_FQ06[MS3_ban];
                break;
            case "VE01":
                MS3_cost   =   cost_VE01[MS3_ban];
                MS3_move   =   move_VE01[MS3_ban];
                MS3_long   =   long_VE01[MS3_ban];
                MS3_middle = middle_VE01[MS3_ban];
                MS3_hp     =     hp_VE01[MS3_ban];
                MS3_link_a = link_a_VE01[MS3_ban];
                MS3_link_b = link_b_VE01[MS3_ban];
                break;
            case "AR01":
                MS3_cost   =   cost_AR01[MS3_ban];
                MS3_moVEB   =   moVEB_AR01[MS3_ban];
                MS3_long   =   long_AR01[MS3_ban];
                MS3_middle = middle_AR01[MS3_ban];
                MS3_hp     =     hp_AR01[MS3_ban];
                MS3_link_a = link_a_AR01[MS3_ban];
                MS3_link_b = link_b_AR01[MS3_ban];
                break;
            case "AR02":
                MS3_cost   =   cost_AR02[MS3_ban];
                MS3_moVEB   =   moVEB_AR02[MS3_ban];
                MS3_long   =   long_AR02[MS3_ban];
                MS3_middle = middle_AR02[MS3_ban];
                MS3_hp     =     hp_AR02[MS3_ban];
                MS3_link_a = link_a_AR02[MS3_ban];
                MS3_link_b = link_b_AR02[MS3_ban];
                break;
            case "AR03":
                MS3_cost   =   cost_AR03[MS3_ban];
                MS3_moVEB   =   moVEB_AR03[MS3_ban];
                MS3_long   =   long_AR03[MS3_ban];
                MS3_middle = middle_AR03[MS3_ban];
                MS3_hp     =     hp_AR03[MS3_ban];
                MS3_link_a = link_a_AR03[MS3_ban];
                MS3_link_b = link_b_AR03[MS3_ban];
                break;
            case "AR04":
                MS3_cost   =   cost_AR04[MS3_ban];
                MS3_moVEB   =   moVEB_AR04[MS3_ban];
                MS3_long   =   long_AR04[MS3_ban];
                MS3_middle = middle_AR04[MS3_ban];
                MS3_hp     =     hp_AR04[MS3_ban];
                MS3_link_a = link_a_AR04[MS3_ban];
                MS3_link_b = link_b_AR04[MS3_ban];
                break;
            case "LXR01":
                MS3_cost   =   cost_LXR01[MS3_ban];
                MS3_moVEB   =   moVEB_LXR01[MS3_ban];
                MS3_long   =   long_LXR01[MS3_ban];
                MS3_middle = middle_LXR01[MS3_ban];
                MS3_hp     =     hp_LXR01[MS3_ban];
                MS3_link_a = link_a_LXR01[MS3_ban];
                MS3_link_b = link_b_LXR01[MS3_ban];
                break;
            case "LXR02":
                MS3_cost   =   cost_LXR02[MS3_ban];
                MS3_moVEB   =   moVEB_LXR02[MS3_ban];
                MS3_long   =   long_LXR02[MS3_ban];
                MS3_middle = middle_LXR02[MS3_ban];
                MS3_hp     =     hp_LXR02[MS3_ban];
                MS3_link_a = link_a_LXR02[MS3_ban];
                MS3_link_b = link_b_LXR02[MS3_ban];
                break;
            case "LXR03":
                MS3_cost   =   cost_LXR03[MS3_ban];
                MS3_moVEB   =   moVEB_LXR03[MS3_ban];
                MS3_long   =   long_LXR03[MS3_ban];
                MS3_middle = middle_LXR03[MS3_ban];
                MS3_hp     =     hp_LXR03[MS3_ban];
                MS3_link_a = link_a_LXR03[MS3_ban];
                MS3_link_b = link_b_LXR03[MS3_ban];
                break;
            case "LXR04":
                MS3_cost   =   cost_LXR04[MS3_ban];
                MS3_moVEB   =   moVEB_LXR04[MS3_ban];
                MS3_long   =   long_LXR04[MS3_ban];
                MS3_middle = middle_LXR04[MS3_ban];
                MS3_hp     =     hp_LXR04[MS3_ban];
                MS3_link_a = link_a_LXR04[MS3_ban];
                MS3_link_b = link_b_LXR04[MS3_ban];
                break;
            case "UTB01":
                MS3_cost   =   cost_UTB01[MS3_ban];
                MS3_moVEB   =   moVEB_UTB01[MS3_ban];
                MS3_long   =   long_UTB01[MS3_ban];
                MS3_middle = middle_UTB01[MS3_ban];
                MS3_hp     =     hp_UTB01[MS3_ban];
                MS3_link_a = link_a_UTB01[MS3_ban];
                MS3_link_b = link_b_UTB01[MS3_ban];
                break;
            case "UTB02":
                MS3_cost   =   cost_UTB02[MS3_ban];
                MS3_moVEB   =   moVEB_UTB02[MS3_ban];
                MS3_long   =   long_UTB02[MS3_ban];
                MS3_middle = middle_UTB02[MS3_ban];
                MS3_hp     =     hp_UTB02[MS3_ban];
                MS3_link_a = link_a_UTB02[MS3_ban];
                MS3_link_b = link_b_UTB02[MS3_ban];
                break;
            case "UTB03":
                MS3_cost   =   cost_UTB03[MS3_ban];
                MS3_moVEB   =   moVEB_UTB03[MS3_ban];
                MS3_long   =   long_UTB03[MS3_ban];
                MS3_middle = middle_UTB03[MS3_ban];
                MS3_hp     =     hp_UTB03[MS3_ban];
                MS3_link_a = link_a_UTB03[MS3_ban];
                MS3_link_b = link_b_UTB03[MS3_ban];
                break;
            case "UTB04":
                MS3_cost   =   cost_UTB04[MS3_ban];
                MS3_moVEB   =   moVEB_UTB04[MS3_ban];
                MS3_long   =   long_UTB04[MS3_ban];
                MS3_middle = middle_UTB04[MS3_ban];
                MS3_hp     =     hp_UTB04[MS3_ban];
                MS3_link_a = link_a_UTB04[MS3_ban];
                MS3_link_b = link_b_UTB04[MS3_ban];
                break;
            case "UTB05":
                MS3_cost   =   cost_UTB05[MS3_ban];
                MS3_moVEB   =   moVEB_UTB05[MS3_ban];
                MS3_long   =   long_UTB05[MS3_ban];
                MS3_middle = middle_UTB05[MS3_ban];
                MS3_hp     =     hp_UTB05[MS3_ban];
                MS3_link_a = link_a_UTB05[MS3_ban];
                MS3_link_b = link_b_UTB05[MS3_ban];
                break;
            case "UTB06":
                MS3_cost   =   cost_UTB06[MS3_ban];
                MS3_moVEB   =   moVEB_UTB06[MS3_ban];
                MS3_long   =   long_UTB06[MS3_ban];
                MS3_middle = middle_UTB06[MS3_ban];
                MS3_hp     =     hp_UTB06[MS3_ban];
                MS3_link_a = link_a_UTB06[MS3_ban];
                MS3_link_b = link_b_UTB06[MS3_ban];
                break;
            case "FQB01":
                MS3_cost   =   cost_FQB01[MS3_ban];
                MS3_moVEB   =   moVEB_FQB01[MS3_ban];
                MS3_long   =   long_FQB01[MS3_ban];
                MS3_middle = middle_FQB01[MS3_ban];
                MS3_hp     =     hp_FQB01[MS3_ban];
                MS3_link_a = link_a_FQB01[MS3_ban];
                MS3_link_b = link_b_FQB01[MS3_ban];
                break;
            case "FQB02":
                MS3_cost   =   cost_FQB02[MS3_ban];
                MS3_moVEB   =   moVEB_FQB02[MS3_ban];
                MS3_long   =   long_FQB02[MS3_ban];
                MS3_middle = middle_FQB02[MS3_ban];
                MS3_hp     =     hp_FQB02[MS3_ban];
                MS3_link_a = link_a_FQB02[MS3_ban];
                MS3_link_b = link_b_FQB02[MS3_ban];
                break;
            case "FQB03":
                MS3_cost   =   cost_FQB03[MS3_ban];
                MS3_moVEB   =   moVEB_FQB03[MS3_ban];
                MS3_long   =   long_FQB03[MS3_ban];
                MS3_middle = middle_FQB03[MS3_ban];
                MS3_hp     =     hp_FQB03[MS3_ban];
                MS3_link_a = link_a_FQB03[MS3_ban];
                MS3_link_b = link_b_FQB03[MS3_ban];
                break;
            case "FQB04":
                MS3_cost   =   cost_FQB04[MS3_ban];
                MS3_moVEB   =   moVEB_FQB04[MS3_ban];
                MS3_long   =   long_FQB04[MS3_ban];
                MS3_middle = middle_FQB04[MS3_ban];
                MS3_hp     =     hp_FQB04[MS3_ban];
                MS3_link_a = link_a_FQB04[MS3_ban];
                MS3_link_b = link_b_FQB04[MS3_ban];
                break;
            case "FQB05":
                MS3_cost   =   cost_FQB05[MS3_ban];
                MS3_moVEB   =   moVEB_FQB05[MS3_ban];
                MS3_long   =   long_FQB05[MS3_ban];
                MS3_middle = middle_FQB05[MS3_ban];
                MS3_hp     =     hp_FQB05[MS3_ban];
                MS3_link_a = link_a_FQB05[MS3_ban];
                MS3_link_b = link_b_FQB05[MS3_ban];
                break;
            case "FQB06":
                MS3_cost   =   cost_FQB06[MS3_ban];
                MS3_moVEB   =   moVEB_FQB06[MS3_ban];
                MS3_long   =   long_FQB06[MS3_ban];
                MS3_middle = middle_FQB06[MS3_ban];
                MS3_hp     =     hp_FQB06[MS3_ban];
                MS3_link_a = link_a_FQB06[MS3_ban];
                MS3_link_b = link_b_FQB06[MS3_ban];
                break;
            case "VEB01":
                MS3_cost   =   cost_VEB01[MS3_ban];
                MS3_moVEB   =   moVEB_VEB01[MS3_ban];
                MS3_long   =   long_VEB01[MS3_ban];
                MS3_middle = middle_VEB01[MS3_ban];
                MS3_hp     =     hp_VEB01[MS3_ban];
                MS3_link_a = link_a_VEB01[MS3_ban];
                MS3_link_b = link_b_VEB01[MS3_ban];
                break;
            case "BP01":
                MS3_cost   =   cost_BP01[MS3_ban];
                MS3_moVEB   =   moVEB_BP01[MS3_ban];
                MS3_long   =   long_BP01[MS3_ban];
                MS3_middle = middle_BP01[MS3_ban];
                MS3_hp     =     hp_BP01[MS3_ban];
                MS3_link_a = link_a_BP01[MS3_ban];
                MS3_link_b = link_b_BP01[MS3_ban];
                break;
            case "BP02":
                MS3_cost   =   cost_BP02[MS3_ban];
                MS3_moVEB   = moVEB_BP02[MS3_ban];
                MS3_long   =   long_BP02[MS3_ban];
                MS3_middle = middle_BP02[MS3_ban];
                MS3_hp     =     hp_BP02[MS3_ban];
                MS3_link_a = link_a_BP02[MS3_ban];
                MS3_link_b = link_b_BP02[MS3_ban];
                break;
            case "BP03":
                MS3_cost   =   cost_BP03[MS3_ban];
                MS3_moVEB   = moVEB_BP03[MS3_ban];
                MS3_long   =   long_BP03[MS3_ban];
                MS3_middle = middle_BP03[MS3_ban];
                MS3_hp     =     hp_BP03[MS3_ban];
                MS3_link_a = link_a_BP03[MS3_ban];
                MS3_link_b = link_b_BP03[MS3_ban];
                break;
            case "BP04":
                MS3_cost   =   cost_BP04[MS3_ban];
                MS3_moVEB   = moVEB_BP04[MS3_ban];
                MS3_long   =   long_BP04[MS3_ban];
                MS3_middle = middle_BP04[MS3_ban];
                MS3_hp     =     hp_BP04[MS3_ban];
                MS3_link_a = link_a_BP04[MS3_ban];
                MS3_link_b = link_b_BP04[MS3_ban];
                break;
            case "BP05":
                MS3_cost   =   cost_BP05[MS3_ban];
                MS3_moVEB   = moVEB_BP05[MS3_ban];
                MS3_long   =   long_BP05[MS3_ban];
                MS3_middle = middle_BP05[MS3_ban];
                MS3_hp     =     hp_BP05[MS3_ban];
                MS3_link_a = link_a_BP05[MS3_ban];
                MS3_link_b = link_b_BP05[MS3_ban];
                break;
            case "BP06":
                MS3_cost   =   cost_BP06[MS3_ban];
                MS3_moVEB   = moVEB_BP06[MS3_ban];
                MS3_long   =   long_BP06[MS3_ban];
                MS3_middle = middle_BP06[MS3_ban];
                MS3_hp     =     hp_BP06[MS3_ban];
                MS3_link_a = link_a_BP06[MS3_ban];
                MS3_link_b = link_b_BP06[MS3_ban];
                break;
            case "PR":
                MS3_cost   =   cost_PR[MS3_ban];
                MS3_moVEB   =   moVEB_PR[MS3_ban];
                MS3_long   =   long_PR[MS3_ban];
                MS3_middle = middle_PR[MS3_ban];
                MS3_hp     =     hp_PR[MS3_ban];
                MS3_link_a = link_a_PR[MS3_ban];
                MS3_link_b = link_b_PR[MS3_ban];
                break;
            case "TEST":
                MS3_cost   =   cost_TEST[MS3_ban];
                MS3_moVEB   = moVEB_TEST[MS3_ban];
                MS3_long   =   long_TEST[MS3_ban];
                MS3_middle = middle_TEST[MS3_ban];
                MS3_hp     =     hp_TEST[MS3_ban];
                MS3_link_a = link_a_TEST[MS3_ban];
                MS3_link_b = link_b_TEST[MS3_ban];
                break;
            case "TEST-A":
                MS3_cost   =   cost_TEST-a[MS3_ban];
                MS3_moVEB   = moVEB_TEST-a[MS3_ban];
                MS3_long   =   long_TEST-a[MS3_ban];
                MS3_middle = middle_TEST-a[MS3_ban];
                MS3_hp     =     hp_TEST-a[MS3_ban];
                MS3_link_a = link_a_TEST-a[MS3_ban];
                MS3_link_b = link_b_TEST-a[MS3_ban];
                break;
            case "ST01":
                MS3_cost   =   cost_ST01[MS3_ban];
                MS3_moVEB   = moVEB_ST01[MS3_ban];
                MS3_long   =   long_ST01[MS3_ban];
                MS3_middle = middle_ST01[MS3_ban];
                MS3_hp     =     hp_ST01[MS3_ban];
                MS3_link_a = link_a_ST01[MS3_ban];
                MS3_link_b = link_b_ST01[MS3_ban];
                break;
            case "ST02":
                MS3_cost   =   cost_ST02[MS3_ban];
                MS3_moVEB   = moVEB_ST02[MS3_ban];
                MS3_long   =   long_ST02[MS3_ban];
                MS3_middle = middle_ST02[MS3_ban];
                MS3_hp     =     hp_ST02[MS3_ban];
                MS3_link_a = link_a_ST02[MS3_ban];
                MS3_link_b = link_b_ST02[MS3_ban];
                break;
            case "ST03":
                MS3_cost   =   cost_ST03[MS3_ban];
                MS3_moVEB   = moVEB_ST03[MS3_ban];
                MS3_long   =   long_ST03[MS3_ban];
                MS3_middle = middle_ST03[MS3_ban];
                MS3_hp     =     hp_ST03[MS3_ban];
                MS3_link_a = link_a_ST03[MS3_ban];
                MS3_link_b = link_b_ST03[MS3_ban];
                break;
            default:
                MS3_cost   = "-";
                MS3_move   = "-";
                MS3_long   = "-";
                MS3_middle = "-";
                MS3_hp     = "-";
                MS3_link_a = "-";
                MS3_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!MS3_cost){
                MS3_cost = "-";
            }
            if(!MS3_move){
                MS3_move = "-";
            }
            if(!MS3_long){
                MS3_long = "-";
            }
            if(!MS3_middle){
                MS3_middle = "-";
            }
            if(!MS3_hp){
                MS3_hp = "-";
            }
            if(!MS3_link_a){
                MS3_link_a = "-";
            }
            if(!MS3_link_b){
                MS3_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_MS3").textContent = MS3_cost;
        document.getElementById("move_MS3").textContent = MS3_move;
        document.getElementById("long_MS3").textContent = MS3_long;
        document.getElementById("middle_MS3").textContent = MS3_middle;
        document.getElementById("HP_MS3").textContent = MS3_hp;
        document.getElementById("link_MSa3").textContent = MS3_link_a;
        document.getElementById("link_MSb3").textContent = MS3_link_b;
        }
        //MS4
        MS4_dan = document.getElementById("MS4_dan").value;
        if(MS4_dan){
            console.log(MS4_dan);
        }else{
            MS4_dan = "null";
            document.getElementById("MS4g").src = "blank.png";
        }
        MS4_ban = document.getElementById("MS4_ban").value;
        if(MS4_ban){
            console.log(MS4_ban);
        }else{
            MS4_ban = "null";
            document.getElementById("MS4g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(MS4_dan != "null" & MS4_ban != "null"){
            console.log(MS4_dan + "-" + MS4_ban);
            document.getElementById("MS4g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + MS4_dan + "-" + MS4_ban + ".png";
            await sleep(10);
            joutai_MS4 = document.getElementById('MS4g');
            console.log(joutai_MS4);
            if (joutai_MS4.complete && joutai_MS4.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("MS4g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        MS4_ban = Number(MS4_ban);
        switch (MS4_dan){
            case "AB01":
                MS4_cost   =   cost_AB01[MS4_ban];
                MS4_move   =   move_AB01[MS4_ban];
                MS4_long   =   long_AB01[MS4_ban];
                MS4_middle = middle_AB01[MS4_ban];
                MS4_hp     =     hp_AB01[MS4_ban];
                MS4_link_a = link_a_AB01[MS4_ban];
                MS4_link_b = link_b_AB01[MS4_ban];
                break;
            case "AB02":
                MS4_cost   =   cost_AB02[MS4_ban];
                MS4_move   =   move_AB02[MS4_ban];
                MS4_long   =   long_AB02[MS4_ban];
                MS4_middle = middle_AB02[MS4_ban];
                MS4_hp     =     hp_AB02[MS4_ban];
                MS4_link_a = link_a_AB02[MS4_ban];
                MS4_link_b = link_b_AB02[MS4_ban];
                break;
            case "AB03":
                MS4_cost   =   cost_AB03[MS4_ban];
                MS4_move   =   move_AB03[MS4_ban];
                MS4_long   =   long_AB03[MS4_ban];
                MS4_middle = middle_AB03[MS4_ban];
                MS4_hp     =     hp_AB03[MS4_ban];
                MS4_link_a = link_a_AB03[MS4_ban];
                MS4_link_b = link_b_AB03[MS4_ban];
                break;
            case "AB04":
                MS4_cost   =   cost_AB04[MS4_ban];
                MS4_move   =   move_AB04[MS4_ban];
                MS4_long   =   long_AB04[MS4_ban];
                MS4_middle = middle_AB04[MS4_ban];
                MS4_hp     =     hp_AB04[MS4_ban];
                MS4_link_a = link_a_AB04[MS4_ban];
                MS4_link_b = link_b_AB04[MS4_ban];
                break;
            case "LX01":
                MS4_cost   =   cost_LX01[MS4_ban];
                MS4_move   =   move_LX01[MS4_ban];
                MS4_long   =   long_LX01[MS4_ban];
                MS4_middle = middle_LX01[MS4_ban];
                MS4_hp     =     hp_LX01[MS4_ban];
                MS4_link_a = link_a_LX01[MS4_ban];
                MS4_link_b = link_b_LX01[MS4_ban];
                break;
            case "LX02":
                MS4_cost   =   cost_LX02[MS4_ban];
                MS4_move   =   move_LX02[MS4_ban];
                MS4_long   =   long_LX02[MS4_ban];
                MS4_middle = middle_LX02[MS4_ban];
                MS4_hp     =     hp_LX02[MS4_ban];
                MS4_link_a = link_a_LX02[MS4_ban];
                MS4_link_b = link_b_LX02[MS4_ban];
                break;
            case "LX03":
                MS4_cost   =   cost_LX03[MS4_ban];
                MS4_move   =   move_LX03[MS4_ban];
                MS4_long   =   long_LX03[MS4_ban];
                MS4_middle = middle_LX03[MS4_ban];
                MS4_hp     =     hp_LX03[MS4_ban];
                MS4_link_a = link_a_LX03[MS4_ban];
                MS4_link_b = link_b_LX03[MS4_ban];
                break;
            case "LX04":
                MS4_cost   =   cost_LX04[MS4_ban];
                MS4_move   =   move_LX04[MS4_ban];
                MS4_long   =   long_LX04[MS4_ban];
                MS4_middle = middle_LX04[MS4_ban];
                MS4_hp     =     hp_LX04[MS4_ban];
                MS4_link_a = link_a_LX04[MS4_ban];
                MS4_link_b = link_b_LX04[MS4_ban];
                break;
            case "UT01":
                MS4_cost   =   cost_UT01[MS4_ban];
                MS4_move   =   move_UT01[MS4_ban];
                MS4_long   =   long_UT01[MS4_ban];
                MS4_middle = middle_UT01[MS4_ban];
                MS4_hp     =     hp_UT01[MS4_ban];
                MS4_link_a = link_a_UT01[MS4_ban];
                MS4_link_b = link_b_UT01[MS4_ban];
                break;
            case "UT02":
                MS4_cost   =   cost_UT02[MS4_ban];
                MS4_move   =   move_UT02[MS4_ban];
                MS4_long   =   long_UT02[MS4_ban];
                MS4_middle = middle_UT02[MS4_ban];
                MS4_hp     =     hp_UT02[MS4_ban];
                MS4_link_a = link_a_UT02[MS4_ban];
                MS4_link_b = link_b_UT02[MS4_ban];
                break;
            case "UT03":
                MS4_cost   =   cost_UT03[MS4_ban];
                MS4_move   =   move_UT03[MS4_ban];
                MS4_long   =   long_UT03[MS4_ban];
                MS4_middle = middle_UT03[MS4_ban];
                MS4_hp     =     hp_UT03[MS4_ban];
                MS4_link_a = link_a_UT03[MS4_ban];
                MS4_link_b = link_b_UT03[MS4_ban];
                break;
            case "UT04":
                MS4_cost   =   cost_UT04[MS4_ban];
                MS4_move   =   move_UT04[MS4_ban];
                MS4_long   =   long_UT04[MS4_ban];
                MS4_middle = middle_UT04[MS4_ban];
                MS4_hp     =     hp_UT04[MS4_ban];
                MS4_link_a = link_a_UT04[MS4_ban];
                MS4_link_b = link_b_UT04[MS4_ban];
                break;
            case "UT05":
                MS4_cost   =   cost_UT05[MS4_ban];
                MS4_move   =   move_UT05[MS4_ban];
                MS4_long   =   long_UT05[MS4_ban];
                MS4_middle = middle_UT05[MS4_ban];
                MS4_hp     =     hp_UT05[MS4_ban];
                MS4_link_a = link_a_UT05[MS4_ban];
                MS4_link_b = link_b_UT05[MS4_ban];
                break;
            case "UT06":
                MS4_cost   =   cost_UT06[MS4_ban];
                MS4_move   =   move_UT06[MS4_ban];
                MS4_long   =   long_UT06[MS4_ban];
                MS4_middle = middle_UT06[MS4_ban];
                MS4_hp     =     hp_UT06[MS4_ban];
                MS4_link_a = link_a_UT06[MS4_ban];
                MS4_link_b = link_b_UT06[MS4_ban];
                break;
            case "FQ01":
                MS4_cost   =   cost_FQ01[MS4_ban];
                MS4_move   =   move_FQ01[MS4_ban];
                MS4_long   =   long_FQ01[MS4_ban];
                MS4_middle = middle_FQ01[MS4_ban];
                MS4_hp     =     hp_FQ01[MS4_ban];
                MS4_link_a = link_a_FQ01[MS4_ban];
                MS4_link_b = link_b_FQ01[MS4_ban];
                break;
            case "FQ02":
                MS4_cost   =   cost_FQ02[MS4_ban];
                MS4_move   =   move_FQ02[MS4_ban];
                MS4_long   =   long_FQ02[MS4_ban];
                MS4_middle = middle_FQ02[MS4_ban];
                MS4_hp     =     hp_FQ02[MS4_ban];
                MS4_link_a = link_a_FQ02[MS4_ban];
                MS4_link_b = link_b_FQ02[MS4_ban];
                break;
            case "FQ03":
                MS4_cost   =   cost_FQ03[MS4_ban];
                MS4_move   =   move_FQ03[MS4_ban];
                MS4_long   =   long_FQ03[MS4_ban];
                MS4_middle = middle_FQ03[MS4_ban];
                MS4_hp     =     hp_FQ03[MS4_ban];
                MS4_link_a = link_a_FQ03[MS4_ban];
                MS4_link_b = link_b_FQ03[MS4_ban];
                break;
            case "FQ04":
                MS4_cost   =   cost_FQ04[MS4_ban];
                MS4_move   =   move_FQ04[MS4_ban];
                MS4_long   =   long_FQ04[MS4_ban];
                MS4_middle = middle_FQ04[MS4_ban];
                MS4_hp     =     hp_FQ04[MS4_ban];
                MS4_link_a = link_a_FQ04[MS4_ban];
                MS4_link_b = link_b_FQ04[MS4_ban];
                break;
            case "FQ05":
                MS4_cost   =   cost_FQ05[MS4_ban];
                MS4_move   =   move_FQ05[MS4_ban];
                MS4_long   =   long_FQ05[MS4_ban];
                MS4_middle = middle_FQ05[MS4_ban];
                MS4_hp     =     hp_FQ05[MS4_ban];
                MS4_link_a = link_a_FQ05[MS4_ban];
                MS4_link_b = link_b_FQ05[MS4_ban];
                break;
            case "FQ06":
                MS4_cost   =   cost_FQ06[MS4_ban];
                MS4_move   =   move_FQ06[MS4_ban];
                MS4_long   =   long_FQ06[MS4_ban];
                MS4_middle = middle_FQ06[MS4_ban];
                MS4_hp     =     hp_FQ06[MS4_ban];
                MS4_link_a = link_a_FQ06[MS4_ban];
                MS4_link_b = link_b_FQ06[MS4_ban];
                break;
            case "VE01":
                MS4_cost   =   cost_VE01[MS4_ban];
                MS4_move   =   move_VE01[MS4_ban];
                MS4_long   =   long_VE01[MS4_ban];
                MS4_middle = middle_VE01[MS4_ban];
                MS4_hp     =     hp_VE01[MS4_ban];
                MS4_link_a = link_a_VE01[MS4_ban];
                MS4_link_b = link_b_VE01[MS4_ban];
                break;
            case "AR01":
                MS4_cost   =   cost_AR01[MS4_ban];
                MS4_moVEB   =   moVEB_AR01[MS4_ban];
                MS4_long   =   long_AR01[MS4_ban];
                MS4_middle = middle_AR01[MS4_ban];
                MS4_hp     =     hp_AR01[MS4_ban];
                MS4_link_a = link_a_AR01[MS4_ban];
                MS4_link_b = link_b_AR01[MS4_ban];
                break;
            case "AR02":
                MS4_cost   =   cost_AR02[MS4_ban];
                MS4_moVEB   =   moVEB_AR02[MS4_ban];
                MS4_long   =   long_AR02[MS4_ban];
                MS4_middle = middle_AR02[MS4_ban];
                MS4_hp     =     hp_AR02[MS4_ban];
                MS4_link_a = link_a_AR02[MS4_ban];
                MS4_link_b = link_b_AR02[MS4_ban];
                break;
            case "AR03":
                MS4_cost   =   cost_AR03[MS4_ban];
                MS4_moVEB   =   moVEB_AR03[MS4_ban];
                MS4_long   =   long_AR03[MS4_ban];
                MS4_middle = middle_AR03[MS4_ban];
                MS4_hp     =     hp_AR03[MS4_ban];
                MS4_link_a = link_a_AR03[MS4_ban];
                MS4_link_b = link_b_AR03[MS4_ban];
                break;
            case "AR04":
                MS4_cost   =   cost_AR04[MS4_ban];
                MS4_moVEB   =   moVEB_AR04[MS4_ban];
                MS4_long   =   long_AR04[MS4_ban];
                MS4_middle = middle_AR04[MS4_ban];
                MS4_hp     =     hp_AR04[MS4_ban];
                MS4_link_a = link_a_AR04[MS4_ban];
                MS4_link_b = link_b_AR04[MS4_ban];
                break;
            case "LXR01":
                MS4_cost   =   cost_LXR01[MS4_ban];
                MS4_moVEB   =   moVEB_LXR01[MS4_ban];
                MS4_long   =   long_LXR01[MS4_ban];
                MS4_middle = middle_LXR01[MS4_ban];
                MS4_hp     =     hp_LXR01[MS4_ban];
                MS4_link_a = link_a_LXR01[MS4_ban];
                MS4_link_b = link_b_LXR01[MS4_ban];
                break;
            case "LXR02":
                MS4_cost   =   cost_LXR02[MS4_ban];
                MS4_moVEB   =   moVEB_LXR02[MS4_ban];
                MS4_long   =   long_LXR02[MS4_ban];
                MS4_middle = middle_LXR02[MS4_ban];
                MS4_hp     =     hp_LXR02[MS4_ban];
                MS4_link_a = link_a_LXR02[MS4_ban];
                MS4_link_b = link_b_LXR02[MS4_ban];
                break;
            case "LXR03":
                MS4_cost   =   cost_LXR03[MS4_ban];
                MS4_moVEB   =   moVEB_LXR03[MS4_ban];
                MS4_long   =   long_LXR03[MS4_ban];
                MS4_middle = middle_LXR03[MS4_ban];
                MS4_hp     =     hp_LXR03[MS4_ban];
                MS4_link_a = link_a_LXR03[MS4_ban];
                MS4_link_b = link_b_LXR03[MS4_ban];
                break;
            case "LXR04":
                MS4_cost   =   cost_LXR04[MS4_ban];
                MS4_moVEB   =   moVEB_LXR04[MS4_ban];
                MS4_long   =   long_LXR04[MS4_ban];
                MS4_middle = middle_LXR04[MS4_ban];
                MS4_hp     =     hp_LXR04[MS4_ban];
                MS4_link_a = link_a_LXR04[MS4_ban];
                MS4_link_b = link_b_LXR04[MS4_ban];
                break;
            case "UTB01":
                MS4_cost   =   cost_UTB01[MS4_ban];
                MS4_moVEB   =   moVEB_UTB01[MS4_ban];
                MS4_long   =   long_UTB01[MS4_ban];
                MS4_middle = middle_UTB01[MS4_ban];
                MS4_hp     =     hp_UTB01[MS4_ban];
                MS4_link_a = link_a_UTB01[MS4_ban];
                MS4_link_b = link_b_UTB01[MS4_ban];
                break;
            case "UTB02":
                MS4_cost   =   cost_UTB02[MS4_ban];
                MS4_moVEB   =   moVEB_UTB02[MS4_ban];
                MS4_long   =   long_UTB02[MS4_ban];
                MS4_middle = middle_UTB02[MS4_ban];
                MS4_hp     =     hp_UTB02[MS4_ban];
                MS4_link_a = link_a_UTB02[MS4_ban];
                MS4_link_b = link_b_UTB02[MS4_ban];
                break;
            case "UTB03":
                MS4_cost   =   cost_UTB03[MS4_ban];
                MS4_moVEB   =   moVEB_UTB03[MS4_ban];
                MS4_long   =   long_UTB03[MS4_ban];
                MS4_middle = middle_UTB03[MS4_ban];
                MS4_hp     =     hp_UTB03[MS4_ban];
                MS4_link_a = link_a_UTB03[MS4_ban];
                MS4_link_b = link_b_UTB03[MS4_ban];
                break;
            case "UTB04":
                MS4_cost   =   cost_UTB04[MS4_ban];
                MS4_moVEB   =   moVEB_UTB04[MS4_ban];
                MS4_long   =   long_UTB04[MS4_ban];
                MS4_middle = middle_UTB04[MS4_ban];
                MS4_hp     =     hp_UTB04[MS4_ban];
                MS4_link_a = link_a_UTB04[MS4_ban];
                MS4_link_b = link_b_UTB04[MS4_ban];
                break;
            case "UTB05":
                MS4_cost   =   cost_UTB05[MS4_ban];
                MS4_moVEB   =   moVEB_UTB05[MS4_ban];
                MS4_long   =   long_UTB05[MS4_ban];
                MS4_middle = middle_UTB05[MS4_ban];
                MS4_hp     =     hp_UTB05[MS4_ban];
                MS4_link_a = link_a_UTB05[MS4_ban];
                MS4_link_b = link_b_UTB05[MS4_ban];
                break;
            case "UTB06":
                MS4_cost   =   cost_UTB06[MS4_ban];
                MS4_moVEB   =   moVEB_UTB06[MS4_ban];
                MS4_long   =   long_UTB06[MS4_ban];
                MS4_middle = middle_UTB06[MS4_ban];
                MS4_hp     =     hp_UTB06[MS4_ban];
                MS4_link_a = link_a_UTB06[MS4_ban];
                MS4_link_b = link_b_UTB06[MS4_ban];
                break;
            case "FQB01":
                MS4_cost   =   cost_FQB01[MS4_ban];
                MS4_moVEB   =   moVEB_FQB01[MS4_ban];
                MS4_long   =   long_FQB01[MS4_ban];
                MS4_middle = middle_FQB01[MS4_ban];
                MS4_hp     =     hp_FQB01[MS4_ban];
                MS4_link_a = link_a_FQB01[MS4_ban];
                MS4_link_b = link_b_FQB01[MS4_ban];
                break;
            case "FQB02":
                MS4_cost   =   cost_FQB02[MS4_ban];
                MS4_moVEB   =   moVEB_FQB02[MS4_ban];
                MS4_long   =   long_FQB02[MS4_ban];
                MS4_middle = middle_FQB02[MS4_ban];
                MS4_hp     =     hp_FQB02[MS4_ban];
                MS4_link_a = link_a_FQB02[MS4_ban];
                MS4_link_b = link_b_FQB02[MS4_ban];
                break;
            case "FQB03":
                MS4_cost   =   cost_FQB03[MS4_ban];
                MS4_moVEB   =   moVEB_FQB03[MS4_ban];
                MS4_long   =   long_FQB03[MS4_ban];
                MS4_middle = middle_FQB03[MS4_ban];
                MS4_hp     =     hp_FQB03[MS4_ban];
                MS4_link_a = link_a_FQB03[MS4_ban];
                MS4_link_b = link_b_FQB03[MS4_ban];
                break;
            case "FQB04":
                MS4_cost   =   cost_FQB04[MS4_ban];
                MS4_moVEB   =   moVEB_FQB04[MS4_ban];
                MS4_long   =   long_FQB04[MS4_ban];
                MS4_middle = middle_FQB04[MS4_ban];
                MS4_hp     =     hp_FQB04[MS4_ban];
                MS4_link_a = link_a_FQB04[MS4_ban];
                MS4_link_b = link_b_FQB04[MS4_ban];
                break;
            case "FQB05":
                MS4_cost   =   cost_FQB05[MS4_ban];
                MS4_moVEB   =   moVEB_FQB05[MS4_ban];
                MS4_long   =   long_FQB05[MS4_ban];
                MS4_middle = middle_FQB05[MS4_ban];
                MS4_hp     =     hp_FQB05[MS4_ban];
                MS4_link_a = link_a_FQB05[MS4_ban];
                MS4_link_b = link_b_FQB05[MS4_ban];
                break;
            case "FQB06":
                MS4_cost   =   cost_FQB06[MS4_ban];
                MS4_moVEB   =   moVEB_FQB06[MS4_ban];
                MS4_long   =   long_FQB06[MS4_ban];
                MS4_middle = middle_FQB06[MS4_ban];
                MS4_hp     =     hp_FQB06[MS4_ban];
                MS4_link_a = link_a_FQB06[MS4_ban];
                MS4_link_b = link_b_FQB06[MS4_ban];
                break;
            case "VEB01":
                MS4_cost   =   cost_VEB01[MS4_ban];
                MS4_moVEB   =   moVEB_VEB01[MS4_ban];
                MS4_long   =   long_VEB01[MS4_ban];
                MS4_middle = middle_VEB01[MS4_ban];
                MS4_hp     =     hp_VEB01[MS4_ban];
                MS4_link_a = link_a_VEB01[MS4_ban];
                MS4_link_b = link_b_VEB01[MS4_ban];
                break;
            case "BP01":
                MS4_cost   =   cost_BP01[MS4_ban];
                MS4_moVEB   =   moVEB_BP01[MS4_ban];
                MS4_long   =   long_BP01[MS4_ban];
                MS4_middle = middle_BP01[MS4_ban];
                MS4_hp     =     hp_BP01[MS4_ban];
                MS4_link_a = link_a_BP01[MS4_ban];
                MS4_link_b = link_b_BP01[MS4_ban];
                break;
            case "BP02":
                MS4_cost   =   cost_BP02[MS4_ban];
                MS4_moVEB   = moVEB_BP02[MS4_ban];
                MS4_long   =   long_BP02[MS4_ban];
                MS4_middle = middle_BP02[MS4_ban];
                MS4_hp     =     hp_BP02[MS4_ban];
                MS4_link_a = link_a_BP02[MS4_ban];
                MS4_link_b = link_b_BP02[MS4_ban];
                break;
            case "BP03":
                MS4_cost   =   cost_BP03[MS4_ban];
                MS4_moVEB   = moVEB_BP03[MS4_ban];
                MS4_long   =   long_BP03[MS4_ban];
                MS4_middle = middle_BP03[MS4_ban];
                MS4_hp     =     hp_BP03[MS4_ban];
                MS4_link_a = link_a_BP03[MS4_ban];
                MS4_link_b = link_b_BP03[MS4_ban];
                break;
            case "BP04":
                MS4_cost   =   cost_BP04[MS4_ban];
                MS4_moVEB   = moVEB_BP04[MS4_ban];
                MS4_long   =   long_BP04[MS4_ban];
                MS4_middle = middle_BP04[MS4_ban];
                MS4_hp     =     hp_BP04[MS4_ban];
                MS4_link_a = link_a_BP04[MS4_ban];
                MS4_link_b = link_b_BP04[MS4_ban];
                break;
            case "BP05":
                MS4_cost   =   cost_BP05[MS4_ban];
                MS4_moVEB   = moVEB_BP05[MS4_ban];
                MS4_long   =   long_BP05[MS4_ban];
                MS4_middle = middle_BP05[MS4_ban];
                MS4_hp     =     hp_BP05[MS4_ban];
                MS4_link_a = link_a_BP05[MS4_ban];
                MS4_link_b = link_b_BP05[MS4_ban];
                break;
            case "BP06":
                MS4_cost   =   cost_BP06[MS4_ban];
                MS4_moVEB   = moVEB_BP06[MS4_ban];
                MS4_long   =   long_BP06[MS4_ban];
                MS4_middle = middle_BP06[MS4_ban];
                MS4_hp     =     hp_BP06[MS4_ban];
                MS4_link_a = link_a_BP06[MS4_ban];
                MS4_link_b = link_b_BP06[MS4_ban];
                break;
            case "PR":
                MS4_cost   =   cost_PR[MS4_ban];
                MS4_moVEB   =   moVEB_PR[MS4_ban];
                MS4_long   =   long_PR[MS4_ban];
                MS4_middle = middle_PR[MS4_ban];
                MS4_hp     =     hp_PR[MS4_ban];
                MS4_link_a = link_a_PR[MS4_ban];
                MS4_link_b = link_b_PR[MS4_ban];
                break;
            case "TEST":
                MS4_cost   =   cost_TEST[MS4_ban];
                MS4_moVEB   = moVEB_TEST[MS4_ban];
                MS4_long   =   long_TEST[MS4_ban];
                MS4_middle = middle_TEST[MS4_ban];
                MS4_hp     =     hp_TEST[MS4_ban];
                MS4_link_a = link_a_TEST[MS4_ban];
                MS4_link_b = link_b_TEST[MS4_ban];
                break;
            case "TEST-A":
                MS4_cost   =   cost_TEST-a[MS4_ban];
                MS4_moVEB   = moVEB_TEST-a[MS4_ban];
                MS4_long   =   long_TEST-a[MS4_ban];
                MS4_middle = middle_TEST-a[MS4_ban];
                MS4_hp     =     hp_TEST-a[MS4_ban];
                MS4_link_a = link_a_TEST-a[MS4_ban];
                MS4_link_b = link_b_TEST-a[MS4_ban];
                break;
            case "ST01":
                MS4_cost   =   cost_ST01[MS4_ban];
                MS4_moVEB   = moVEB_ST01[MS4_ban];
                MS4_long   =   long_ST01[MS4_ban];
                MS4_middle = middle_ST01[MS4_ban];
                MS4_hp     =     hp_ST01[MS4_ban];
                MS4_link_a = link_a_ST01[MS4_ban];
                MS4_link_b = link_b_ST01[MS4_ban];
                break;
            case "ST02":
                MS4_cost   =   cost_ST02[MS4_ban];
                MS4_moVEB   = moVEB_ST02[MS4_ban];
                MS4_long   =   long_ST02[MS4_ban];
                MS4_middle = middle_ST02[MS4_ban];
                MS4_hp     =     hp_ST02[MS4_ban];
                MS4_link_a = link_a_ST02[MS4_ban];
                MS4_link_b = link_b_ST02[MS4_ban];
                break;
            case "ST03":
                MS4_cost   =   cost_ST03[MS4_ban];
                MS4_moVEB   = moVEB_ST03[MS4_ban];
                MS4_long   =   long_ST03[MS4_ban];
                MS4_middle = middle_ST03[MS4_ban];
                MS4_hp     =     hp_ST03[MS4_ban];
                MS4_link_a = link_a_ST03[MS4_ban];
                MS4_link_b = link_b_ST03[MS4_ban];
                break;
            default:
                MS4_cost   = "-";
                MS4_move   = "-";
                MS4_long   = "-";
                MS4_middle = "-";
                MS4_hp     = "-";
                MS4_link_a = "-";
                MS4_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!MS4_cost){
                MS4_cost = "-";
            }
            if(!MS4_move){
                MS4_move = "-";
            }
            if(!MS4_long){
                MS4_long = "-";
            }
            if(!MS4_middle){
                MS4_middle = "-";
            }
            if(!MS4_hp){
                MS4_hp = "-";
            }
            if(!MS4_link_a){
                MS4_link_a = "-";
            }
            if(!MS4_link_b){
                MS4_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_MS4").textContent = MS4_cost;
        document.getElementById("move_MS4").textContent = MS4_move;
        document.getElementById("long_MS4").textContent = MS4_long;
        document.getElementById("middle_MS4").textContent = MS4_middle;
        document.getElementById("HP_MS4").textContent = MS4_hp;
        document.getElementById("link_MSa4").textContent = MS4_link_a;
        document.getElementById("link_MSb4").textContent = MS4_link_b;
        }
        //MS5
        MS5_dan = document.getElementById("MS5_dan").value;
        if(MS5_dan){
            console.log(MS5_dan);
        }else{
            MS5_dan = "null";
            document.getElementById("MS5g").src = "blank.png";
        }
        MS5_ban = document.getElementById("MS5_ban").value;
        if(MS5_ban){
            console.log(MS5_ban);
        }else{
            MS5_ban = "null";
            document.getElementById("MS5g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(MS5_dan != "null" & MS5_ban != "null"){
            console.log(MS5_dan + "-" + MS5_ban);
            document.getElementById("MS5g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + MS5_dan + "-" + MS5_ban + ".png";
            await sleep(10);
            joutai_MS5 = document.getElementById('MS5g');
            console.log(joutai_MS5);
            if (joutai_MS5.complete && joutai_MS5.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("MS5g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        MS5_ban = Number(MS5_ban);
        switch (MS5_dan){
            case "AB01":
                MS5_cost   =   cost_AB01[MS5_ban];
                MS5_move   =   move_AB01[MS5_ban];
                MS5_long   =   long_AB01[MS5_ban];
                MS5_middle = middle_AB01[MS5_ban];
                MS5_hp     =     hp_AB01[MS5_ban];
                MS5_link_a = link_a_AB01[MS5_ban];
                MS5_link_b = link_b_AB01[MS5_ban];
                break;
            case "AB02":
                MS5_cost   =   cost_AB02[MS5_ban];
                MS5_move   =   move_AB02[MS5_ban];
                MS5_long   =   long_AB02[MS5_ban];
                MS5_middle = middle_AB02[MS5_ban];
                MS5_hp     =     hp_AB02[MS5_ban];
                MS5_link_a = link_a_AB02[MS5_ban];
                MS5_link_b = link_b_AB02[MS5_ban];
                break;
            case "AB03":
                MS5_cost   =   cost_AB03[MS5_ban];
                MS5_move   =   move_AB03[MS5_ban];
                MS5_long   =   long_AB03[MS5_ban];
                MS5_middle = middle_AB03[MS5_ban];
                MS5_hp     =     hp_AB03[MS5_ban];
                MS5_link_a = link_a_AB03[MS5_ban];
                MS5_link_b = link_b_AB03[MS5_ban];
                break;
            case "AB04":
                MS5_cost   =   cost_AB04[MS5_ban];
                MS5_move   =   move_AB04[MS5_ban];
                MS5_long   =   long_AB04[MS5_ban];
                MS5_middle = middle_AB04[MS5_ban];
                MS5_hp     =     hp_AB04[MS5_ban];
                MS5_link_a = link_a_AB04[MS5_ban];
                MS5_link_b = link_b_AB04[MS5_ban];
                break;
            case "LX01":
                MS5_cost   =   cost_LX01[MS5_ban];
                MS5_move   =   move_LX01[MS5_ban];
                MS5_long   =   long_LX01[MS5_ban];
                MS5_middle = middle_LX01[MS5_ban];
                MS5_hp     =     hp_LX01[MS5_ban];
                MS5_link_a = link_a_LX01[MS5_ban];
                MS5_link_b = link_b_LX01[MS5_ban];
                break;
            case "LX02":
                MS5_cost   =   cost_LX02[MS5_ban];
                MS5_move   =   move_LX02[MS5_ban];
                MS5_long   =   long_LX02[MS5_ban];
                MS5_middle = middle_LX02[MS5_ban];
                MS5_hp     =     hp_LX02[MS5_ban];
                MS5_link_a = link_a_LX02[MS5_ban];
                MS5_link_b = link_b_LX02[MS5_ban];
                break;
            case "LX03":
                MS5_cost   =   cost_LX03[MS5_ban];
                MS5_move   =   move_LX03[MS5_ban];
                MS5_long   =   long_LX03[MS5_ban];
                MS5_middle = middle_LX03[MS5_ban];
                MS5_hp     =     hp_LX03[MS5_ban];
                MS5_link_a = link_a_LX03[MS5_ban];
                MS5_link_b = link_b_LX03[MS5_ban];
                break;
            case "LX04":
                MS5_cost   =   cost_LX04[MS5_ban];
                MS5_move   =   move_LX04[MS5_ban];
                MS5_long   =   long_LX04[MS5_ban];
                MS5_middle = middle_LX04[MS5_ban];
                MS5_hp     =     hp_LX04[MS5_ban];
                MS5_link_a = link_a_LX04[MS5_ban];
                MS5_link_b = link_b_LX04[MS5_ban];
                break;
            case "UT01":
                MS5_cost   =   cost_UT01[MS5_ban];
                MS5_move   =   move_UT01[MS5_ban];
                MS5_long   =   long_UT01[MS5_ban];
                MS5_middle = middle_UT01[MS5_ban];
                MS5_hp     =     hp_UT01[MS5_ban];
                MS5_link_a = link_a_UT01[MS5_ban];
                MS5_link_b = link_b_UT01[MS5_ban];
                break;
            case "UT02":
                MS5_cost   =   cost_UT02[MS5_ban];
                MS5_move   =   move_UT02[MS5_ban];
                MS5_long   =   long_UT02[MS5_ban];
                MS5_middle = middle_UT02[MS5_ban];
                MS5_hp     =     hp_UT02[MS5_ban];
                MS5_link_a = link_a_UT02[MS5_ban];
                MS5_link_b = link_b_UT02[MS5_ban];
                break;
            case "UT03":
                MS5_cost   =   cost_UT03[MS5_ban];
                MS5_move   =   move_UT03[MS5_ban];
                MS5_long   =   long_UT03[MS5_ban];
                MS5_middle = middle_UT03[MS5_ban];
                MS5_hp     =     hp_UT03[MS5_ban];
                MS5_link_a = link_a_UT03[MS5_ban];
                MS5_link_b = link_b_UT03[MS5_ban];
                break;
            case "UT04":
                MS5_cost   =   cost_UT04[MS5_ban];
                MS5_move   =   move_UT04[MS5_ban];
                MS5_long   =   long_UT04[MS5_ban];
                MS5_middle = middle_UT04[MS5_ban];
                MS5_hp     =     hp_UT04[MS5_ban];
                MS5_link_a = link_a_UT04[MS5_ban];
                MS5_link_b = link_b_UT04[MS5_ban];
                break;
            case "UT05":
                MS5_cost   =   cost_UT05[MS5_ban];
                MS5_move   =   move_UT05[MS5_ban];
                MS5_long   =   long_UT05[MS5_ban];
                MS5_middle = middle_UT05[MS5_ban];
                MS5_hp     =     hp_UT05[MS5_ban];
                MS5_link_a = link_a_UT05[MS5_ban];
                MS5_link_b = link_b_UT05[MS5_ban];
                break;
            case "UT06":
                MS5_cost   =   cost_UT06[MS5_ban];
                MS5_move   =   move_UT06[MS5_ban];
                MS5_long   =   long_UT06[MS5_ban];
                MS5_middle = middle_UT06[MS5_ban];
                MS5_hp     =     hp_UT06[MS5_ban];
                MS5_link_a = link_a_UT06[MS5_ban];
                MS5_link_b = link_b_UT06[MS5_ban];
                break;
            case "FQ01":
                MS5_cost   =   cost_FQ01[MS5_ban];
                MS5_move   =   move_FQ01[MS5_ban];
                MS5_long   =   long_FQ01[MS5_ban];
                MS5_middle = middle_FQ01[MS5_ban];
                MS5_hp     =     hp_FQ01[MS5_ban];
                MS5_link_a = link_a_FQ01[MS5_ban];
                MS5_link_b = link_b_FQ01[MS5_ban];
                break;
            case "FQ02":
                MS5_cost   =   cost_FQ02[MS5_ban];
                MS5_move   =   move_FQ02[MS5_ban];
                MS5_long   =   long_FQ02[MS5_ban];
                MS5_middle = middle_FQ02[MS5_ban];
                MS5_hp     =     hp_FQ02[MS5_ban];
                MS5_link_a = link_a_FQ02[MS5_ban];
                MS5_link_b = link_b_FQ02[MS5_ban];
                break;
            case "FQ03":
                MS5_cost   =   cost_FQ03[MS5_ban];
                MS5_move   =   move_FQ03[MS5_ban];
                MS5_long   =   long_FQ03[MS5_ban];
                MS5_middle = middle_FQ03[MS5_ban];
                MS5_hp     =     hp_FQ03[MS5_ban];
                MS5_link_a = link_a_FQ03[MS5_ban];
                MS5_link_b = link_b_FQ03[MS5_ban];
                break;
            case "FQ04":
                MS5_cost   =   cost_FQ04[MS5_ban];
                MS5_move   =   move_FQ04[MS5_ban];
                MS5_long   =   long_FQ04[MS5_ban];
                MS5_middle = middle_FQ04[MS5_ban];
                MS5_hp     =     hp_FQ04[MS5_ban];
                MS5_link_a = link_a_FQ04[MS5_ban];
                MS5_link_b = link_b_FQ04[MS5_ban];
                break;
            case "FQ05":
                MS5_cost   =   cost_FQ05[MS5_ban];
                MS5_move   =   move_FQ05[MS5_ban];
                MS5_long   =   long_FQ05[MS5_ban];
                MS5_middle = middle_FQ05[MS5_ban];
                MS5_hp     =     hp_FQ05[MS5_ban];
                MS5_link_a = link_a_FQ05[MS5_ban];
                MS5_link_b = link_b_FQ05[MS5_ban];
                break;
            case "FQ06":
                MS5_cost   =   cost_FQ06[MS5_ban];
                MS5_move   =   move_FQ06[MS5_ban];
                MS5_long   =   long_FQ06[MS5_ban];
                MS5_middle = middle_FQ06[MS5_ban];
                MS5_hp     =     hp_FQ06[MS5_ban];
                MS5_link_a = link_a_FQ06[MS5_ban];
                MS5_link_b = link_b_FQ06[MS5_ban];
                break;
            case "VE01":
                MS5_cost   =   cost_VE01[MS5_ban];
                MS5_move   =   move_VE01[MS5_ban];
                MS5_long   =   long_VE01[MS5_ban];
                MS5_middle = middle_VE01[MS5_ban];
                MS5_hp     =     hp_VE01[MS5_ban];
                MS5_link_a = link_a_VE01[MS5_ban];
                MS5_link_b = link_b_VE01[MS5_ban];
                break;
            case "AR01":
                MS5_cost   =   cost_AR01[MS5_ban];
                MS5_moVEB   =   moVEB_AR01[MS5_ban];
                MS5_long   =   long_AR01[MS5_ban];
                MS5_middle = middle_AR01[MS5_ban];
                MS5_hp     =     hp_AR01[MS5_ban];
                MS5_link_a = link_a_AR01[MS5_ban];
                MS5_link_b = link_b_AR01[MS5_ban];
                break;
            case "AR02":
                MS5_cost   =   cost_AR02[MS5_ban];
                MS5_moVEB   =   moVEB_AR02[MS5_ban];
                MS5_long   =   long_AR02[MS5_ban];
                MS5_middle = middle_AR02[MS5_ban];
                MS5_hp     =     hp_AR02[MS5_ban];
                MS5_link_a = link_a_AR02[MS5_ban];
                MS5_link_b = link_b_AR02[MS5_ban];
                break;
            case "AR03":
                MS5_cost   =   cost_AR03[MS5_ban];
                MS5_moVEB   =   moVEB_AR03[MS5_ban];
                MS5_long   =   long_AR03[MS5_ban];
                MS5_middle = middle_AR03[MS5_ban];
                MS5_hp     =     hp_AR03[MS5_ban];
                MS5_link_a = link_a_AR03[MS5_ban];
                MS5_link_b = link_b_AR03[MS5_ban];
                break;
            case "AR04":
                MS5_cost   =   cost_AR04[MS5_ban];
                MS5_moVEB   =   moVEB_AR04[MS5_ban];
                MS5_long   =   long_AR04[MS5_ban];
                MS5_middle = middle_AR04[MS5_ban];
                MS5_hp     =     hp_AR04[MS5_ban];
                MS5_link_a = link_a_AR04[MS5_ban];
                MS5_link_b = link_b_AR04[MS5_ban];
                break;
            case "LXR01":
                MS5_cost   =   cost_LXR01[MS5_ban];
                MS5_moVEB   =   moVEB_LXR01[MS5_ban];
                MS5_long   =   long_LXR01[MS5_ban];
                MS5_middle = middle_LXR01[MS5_ban];
                MS5_hp     =     hp_LXR01[MS5_ban];
                MS5_link_a = link_a_LXR01[MS5_ban];
                MS5_link_b = link_b_LXR01[MS5_ban];
                break;
            case "LXR02":
                MS5_cost   =   cost_LXR02[MS5_ban];
                MS5_moVEB   =   moVEB_LXR02[MS5_ban];
                MS5_long   =   long_LXR02[MS5_ban];
                MS5_middle = middle_LXR02[MS5_ban];
                MS5_hp     =     hp_LXR02[MS5_ban];
                MS5_link_a = link_a_LXR02[MS5_ban];
                MS5_link_b = link_b_LXR02[MS5_ban];
                break;
            case "LXR03":
                MS5_cost   =   cost_LXR03[MS5_ban];
                MS5_moVEB   =   moVEB_LXR03[MS5_ban];
                MS5_long   =   long_LXR03[MS5_ban];
                MS5_middle = middle_LXR03[MS5_ban];
                MS5_hp     =     hp_LXR03[MS5_ban];
                MS5_link_a = link_a_LXR03[MS5_ban];
                MS5_link_b = link_b_LXR03[MS5_ban];
                break;
            case "LXR04":
                MS5_cost   =   cost_LXR04[MS5_ban];
                MS5_moVEB   =   moVEB_LXR04[MS5_ban];
                MS5_long   =   long_LXR04[MS5_ban];
                MS5_middle = middle_LXR04[MS5_ban];
                MS5_hp     =     hp_LXR04[MS5_ban];
                MS5_link_a = link_a_LXR04[MS5_ban];
                MS5_link_b = link_b_LXR04[MS5_ban];
                break;
            case "UTB01":
                MS5_cost   =   cost_UTB01[MS5_ban];
                MS5_moVEB   =   moVEB_UTB01[MS5_ban];
                MS5_long   =   long_UTB01[MS5_ban];
                MS5_middle = middle_UTB01[MS5_ban];
                MS5_hp     =     hp_UTB01[MS5_ban];
                MS5_link_a = link_a_UTB01[MS5_ban];
                MS5_link_b = link_b_UTB01[MS5_ban];
                break;
            case "UTB02":
                MS5_cost   =   cost_UTB02[MS5_ban];
                MS5_moVEB   =   moVEB_UTB02[MS5_ban];
                MS5_long   =   long_UTB02[MS5_ban];
                MS5_middle = middle_UTB02[MS5_ban];
                MS5_hp     =     hp_UTB02[MS5_ban];
                MS5_link_a = link_a_UTB02[MS5_ban];
                MS5_link_b = link_b_UTB02[MS5_ban];
                break;
            case "UTB03":
                MS5_cost   =   cost_UTB03[MS5_ban];
                MS5_moVEB   =   moVEB_UTB03[MS5_ban];
                MS5_long   =   long_UTB03[MS5_ban];
                MS5_middle = middle_UTB03[MS5_ban];
                MS5_hp     =     hp_UTB03[MS5_ban];
                MS5_link_a = link_a_UTB03[MS5_ban];
                MS5_link_b = link_b_UTB03[MS5_ban];
                break;
            case "UTB04":
                MS5_cost   =   cost_UTB04[MS5_ban];
                MS5_moVEB   =   moVEB_UTB04[MS5_ban];
                MS5_long   =   long_UTB04[MS5_ban];
                MS5_middle = middle_UTB04[MS5_ban];
                MS5_hp     =     hp_UTB04[MS5_ban];
                MS5_link_a = link_a_UTB04[MS5_ban];
                MS5_link_b = link_b_UTB04[MS5_ban];
                break;
            case "UTB05":
                MS5_cost   =   cost_UTB05[MS5_ban];
                MS5_moVEB   =   moVEB_UTB05[MS5_ban];
                MS5_long   =   long_UTB05[MS5_ban];
                MS5_middle = middle_UTB05[MS5_ban];
                MS5_hp     =     hp_UTB05[MS5_ban];
                MS5_link_a = link_a_UTB05[MS5_ban];
                MS5_link_b = link_b_UTB05[MS5_ban];
                break;
            case "UTB06":
                MS5_cost   =   cost_UTB06[MS5_ban];
                MS5_moVEB   =   moVEB_UTB06[MS5_ban];
                MS5_long   =   long_UTB06[MS5_ban];
                MS5_middle = middle_UTB06[MS5_ban];
                MS5_hp     =     hp_UTB06[MS5_ban];
                MS5_link_a = link_a_UTB06[MS5_ban];
                MS5_link_b = link_b_UTB06[MS5_ban];
                break;
            case "FQB01":
                MS5_cost   =   cost_FQB01[MS5_ban];
                MS5_moVEB   =   moVEB_FQB01[MS5_ban];
                MS5_long   =   long_FQB01[MS5_ban];
                MS5_middle = middle_FQB01[MS5_ban];
                MS5_hp     =     hp_FQB01[MS5_ban];
                MS5_link_a = link_a_FQB01[MS5_ban];
                MS5_link_b = link_b_FQB01[MS5_ban];
                break;
            case "FQB02":
                MS5_cost   =   cost_FQB02[MS5_ban];
                MS5_moVEB   =   moVEB_FQB02[MS5_ban];
                MS5_long   =   long_FQB02[MS5_ban];
                MS5_middle = middle_FQB02[MS5_ban];
                MS5_hp     =     hp_FQB02[MS5_ban];
                MS5_link_a = link_a_FQB02[MS5_ban];
                MS5_link_b = link_b_FQB02[MS5_ban];
                break;
            case "FQB03":
                MS5_cost   =   cost_FQB03[MS5_ban];
                MS5_moVEB   =   moVEB_FQB03[MS5_ban];
                MS5_long   =   long_FQB03[MS5_ban];
                MS5_middle = middle_FQB03[MS5_ban];
                MS5_hp     =     hp_FQB03[MS5_ban];
                MS5_link_a = link_a_FQB03[MS5_ban];
                MS5_link_b = link_b_FQB03[MS5_ban];
                break;
            case "FQB04":
                MS5_cost   =   cost_FQB04[MS5_ban];
                MS5_moVEB   =   moVEB_FQB04[MS5_ban];
                MS5_long   =   long_FQB04[MS5_ban];
                MS5_middle = middle_FQB04[MS5_ban];
                MS5_hp     =     hp_FQB04[MS5_ban];
                MS5_link_a = link_a_FQB04[MS5_ban];
                MS5_link_b = link_b_FQB04[MS5_ban];
                break;
            case "FQB05":
                MS5_cost   =   cost_FQB05[MS5_ban];
                MS5_moVEB   =   moVEB_FQB05[MS5_ban];
                MS5_long   =   long_FQB05[MS5_ban];
                MS5_middle = middle_FQB05[MS5_ban];
                MS5_hp     =     hp_FQB05[MS5_ban];
                MS5_link_a = link_a_FQB05[MS5_ban];
                MS5_link_b = link_b_FQB05[MS5_ban];
                break;
            case "FQB06":
                MS5_cost   =   cost_FQB06[MS5_ban];
                MS5_moVEB   =   moVEB_FQB06[MS5_ban];
                MS5_long   =   long_FQB06[MS5_ban];
                MS5_middle = middle_FQB06[MS5_ban];
                MS5_hp     =     hp_FQB06[MS5_ban];
                MS5_link_a = link_a_FQB06[MS5_ban];
                MS5_link_b = link_b_FQB06[MS5_ban];
                break;
            case "VEB01":
                MS5_cost   =   cost_VEB01[MS5_ban];
                MS5_moVEB   =   moVEB_VEB01[MS5_ban];
                MS5_long   =   long_VEB01[MS5_ban];
                MS5_middle = middle_VEB01[MS5_ban];
                MS5_hp     =     hp_VEB01[MS5_ban];
                MS5_link_a = link_a_VEB01[MS5_ban];
                MS5_link_b = link_b_VEB01[MS5_ban];
                break;
            case "BP01":
                MS5_cost   =   cost_BP01[MS5_ban];
                MS5_moVEB   =   moVEB_BP01[MS5_ban];
                MS5_long   =   long_BP01[MS5_ban];
                MS5_middle = middle_BP01[MS5_ban];
                MS5_hp     =     hp_BP01[MS5_ban];
                MS5_link_a = link_a_BP01[MS5_ban];
                MS5_link_b = link_b_BP01[MS5_ban];
                break;
            case "BP02":
                MS5_cost   =   cost_BP02[MS5_ban];
                MS5_moVEB   = moVEB_BP02[MS5_ban];
                MS5_long   =   long_BP02[MS5_ban];
                MS5_middle = middle_BP02[MS5_ban];
                MS5_hp     =     hp_BP02[MS5_ban];
                MS5_link_a = link_a_BP02[MS5_ban];
                MS5_link_b = link_b_BP02[MS5_ban];
                break;
            case "BP03":
                MS5_cost   =   cost_BP03[MS5_ban];
                MS5_moVEB   = moVEB_BP03[MS5_ban];
                MS5_long   =   long_BP03[MS5_ban];
                MS5_middle = middle_BP03[MS5_ban];
                MS5_hp     =     hp_BP03[MS5_ban];
                MS5_link_a = link_a_BP03[MS5_ban];
                MS5_link_b = link_b_BP03[MS5_ban];
                break;
            case "BP04":
                MS5_cost   =   cost_BP04[MS5_ban];
                MS5_moVEB   = moVEB_BP04[MS5_ban];
                MS5_long   =   long_BP04[MS5_ban];
                MS5_middle = middle_BP04[MS5_ban];
                MS5_hp     =     hp_BP04[MS5_ban];
                MS5_link_a = link_a_BP04[MS5_ban];
                MS5_link_b = link_b_BP04[MS5_ban];
                break;
            case "BP05":
                MS5_cost   =   cost_BP05[MS5_ban];
                MS5_moVEB   = moVEB_BP05[MS5_ban];
                MS5_long   =   long_BP05[MS5_ban];
                MS5_middle = middle_BP05[MS5_ban];
                MS5_hp     =     hp_BP05[MS5_ban];
                MS5_link_a = link_a_BP05[MS5_ban];
                MS5_link_b = link_b_BP05[MS5_ban];
                break;
            case "BP06":
                MS5_cost   =   cost_BP06[MS5_ban];
                MS5_moVEB   = moVEB_BP06[MS5_ban];
                MS5_long   =   long_BP06[MS5_ban];
                MS5_middle = middle_BP06[MS5_ban];
                MS5_hp     =     hp_BP06[MS5_ban];
                MS5_link_a = link_a_BP06[MS5_ban];
                MS5_link_b = link_b_BP06[MS5_ban];
                break;
            case "PR":
                MS5_cost   =   cost_PR[MS5_ban];
                MS5_moVEB   =   moVEB_PR[MS5_ban];
                MS5_long   =   long_PR[MS5_ban];
                MS5_middle = middle_PR[MS5_ban];
                MS5_hp     =     hp_PR[MS5_ban];
                MS5_link_a = link_a_PR[MS5_ban];
                MS5_link_b = link_b_PR[MS5_ban];
                break;
            case "TEST":
                MS5_cost   =   cost_TEST[MS5_ban];
                MS5_moVEB   = moVEB_TEST[MS5_ban];
                MS5_long   =   long_TEST[MS5_ban];
                MS5_middle = middle_TEST[MS5_ban];
                MS5_hp     =     hp_TEST[MS5_ban];
                MS5_link_a = link_a_TEST[MS5_ban];
                MS5_link_b = link_b_TEST[MS5_ban];
                break;
            case "TEST-A":
                MS5_cost   =   cost_TEST-a[MS5_ban];
                MS5_moVEB   = moVEB_TEST-a[MS5_ban];
                MS5_long   =   long_TEST-a[MS5_ban];
                MS5_middle = middle_TEST-a[MS5_ban];
                MS5_hp     =     hp_TEST-a[MS5_ban];
                MS5_link_a = link_a_TEST-a[MS5_ban];
                MS5_link_b = link_b_TEST-a[MS5_ban];
                break;
            case "ST01":
                MS5_cost   =   cost_ST01[MS5_ban];
                MS5_moVEB   = moVEB_ST01[MS5_ban];
                MS5_long   =   long_ST01[MS5_ban];
                MS5_middle = middle_ST01[MS5_ban];
                MS5_hp     =     hp_ST01[MS5_ban];
                MS5_link_a = link_a_ST01[MS5_ban];
                MS5_link_b = link_b_ST01[MS5_ban];
                break;
            case "ST02":
                MS5_cost   =   cost_ST02[MS5_ban];
                MS5_moVEB   = moVEB_ST02[MS5_ban];
                MS5_long   =   long_ST02[MS5_ban];
                MS5_middle = middle_ST02[MS5_ban];
                MS5_hp     =     hp_ST02[MS5_ban];
                MS5_link_a = link_a_ST02[MS5_ban];
                MS5_link_b = link_b_ST02[MS5_ban];
                break;
            case "ST03":
                MS5_cost   =   cost_ST03[MS5_ban];
                MS5_moVEB   = moVEB_ST03[MS5_ban];
                MS5_long   =   long_ST03[MS5_ban];
                MS5_middle = middle_ST03[MS5_ban];
                MS5_hp     =     hp_ST03[MS5_ban];
                MS5_link_a = link_a_ST03[MS5_ban];
                MS5_link_b = link_b_ST03[MS5_ban];
                break;
            default:
                MS5_cost   = "-";
                MS5_move   = "-";
                MS5_long   = "-";
                MS5_middle = "-";
                MS5_hp     = "-";
                MS5_link_a = "-";
                MS5_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!MS5_cost){
                MS5_cost = "-";
            }
            if(!MS5_move){
                MS5_move = "-";
            }
            if(!MS5_long){
                MS5_long = "-";
            }
            if(!MS5_middle){
                MS5_middle = "-";
            }
            if(!MS5_hp){
                MS5_hp = "-";
            }
            if(!MS5_link_a){
                MS5_link_a = "-";
            }
            if(!MS5_link_b){
                MS5_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_MS5").textContent = MS5_cost;
        document.getElementById("move_MS5").textContent = MS5_move;
        document.getElementById("long_MS5").textContent = MS5_long;
        document.getElementById("middle_MS5").textContent = MS5_middle;
        document.getElementById("HP_MS5").textContent = MS5_hp;
        document.getElementById("link_MSa5").textContent = MS5_link_a;
        document.getElementById("link_MSb5").textContent = MS5_link_b;
        }
        //PL1
        PL1_dan = document.getElementById("PL1_dan").value;
        if(PL1_dan){
            console.log(PL1_dan);
        }else{
            PL1_dan = "null";
            document.getElementById("PL1g").src = "blank.png";
        }
        PL1_ban = document.getElementById("PL1_ban").value;
        if(PL1_ban){
            console.log(PL1_ban);
        }else{
            PL1_ban = "null";
            document.getElementById("PL1g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(PL1_dan != "null" & PL1_ban != "null"){
            console.log(PL1_dan + "-" + PL1_ban);
            document.getElementById("PL1g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + PL1_dan + "-" + PL1_ban + ".png";
            await sleep(10);
            joutai_PL1 = document.getElementById('PL1g');
            console.log(joutai_PL1);
            if (joutai_PL1.complete && joutai_PL1.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("PL1g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        PL1_ban = Number(PL1_ban);
        switch (PL1_dan){
            case "AB01":
                PL1_cost   =   cost_AB01[PL1_ban];
                PL1_move   =   move_AB01[PL1_ban];
                PL1_long   =   long_AB01[PL1_ban];
                PL1_middle = middle_AB01[PL1_ban];
                PL1_hp     =     hp_AB01[PL1_ban];
                PL1_link_a = link_a_AB01[PL1_ban];
                PL1_link_b = link_b_AB01[PL1_ban];
                break;
            case "AB02":
                PL1_cost   =   cost_AB02[PL1_ban];
                PL1_move   =   move_AB02[PL1_ban];
                PL1_long   =   long_AB02[PL1_ban];
                PL1_middle = middle_AB02[PL1_ban];
                PL1_hp     =     hp_AB02[PL1_ban];
                PL1_link_a = link_a_AB02[PL1_ban];
                PL1_link_b = link_b_AB02[PL1_ban];
                break;
            case "AB03":
                PL1_cost   =   cost_AB03[PL1_ban];
                PL1_move   =   move_AB03[PL1_ban];
                PL1_long   =   long_AB03[PL1_ban];
                PL1_middle = middle_AB03[PL1_ban];
                PL1_hp     =     hp_AB03[PL1_ban];
                PL1_link_a = link_a_AB03[PL1_ban];
                PL1_link_b = link_b_AB03[PL1_ban];
                break;
            case "AB04":
                PL1_cost   =   cost_AB04[PL1_ban];
                PL1_move   =   move_AB04[PL1_ban];
                PL1_long   =   long_AB04[PL1_ban];
                PL1_middle = middle_AB04[PL1_ban];
                PL1_hp     =     hp_AB04[PL1_ban];
                PL1_link_a = link_a_AB04[PL1_ban];
                PL1_link_b = link_b_AB04[PL1_ban];
                break;
            case "LX01":
                PL1_cost   =   cost_LX01[PL1_ban];
                PL1_move   =   move_LX01[PL1_ban];
                PL1_long   =   long_LX01[PL1_ban];
                PL1_middle = middle_LX01[PL1_ban];
                PL1_hp     =     hp_LX01[PL1_ban];
                PL1_link_a = link_a_LX01[PL1_ban];
                PL1_link_b = link_b_LX01[PL1_ban];
                break;
            case "LX02":
                PL1_cost   =   cost_LX02[PL1_ban];
                PL1_move   =   move_LX02[PL1_ban];
                PL1_long   =   long_LX02[PL1_ban];
                PL1_middle = middle_LX02[PL1_ban];
                PL1_hp     =     hp_LX02[PL1_ban];
                PL1_link_a = link_a_LX02[PL1_ban];
                PL1_link_b = link_b_LX02[PL1_ban];
                break;
            case "LX03":
                PL1_cost   =   cost_LX03[PL1_ban];
                PL1_move   =   move_LX03[PL1_ban];
                PL1_long   =   long_LX03[PL1_ban];
                PL1_middle = middle_LX03[PL1_ban];
                PL1_hp     =     hp_LX03[PL1_ban];
                PL1_link_a = link_a_LX03[PL1_ban];
                PL1_link_b = link_b_LX03[PL1_ban];
                break;
            case "LX04":
                PL1_cost   =   cost_LX04[PL1_ban];
                PL1_move   =   move_LX04[PL1_ban];
                PL1_long   =   long_LX04[PL1_ban];
                PL1_middle = middle_LX04[PL1_ban];
                PL1_hp     =     hp_LX04[PL1_ban];
                PL1_link_a = link_a_LX04[PL1_ban];
                PL1_link_b = link_b_LX04[PL1_ban];
                break;
            case "UT01":
                PL1_cost   =   cost_UT01[PL1_ban];
                PL1_move   =   move_UT01[PL1_ban];
                PL1_long   =   long_UT01[PL1_ban];
                PL1_middle = middle_UT01[PL1_ban];
                PL1_hp     =     hp_UT01[PL1_ban];
                PL1_link_a = link_a_UT01[PL1_ban];
                PL1_link_b = link_b_UT01[PL1_ban];
                break;
            case "UT02":
                PL1_cost   =   cost_UT02[PL1_ban];
                PL1_move   =   move_UT02[PL1_ban];
                PL1_long   =   long_UT02[PL1_ban];
                PL1_middle = middle_UT02[PL1_ban];
                PL1_hp     =     hp_UT02[PL1_ban];
                PL1_link_a = link_a_UT02[PL1_ban];
                PL1_link_b = link_b_UT02[PL1_ban];
                break;
            case "UT03":
                PL1_cost   =   cost_UT03[PL1_ban];
                PL1_move   =   move_UT03[PL1_ban];
                PL1_long   =   long_UT03[PL1_ban];
                PL1_middle = middle_UT03[PL1_ban];
                PL1_hp     =     hp_UT03[PL1_ban];
                PL1_link_a = link_a_UT03[PL1_ban];
                PL1_link_b = link_b_UT03[PL1_ban];
                break;
            case "UT04":
                PL1_cost   =   cost_UT04[PL1_ban];
                PL1_move   =   move_UT04[PL1_ban];
                PL1_long   =   long_UT04[PL1_ban];
                PL1_middle = middle_UT04[PL1_ban];
                PL1_hp     =     hp_UT04[PL1_ban];
                PL1_link_a = link_a_UT04[PL1_ban];
                PL1_link_b = link_b_UT04[PL1_ban];
                break;
            case "UT05":
                PL1_cost   =   cost_UT05[PL1_ban];
                PL1_move   =   move_UT05[PL1_ban];
                PL1_long   =   long_UT05[PL1_ban];
                PL1_middle = middle_UT05[PL1_ban];
                PL1_hp     =     hp_UT05[PL1_ban];
                PL1_link_a = link_a_UT05[PL1_ban];
                PL1_link_b = link_b_UT05[PL1_ban];
                break;
            case "UT06":
                PL1_cost   =   cost_UT06[PL1_ban];
                PL1_move   =   move_UT06[PL1_ban];
                PL1_long   =   long_UT06[PL1_ban];
                PL1_middle = middle_UT06[PL1_ban];
                PL1_hp     =     hp_UT06[PL1_ban];
                PL1_link_a = link_a_UT06[PL1_ban];
                PL1_link_b = link_b_UT06[PL1_ban];
                break;
            case "FQ01":
                PL1_cost   =   cost_FQ01[PL1_ban];
                PL1_move   =   move_FQ01[PL1_ban];
                PL1_long   =   long_FQ01[PL1_ban];
                PL1_middle = middle_FQ01[PL1_ban];
                PL1_hp     =     hp_FQ01[PL1_ban];
                PL1_link_a = link_a_FQ01[PL1_ban];
                PL1_link_b = link_b_FQ01[PL1_ban];
                break;
            case "FQ02":
                PL1_cost   =   cost_FQ02[PL1_ban];
                PL1_move   =   move_FQ02[PL1_ban];
                PL1_long   =   long_FQ02[PL1_ban];
                PL1_middle = middle_FQ02[PL1_ban];
                PL1_hp     =     hp_FQ02[PL1_ban];
                PL1_link_a = link_a_FQ02[PL1_ban];
                PL1_link_b = link_b_FQ02[PL1_ban];
                break;
            case "FQ03":
                PL1_cost   =   cost_FQ03[PL1_ban];
                PL1_move   =   move_FQ03[PL1_ban];
                PL1_long   =   long_FQ03[PL1_ban];
                PL1_middle = middle_FQ03[PL1_ban];
                PL1_hp     =     hp_FQ03[PL1_ban];
                PL1_link_a = link_a_FQ03[PL1_ban];
                PL1_link_b = link_b_FQ03[PL1_ban];
                break;
            case "FQ04":
                PL1_cost   =   cost_FQ04[PL1_ban];
                PL1_move   =   move_FQ04[PL1_ban];
                PL1_long   =   long_FQ04[PL1_ban];
                PL1_middle = middle_FQ04[PL1_ban];
                PL1_hp     =     hp_FQ04[PL1_ban];
                PL1_link_a = link_a_FQ04[PL1_ban];
                PL1_link_b = link_b_FQ04[PL1_ban];
                break;
            case "FQ05":
                PL1_cost   =   cost_FQ05[PL1_ban];
                PL1_move   =   move_FQ05[PL1_ban];
                PL1_long   =   long_FQ05[PL1_ban];
                PL1_middle = middle_FQ05[PL1_ban];
                PL1_hp     =     hp_FQ05[PL1_ban];
                PL1_link_a = link_a_FQ05[PL1_ban];
                PL1_link_b = link_b_FQ05[PL1_ban];
                break;
            case "FQ06":
                PL1_cost   =   cost_FQ06[PL1_ban];
                PL1_move   =   move_FQ06[PL1_ban];
                PL1_long   =   long_FQ06[PL1_ban];
                PL1_middle = middle_FQ06[PL1_ban];
                PL1_hp     =     hp_FQ06[PL1_ban];
                PL1_link_a = link_a_FQ06[PL1_ban];
                PL1_link_b = link_b_FQ06[PL1_ban];
                break;
            case "VE01":
                PL1_cost   =   cost_VE01[PL1_ban];
                PL1_move   =   move_VE01[PL1_ban];
                PL1_long   =   long_VE01[PL1_ban];
                PL1_middle = middle_VE01[PL1_ban];
                PL1_hp     =     hp_VE01[PL1_ban];
                PL1_link_a = link_a_VE01[PL1_ban];
                PL1_link_b = link_b_VE01[PL1_ban];
                break;
            case "AR01":
                PL1_cost   =   cost_AR01[PL1_ban];
                PL1_moVEB   =   moVEB_AR01[PL1_ban];
                PL1_long   =   long_AR01[PL1_ban];
                PL1_middle = middle_AR01[PL1_ban];
                PL1_hp     =     hp_AR01[PL1_ban];
                PL1_link_a = link_a_AR01[PL1_ban];
                PL1_link_b = link_b_AR01[PL1_ban];
                break;
            case "AR02":
                PL1_cost   =   cost_AR02[PL1_ban];
                PL1_moVEB   =   moVEB_AR02[PL1_ban];
                PL1_long   =   long_AR02[PL1_ban];
                PL1_middle = middle_AR02[PL1_ban];
                PL1_hp     =     hp_AR02[PL1_ban];
                PL1_link_a = link_a_AR02[PL1_ban];
                PL1_link_b = link_b_AR02[PL1_ban];
                break;
            case "AR03":
                PL1_cost   =   cost_AR03[PL1_ban];
                PL1_moVEB   =   moVEB_AR03[PL1_ban];
                PL1_long   =   long_AR03[PL1_ban];
                PL1_middle = middle_AR03[PL1_ban];
                PL1_hp     =     hp_AR03[PL1_ban];
                PL1_link_a = link_a_AR03[PL1_ban];
                PL1_link_b = link_b_AR03[PL1_ban];
                break;
            case "AR04":
                PL1_cost   =   cost_AR04[PL1_ban];
                PL1_moVEB   =   moVEB_AR04[PL1_ban];
                PL1_long   =   long_AR04[PL1_ban];
                PL1_middle = middle_AR04[PL1_ban];
                PL1_hp     =     hp_AR04[PL1_ban];
                PL1_link_a = link_a_AR04[PL1_ban];
                PL1_link_b = link_b_AR04[PL1_ban];
                break;
            case "LXR01":
                PL1_cost   =   cost_LXR01[PL1_ban];
                PL1_moVEB   =   moVEB_LXR01[PL1_ban];
                PL1_long   =   long_LXR01[PL1_ban];
                PL1_middle = middle_LXR01[PL1_ban];
                PL1_hp     =     hp_LXR01[PL1_ban];
                PL1_link_a = link_a_LXR01[PL1_ban];
                PL1_link_b = link_b_LXR01[PL1_ban];
                break;
            case "LXR02":
                PL1_cost   =   cost_LXR02[PL1_ban];
                PL1_moVEB   =   moVEB_LXR02[PL1_ban];
                PL1_long   =   long_LXR02[PL1_ban];
                PL1_middle = middle_LXR02[PL1_ban];
                PL1_hp     =     hp_LXR02[PL1_ban];
                PL1_link_a = link_a_LXR02[PL1_ban];
                PL1_link_b = link_b_LXR02[PL1_ban];
                break;
            case "LXR03":
                PL1_cost   =   cost_LXR03[PL1_ban];
                PL1_moVEB   =   moVEB_LXR03[PL1_ban];
                PL1_long   =   long_LXR03[PL1_ban];
                PL1_middle = middle_LXR03[PL1_ban];
                PL1_hp     =     hp_LXR03[PL1_ban];
                PL1_link_a = link_a_LXR03[PL1_ban];
                PL1_link_b = link_b_LXR03[PL1_ban];
                break;
            case "LXR04":
                PL1_cost   =   cost_LXR04[PL1_ban];
                PL1_moVEB   =   moVEB_LXR04[PL1_ban];
                PL1_long   =   long_LXR04[PL1_ban];
                PL1_middle = middle_LXR04[PL1_ban];
                PL1_hp     =     hp_LXR04[PL1_ban];
                PL1_link_a = link_a_LXR04[PL1_ban];
                PL1_link_b = link_b_LXR04[PL1_ban];
                break;
            case "UTB01":
                PL1_cost   =   cost_UTB01[PL1_ban];
                PL1_moVEB   =   moVEB_UTB01[PL1_ban];
                PL1_long   =   long_UTB01[PL1_ban];
                PL1_middle = middle_UTB01[PL1_ban];
                PL1_hp     =     hp_UTB01[PL1_ban];
                PL1_link_a = link_a_UTB01[PL1_ban];
                PL1_link_b = link_b_UTB01[PL1_ban];
                break;
            case "UTB02":
                PL1_cost   =   cost_UTB02[PL1_ban];
                PL1_moVEB   =   moVEB_UTB02[PL1_ban];
                PL1_long   =   long_UTB02[PL1_ban];
                PL1_middle = middle_UTB02[PL1_ban];
                PL1_hp     =     hp_UTB02[PL1_ban];
                PL1_link_a = link_a_UTB02[PL1_ban];
                PL1_link_b = link_b_UTB02[PL1_ban];
                break;
            case "UTB03":
                PL1_cost   =   cost_UTB03[PL1_ban];
                PL1_moVEB   =   moVEB_UTB03[PL1_ban];
                PL1_long   =   long_UTB03[PL1_ban];
                PL1_middle = middle_UTB03[PL1_ban];
                PL1_hp     =     hp_UTB03[PL1_ban];
                PL1_link_a = link_a_UTB03[PL1_ban];
                PL1_link_b = link_b_UTB03[PL1_ban];
                break;
            case "UTB04":
                PL1_cost   =   cost_UTB04[PL1_ban];
                PL1_moVEB   =   moVEB_UTB04[PL1_ban];
                PL1_long   =   long_UTB04[PL1_ban];
                PL1_middle = middle_UTB04[PL1_ban];
                PL1_hp     =     hp_UTB04[PL1_ban];
                PL1_link_a = link_a_UTB04[PL1_ban];
                PL1_link_b = link_b_UTB04[PL1_ban];
                break;
            case "UTB05":
                PL1_cost   =   cost_UTB05[PL1_ban];
                PL1_moVEB   =   moVEB_UTB05[PL1_ban];
                PL1_long   =   long_UTB05[PL1_ban];
                PL1_middle = middle_UTB05[PL1_ban];
                PL1_hp     =     hp_UTB05[PL1_ban];
                PL1_link_a = link_a_UTB05[PL1_ban];
                PL1_link_b = link_b_UTB05[PL1_ban];
                break;
            case "UTB06":
                PL1_cost   =   cost_UTB06[PL1_ban];
                PL1_moVEB   =   moVEB_UTB06[PL1_ban];
                PL1_long   =   long_UTB06[PL1_ban];
                PL1_middle = middle_UTB06[PL1_ban];
                PL1_hp     =     hp_UTB06[PL1_ban];
                PL1_link_a = link_a_UTB06[PL1_ban];
                PL1_link_b = link_b_UTB06[PL1_ban];
                break;
            case "FQB01":
                PL1_cost   =   cost_FQB01[PL1_ban];
                PL1_moVEB   =   moVEB_FQB01[PL1_ban];
                PL1_long   =   long_FQB01[PL1_ban];
                PL1_middle = middle_FQB01[PL1_ban];
                PL1_hp     =     hp_FQB01[PL1_ban];
                PL1_link_a = link_a_FQB01[PL1_ban];
                PL1_link_b = link_b_FQB01[PL1_ban];
                break;
            case "FQB02":
                PL1_cost   =   cost_FQB02[PL1_ban];
                PL1_moVEB   =   moVEB_FQB02[PL1_ban];
                PL1_long   =   long_FQB02[PL1_ban];
                PL1_middle = middle_FQB02[PL1_ban];
                PL1_hp     =     hp_FQB02[PL1_ban];
                PL1_link_a = link_a_FQB02[PL1_ban];
                PL1_link_b = link_b_FQB02[PL1_ban];
                break;
            case "FQB03":
                PL1_cost   =   cost_FQB03[PL1_ban];
                PL1_moVEB   =   moVEB_FQB03[PL1_ban];
                PL1_long   =   long_FQB03[PL1_ban];
                PL1_middle = middle_FQB03[PL1_ban];
                PL1_hp     =     hp_FQB03[PL1_ban];
                PL1_link_a = link_a_FQB03[PL1_ban];
                PL1_link_b = link_b_FQB03[PL1_ban];
                break;
            case "FQB04":
                PL1_cost   =   cost_FQB04[PL1_ban];
                PL1_moVEB   =   moVEB_FQB04[PL1_ban];
                PL1_long   =   long_FQB04[PL1_ban];
                PL1_middle = middle_FQB04[PL1_ban];
                PL1_hp     =     hp_FQB04[PL1_ban];
                PL1_link_a = link_a_FQB04[PL1_ban];
                PL1_link_b = link_b_FQB04[PL1_ban];
                break;
            case "FQB05":
                PL1_cost   =   cost_FQB05[PL1_ban];
                PL1_moVEB   =   moVEB_FQB05[PL1_ban];
                PL1_long   =   long_FQB05[PL1_ban];
                PL1_middle = middle_FQB05[PL1_ban];
                PL1_hp     =     hp_FQB05[PL1_ban];
                PL1_link_a = link_a_FQB05[PL1_ban];
                PL1_link_b = link_b_FQB05[PL1_ban];
                break;
            case "FQB06":
                PL1_cost   =   cost_FQB06[PL1_ban];
                PL1_moVEB   =   move_FQB06[PL1_ban];
                PL1_long   =   long_FQB06[PL1_ban];
                PL1_middle = middle_FQB06[PL1_ban];
                PL1_hp     =     hp_FQB06[PL1_ban];
                PL1_link_a = link_a_FQB06[PL1_ban];
                PL1_link_b = link_b_FQB06[PL1_ban];
                break;
            case "VEB01":
                PL1_cost   =   cost_VEB01[PL1_ban];
                PL1_move   =   move_VEB01[PL1_ban];
                PL1_long   =   long_VEB01[PL1_ban];
                PL1_middle = middle_VEB01[PL1_ban];
                PL1_hp     =     hp_VEB01[PL1_ban];
                PL1_link_a = link_a_VEB01[PL1_ban];
                PL1_link_b = link_b_VEB01[PL1_ban];
                break;
            case "BP01":
                PL1_cost   =   cost_BP01[PL1_ban];
                PL1_move   =   move_BP01[PL1_ban];
                PL1_long   =   long_BP01[PL1_ban];
                PL1_middle = middle_BP01[PL1_ban];
                PL1_hp     =     hp_BP01[PL1_ban];
                PL1_link_a = link_a_BP01[PL1_ban];
                PL1_link_b = link_b_BP01[PL1_ban];
                break;
            case "BP02":
                PL1_cost   =   cost_BP02[PL1_ban];
                PL1_move   = move_BP02[PL1_ban];
                PL1_long   =   long_BP02[PL1_ban];
                PL1_middle = middle_BP02[PL1_ban];
                PL1_hp     =     hp_BP02[PL1_ban];
                PL1_link_a = link_a_BP02[PL1_ban];
                PL1_link_b = link_b_BP02[PL1_ban];
                break;
            case "BP03":
                PL1_cost   =   cost_BP03[PL1_ban];
                PL1_move   = moVEB_BP03[PL1_ban];
                PL1_long   =   long_BP03[PL1_ban];
                PL1_middle = middle_BP03[PL1_ban];
                PL1_hp     =     hp_BP03[PL1_ban];
                PL1_link_a = link_a_BP03[PL1_ban];
                PL1_link_b = link_b_BP03[PL1_ban];
                break;
            case "BP04":
                PL1_cost   =   cost_BP04[PL1_ban];
                PL1_move   = moVEB_BP04[PL1_ban];
                PL1_long   =   long_BP04[PL1_ban];
                PL1_middle = middle_BP04[PL1_ban];
                PL1_hp     =     hp_BP04[PL1_ban];
                PL1_link_a = link_a_BP04[PL1_ban];
                PL1_link_b = link_b_BP04[PL1_ban];
                break;
            case "BP05":
                PL1_cost   =   cost_BP05[PL1_ban];
                PL1_move   = moVEB_BP05[PL1_ban];
                PL1_long   =   long_BP05[PL1_ban];
                PL1_middle = middle_BP05[PL1_ban];
                PL1_hp     =     hp_BP05[PL1_ban];
                PL1_link_a = link_a_BP05[PL1_ban];
                PL1_link_b = link_b_BP05[PL1_ban];
                break;
            case "BP06":
                PL1_cost   =   cost_BP06[PL1_ban];
                PL1_move   = moVEB_BP06[PL1_ban];
                PL1_long   =   long_BP06[PL1_ban];
                PL1_middle = middle_BP06[PL1_ban];
                PL1_hp     =     hp_BP06[PL1_ban];
                PL1_link_a = link_a_BP06[PL1_ban];
                PL1_link_b = link_b_BP06[PL1_ban];
                break;
            case "PR":
                PL1_cost   =   cost_PR[PL1_ban];
                PL1_move   =   moVEB_PR[PL1_ban];
                PL1_long   =   long_PR[PL1_ban];
                PL1_middle = middle_PR[PL1_ban];
                PL1_hp     =     hp_PR[PL1_ban];
                PL1_link_a = link_a_PR[PL1_ban];
                PL1_link_b = link_b_PR[PL1_ban];
                break;
            case "TEST":
                PL1_cost   =   cost_TEST[PL1_ban];
                PL1_move   = moVEB_TEST[PL1_ban];
                PL1_long   =   long_TEST[PL1_ban];
                PL1_middle = middle_TEST[PL1_ban];
                PL1_hp     =     hp_TEST[PL1_ban];
                PL1_link_a = link_a_TEST[PL1_ban];
                PL1_link_b = link_b_TEST[PL1_ban];
                break;
            case "TEST-A":
                PL1_cost   =   cost_TEST-a[PL1_ban];
                PL1_move   = moVEB_TEST-a[PL1_ban];
                PL1_long   =   long_TEST-a[PL1_ban];
                PL1_middle = middle_TEST-a[PL1_ban];
                PL1_hp     =     hp_TEST-a[PL1_ban];
                PL1_link_a = link_a_TEST-a[PL1_ban];
                PL1_link_b = link_b_TEST-a[PL1_ban];
                break;
            case "ST01":
                PL1_cost   =   cost_ST01[PL1_ban];
                PL1_moVEB   = moVEB_ST01[PL1_ban];
                PL1_long   =   long_ST01[PL1_ban];
                PL1_middle = middle_ST01[PL1_ban];
                PL1_hp     =     hp_ST01[PL1_ban];
                PL1_link_a = link_a_ST01[PL1_ban];
                PL1_link_b = link_b_ST01[PL1_ban];
                break;
            case "ST02":
                PL1_cost   =   cost_ST02[PL1_ban];
                PL1_moVEB   = moVEB_ST02[PL1_ban];
                PL1_long   =   long_ST02[PL1_ban];
                PL1_middle = middle_ST02[PL1_ban];
                PL1_hp     =     hp_ST02[PL1_ban];
                PL1_link_a = link_a_ST02[PL1_ban];
                PL1_link_b = link_b_ST02[PL1_ban];
                break;
            case "ST03":
                PL1_cost   =   cost_ST03[PL1_ban];
                PL1_moVEB   = moVEB_ST03[PL1_ban];
                PL1_long   =   long_ST03[PL1_ban];
                PL1_middle = middle_ST03[PL1_ban];
                PL1_hp     =     hp_ST03[PL1_ban];
                PL1_link_a = link_a_ST03[PL1_ban];
                PL1_link_b = link_b_ST03[PL1_ban];
                break;
            default:
                PL1_cost   = "-";
                PL1_move   = "-";
                PL1_long   = "-";
                PL1_middle = "-";
                PL1_hp     = "-";
                PL1_link_a = "-";
                PL1_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!PL1_cost){
                PL1_cost = "-";
            }
            if(!PL1_move){
                PL1_move = "-";
            }
            if(!PL1_long){
                PL1_long = "-";
            }
            if(!PL1_middle){
                PL1_middle = "-";
            }
            if(!PL1_hp){
                PL1_hp = "-";
            }
            if(!PL1_link_a){
                PL1_link_a = "-";
            }
            if(!PL1_link_b){
                PL1_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_PL1").textContent = PL1_cost;
        document.getElementById("move_PL1").textContent = PL1_move;
        document.getElementById("long_PL1").textContent = PL1_long;
        document.getElementById("middle_PL1").textContent = PL1_middle;
        document.getElementById("HP_PL1").textContent = PL1_hp;
        document.getElementById("link_PLa1").textContent = PL1_link_a;
        document.getElementById("link_PLb1").textContent = PL1_link_b;
        }
        //PL2
        PL2_dan = document.getElementById("PL2_dan").value;
        if(PL2_dan){
            console.log(PL2_dan);
        }else{
            PL2_dan = "null";
            document.getElementById("PL2g").src = "blank.png";
        }
        PL2_ban = document.getElementById("PL2_ban").value;
        if(PL2_ban){
            console.log(PL2_ban);
        }else{
            PL2_ban = "null";
            document.getElementById("PL2g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(PL2_dan != "null" & PL2_ban != "null"){
            console.log(PL2_dan + "-" + PL2_ban);
            document.getElementById("PL2g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + PL2_dan + "-" + PL2_ban + ".png";
            await sleep(10);
            joutai_PL2 = document.getElementById('PL2g');
            console.log(joutai_PL2);
            if (joutai_PL2.complete && joutai_PL2.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("PL2g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        PL2_ban = Number(PL2_ban);
        switch (PL2_dan){
            case "AB01":
                PL2_cost   =   cost_AB01[PL2_ban];
                PL2_move   =   move_AB01[PL2_ban];
                PL2_long   =   long_AB01[PL2_ban];
                PL2_middle = middle_AB01[PL2_ban];
                PL2_hp     =     hp_AB01[PL2_ban];
                PL2_link_a = link_a_AB01[PL2_ban];
                PL2_link_b = link_b_AB01[PL2_ban];
                break;
            case "AB02":
                PL2_cost   =   cost_AB02[PL2_ban];
                PL2_move   =   move_AB02[PL2_ban];
                PL2_long   =   long_AB02[PL2_ban];
                PL2_middle = middle_AB02[PL2_ban];
                PL2_hp     =     hp_AB02[PL2_ban];
                PL2_link_a = link_a_AB02[PL2_ban];
                PL2_link_b = link_b_AB02[PL2_ban];
                break;
            case "AB03":
                PL2_cost   =   cost_AB03[PL2_ban];
                PL2_move   =   move_AB03[PL2_ban];
                PL2_long   =   long_AB03[PL2_ban];
                PL2_middle = middle_AB03[PL2_ban];
                PL2_hp     =     hp_AB03[PL2_ban];
                PL2_link_a = link_a_AB03[PL2_ban];
                PL2_link_b = link_b_AB03[PL2_ban];
                break;
            case "AB04":
                PL2_cost   =   cost_AB04[PL2_ban];
                PL2_move   =   move_AB04[PL2_ban];
                PL2_long   =   long_AB04[PL2_ban];
                PL2_middle = middle_AB04[PL2_ban];
                PL2_hp     =     hp_AB04[PL2_ban];
                PL2_link_a = link_a_AB04[PL2_ban];
                PL2_link_b = link_b_AB04[PL2_ban];
                break;
            case "LX01":
                PL2_cost   =   cost_LX01[PL2_ban];
                PL2_move   =   move_LX01[PL2_ban];
                PL2_long   =   long_LX01[PL2_ban];
                PL2_middle = middle_LX01[PL2_ban];
                PL2_hp     =     hp_LX01[PL2_ban];
                PL2_link_a = link_a_LX01[PL2_ban];
                PL2_link_b = link_b_LX01[PL2_ban];
                break;
            case "LX02":
                PL2_cost   =   cost_LX02[PL2_ban];
                PL2_move   =   move_LX02[PL2_ban];
                PL2_long   =   long_LX02[PL2_ban];
                PL2_middle = middle_LX02[PL2_ban];
                PL2_hp     =     hp_LX02[PL2_ban];
                PL2_link_a = link_a_LX02[PL2_ban];
                PL2_link_b = link_b_LX02[PL2_ban];
                break;
            case "LX03":
                PL2_cost   =   cost_LX03[PL2_ban];
                PL2_move   =   move_LX03[PL2_ban];
                PL2_long   =   long_LX03[PL2_ban];
                PL2_middle = middle_LX03[PL2_ban];
                PL2_hp     =     hp_LX03[PL2_ban];
                PL2_link_a = link_a_LX03[PL2_ban];
                PL2_link_b = link_b_LX03[PL2_ban];
                break;
            case "LX04":
                PL2_cost   =   cost_LX04[PL2_ban];
                PL2_move   =   move_LX04[PL2_ban];
                PL2_long   =   long_LX04[PL2_ban];
                PL2_middle = middle_LX04[PL2_ban];
                PL2_hp     =     hp_LX04[PL2_ban];
                PL2_link_a = link_a_LX04[PL2_ban];
                PL2_link_b = link_b_LX04[PL2_ban];
                break;
            case "UT01":
                PL2_cost   =   cost_UT01[PL2_ban];
                PL2_move   =   move_UT01[PL2_ban];
                PL2_long   =   long_UT01[PL2_ban];
                PL2_middle = middle_UT01[PL2_ban];
                PL2_hp     =     hp_UT01[PL2_ban];
                PL2_link_a = link_a_UT01[PL2_ban];
                PL2_link_b = link_b_UT01[PL2_ban];
                break;
            case "UT02":
                PL2_cost   =   cost_UT02[PL2_ban];
                PL2_move   =   move_UT02[PL2_ban];
                PL2_long   =   long_UT02[PL2_ban];
                PL2_middle = middle_UT02[PL2_ban];
                PL2_hp     =     hp_UT02[PL2_ban];
                PL2_link_a = link_a_UT02[PL2_ban];
                PL2_link_b = link_b_UT02[PL2_ban];
                break;
            case "UT03":
                PL2_cost   =   cost_UT03[PL2_ban];
                PL2_move   =   move_UT03[PL2_ban];
                PL2_long   =   long_UT03[PL2_ban];
                PL2_middle = middle_UT03[PL2_ban];
                PL2_hp     =     hp_UT03[PL2_ban];
                PL2_link_a = link_a_UT03[PL2_ban];
                PL2_link_b = link_b_UT03[PL2_ban];
                break;
            case "UT04":
                PL2_cost   =   cost_UT04[PL2_ban];
                PL2_move   =   move_UT04[PL2_ban];
                PL2_long   =   long_UT04[PL2_ban];
                PL2_middle = middle_UT04[PL2_ban];
                PL2_hp     =     hp_UT04[PL2_ban];
                PL2_link_a = link_a_UT04[PL2_ban];
                PL2_link_b = link_b_UT04[PL2_ban];
                break;
            case "UT05":
                PL2_cost   =   cost_UT05[PL2_ban];
                PL2_move   =   move_UT05[PL2_ban];
                PL2_long   =   long_UT05[PL2_ban];
                PL2_middle = middle_UT05[PL2_ban];
                PL2_hp     =     hp_UT05[PL2_ban];
                PL2_link_a = link_a_UT05[PL2_ban];
                PL2_link_b = link_b_UT05[PL2_ban];
                break;
            case "UT06":
                PL2_cost   =   cost_UT06[PL2_ban];
                PL2_move   =   move_UT06[PL2_ban];
                PL2_long   =   long_UT06[PL2_ban];
                PL2_middle = middle_UT06[PL2_ban];
                PL2_hp     =     hp_UT06[PL2_ban];
                PL2_link_a = link_a_UT06[PL2_ban];
                PL2_link_b = link_b_UT06[PL2_ban];
                break;
            case "FQ01":
                PL2_cost   =   cost_FQ01[PL2_ban];
                PL2_move   =   move_FQ01[PL2_ban];
                PL2_long   =   long_FQ01[PL2_ban];
                PL2_middle = middle_FQ01[PL2_ban];
                PL2_hp     =     hp_FQ01[PL2_ban];
                PL2_link_a = link_a_FQ01[PL2_ban];
                PL2_link_b = link_b_FQ01[PL2_ban];
                break;
            case "FQ02":
                PL2_cost   =   cost_FQ02[PL2_ban];
                PL2_move   =   move_FQ02[PL2_ban];
                PL2_long   =   long_FQ02[PL2_ban];
                PL2_middle = middle_FQ02[PL2_ban];
                PL2_hp     =     hp_FQ02[PL2_ban];
                PL2_link_a = link_a_FQ02[PL2_ban];
                PL2_link_b = link_b_FQ02[PL2_ban];
                break;
            case "FQ03":
                PL2_cost   =   cost_FQ03[PL2_ban];
                PL2_move   =   move_FQ03[PL2_ban];
                PL2_long   =   long_FQ03[PL2_ban];
                PL2_middle = middle_FQ03[PL2_ban];
                PL2_hp     =     hp_FQ03[PL2_ban];
                PL2_link_a = link_a_FQ03[PL2_ban];
                PL2_link_b = link_b_FQ03[PL2_ban];
                break;
            case "FQ04":
                PL2_cost   =   cost_FQ04[PL2_ban];
                PL2_move   =   move_FQ04[PL2_ban];
                PL2_long   =   long_FQ04[PL2_ban];
                PL2_middle = middle_FQ04[PL2_ban];
                PL2_hp     =     hp_FQ04[PL2_ban];
                PL2_link_a = link_a_FQ04[PL2_ban];
                PL2_link_b = link_b_FQ04[PL2_ban];
                break;
            case "FQ05":
                PL2_cost   =   cost_FQ05[PL2_ban];
                PL2_move   =   move_FQ05[PL2_ban];
                PL2_long   =   long_FQ05[PL2_ban];
                PL2_middle = middle_FQ05[PL2_ban];
                PL2_hp     =     hp_FQ05[PL2_ban];
                PL2_link_a = link_a_FQ05[PL2_ban];
                PL2_link_b = link_b_FQ05[PL2_ban];
                break;
            case "FQ06":
                PL2_cost   =   cost_FQ06[PL2_ban];
                PL2_move   =   move_FQ06[PL2_ban];
                PL2_long   =   long_FQ06[PL2_ban];
                PL2_middle = middle_FQ06[PL2_ban];
                PL2_hp     =     hp_FQ06[PL2_ban];
                PL2_link_a = link_a_FQ06[PL2_ban];
                PL2_link_b = link_b_FQ06[PL2_ban];
                break;
            case "VE01":
                PL2_cost   =   cost_VE01[PL2_ban];
                PL2_move   =   move_VE01[PL2_ban];
                PL2_long   =   long_VE01[PL2_ban];
                PL2_middle = middle_VE01[PL2_ban];
                PL2_hp     =     hp_VE01[PL2_ban];
                PL2_link_a = link_a_VE01[PL2_ban];
                PL2_link_b = link_b_VE01[PL2_ban];
                break;
            case "AR01":
                PL2_cost   =   cost_AR01[PL2_ban];
                PL2_moVEB   =   moVEB_AR01[PL2_ban];
                PL2_long   =   long_AR01[PL2_ban];
                PL2_middle = middle_AR01[PL2_ban];
                PL2_hp     =     hp_AR01[PL2_ban];
                PL2_link_a = link_a_AR01[PL2_ban];
                PL2_link_b = link_b_AR01[PL2_ban];
                break;
            case "AR02":
                PL2_cost   =   cost_AR02[PL2_ban];
                PL2_moVEB   =   moVEB_AR02[PL2_ban];
                PL2_long   =   long_AR02[PL2_ban];
                PL2_middle = middle_AR02[PL2_ban];
                PL2_hp     =     hp_AR02[PL2_ban];
                PL2_link_a = link_a_AR02[PL2_ban];
                PL2_link_b = link_b_AR02[PL2_ban];
                break;
            case "AR03":
                PL2_cost   =   cost_AR03[PL2_ban];
                PL2_moVEB   =   moVEB_AR03[PL2_ban];
                PL2_long   =   long_AR03[PL2_ban];
                PL2_middle = middle_AR03[PL2_ban];
                PL2_hp     =     hp_AR03[PL2_ban];
                PL2_link_a = link_a_AR03[PL2_ban];
                PL2_link_b = link_b_AR03[PL2_ban];
                break;
            case "AR04":
                PL2_cost   =   cost_AR04[PL2_ban];
                PL2_moVEB   =   moVEB_AR04[PL2_ban];
                PL2_long   =   long_AR04[PL2_ban];
                PL2_middle = middle_AR04[PL2_ban];
                PL2_hp     =     hp_AR04[PL2_ban];
                PL2_link_a = link_a_AR04[PL2_ban];
                PL2_link_b = link_b_AR04[PL2_ban];
                break;
            case "LXR01":
                PL2_cost   =   cost_LXR01[PL2_ban];
                PL2_moVEB   =   moVEB_LXR01[PL2_ban];
                PL2_long   =   long_LXR01[PL2_ban];
                PL2_middle = middle_LXR01[PL2_ban];
                PL2_hp     =     hp_LXR01[PL2_ban];
                PL2_link_a = link_a_LXR01[PL2_ban];
                PL2_link_b = link_b_LXR01[PL2_ban];
                break;
            case "LXR02":
                PL2_cost   =   cost_LXR02[PL2_ban];
                PL2_moVEB   =   moVEB_LXR02[PL2_ban];
                PL2_long   =   long_LXR02[PL2_ban];
                PL2_middle = middle_LXR02[PL2_ban];
                PL2_hp     =     hp_LXR02[PL2_ban];
                PL2_link_a = link_a_LXR02[PL2_ban];
                PL2_link_b = link_b_LXR02[PL2_ban];
                break;
            case "LXR03":
                PL2_cost   =   cost_LXR03[PL2_ban];
                PL2_moVEB   =   moVEB_LXR03[PL2_ban];
                PL2_long   =   long_LXR03[PL2_ban];
                PL2_middle = middle_LXR03[PL2_ban];
                PL2_hp     =     hp_LXR03[PL2_ban];
                PL2_link_a = link_a_LXR03[PL2_ban];
                PL2_link_b = link_b_LXR03[PL2_ban];
                break;
            case "LXR04":
                PL2_cost   =   cost_LXR04[PL2_ban];
                PL2_moVEB   =   moVEB_LXR04[PL2_ban];
                PL2_long   =   long_LXR04[PL2_ban];
                PL2_middle = middle_LXR04[PL2_ban];
                PL2_hp     =     hp_LXR04[PL2_ban];
                PL2_link_a = link_a_LXR04[PL2_ban];
                PL2_link_b = link_b_LXR04[PL2_ban];
                break;
            case "UTB01":
                PL2_cost   =   cost_UTB01[PL2_ban];
                PL2_moVEB   =   moVEB_UTB01[PL2_ban];
                PL2_long   =   long_UTB01[PL2_ban];
                PL2_middle = middle_UTB01[PL2_ban];
                PL2_hp     =     hp_UTB01[PL2_ban];
                PL2_link_a = link_a_UTB01[PL2_ban];
                PL2_link_b = link_b_UTB01[PL2_ban];
                break;
            case "UTB02":
                PL2_cost   =   cost_UTB02[PL2_ban];
                PL2_moVEB   =   moVEB_UTB02[PL2_ban];
                PL2_long   =   long_UTB02[PL2_ban];
                PL2_middle = middle_UTB02[PL2_ban];
                PL2_hp     =     hp_UTB02[PL2_ban];
                PL2_link_a = link_a_UTB02[PL2_ban];
                PL2_link_b = link_b_UTB02[PL2_ban];
                break;
            case "UTB03":
                PL2_cost   =   cost_UTB03[PL2_ban];
                PL2_moVEB   =   moVEB_UTB03[PL2_ban];
                PL2_long   =   long_UTB03[PL2_ban];
                PL2_middle = middle_UTB03[PL2_ban];
                PL2_hp     =     hp_UTB03[PL2_ban];
                PL2_link_a = link_a_UTB03[PL2_ban];
                PL2_link_b = link_b_UTB03[PL2_ban];
                break;
            case "UTB04":
                PL2_cost   =   cost_UTB04[PL2_ban];
                PL2_moVEB   =   moVEB_UTB04[PL2_ban];
                PL2_long   =   long_UTB04[PL2_ban];
                PL2_middle = middle_UTB04[PL2_ban];
                PL2_hp     =     hp_UTB04[PL2_ban];
                PL2_link_a = link_a_UTB04[PL2_ban];
                PL2_link_b = link_b_UTB04[PL2_ban];
                break;
            case "UTB05":
                PL2_cost   =   cost_UTB05[PL2_ban];
                PL2_moVEB   =   moVEB_UTB05[PL2_ban];
                PL2_long   =   long_UTB05[PL2_ban];
                PL2_middle = middle_UTB05[PL2_ban];
                PL2_hp     =     hp_UTB05[PL2_ban];
                PL2_link_a = link_a_UTB05[PL2_ban];
                PL2_link_b = link_b_UTB05[PL2_ban];
                break;
            case "UTB06":
                PL2_cost   =   cost_UTB06[PL2_ban];
                PL2_moVEB   =   moVEB_UTB06[PL2_ban];
                PL2_long   =   long_UTB06[PL2_ban];
                PL2_middle = middle_UTB06[PL2_ban];
                PL2_hp     =     hp_UTB06[PL2_ban];
                PL2_link_a = link_a_UTB06[PL2_ban];
                PL2_link_b = link_b_UTB06[PL2_ban];
                break;
            case "FQB01":
                PL2_cost   =   cost_FQB01[PL2_ban];
                PL2_moVEB   =   moVEB_FQB01[PL2_ban];
                PL2_long   =   long_FQB01[PL2_ban];
                PL2_middle = middle_FQB01[PL2_ban];
                PL2_hp     =     hp_FQB01[PL2_ban];
                PL2_link_a = link_a_FQB01[PL2_ban];
                PL2_link_b = link_b_FQB01[PL2_ban];
                break;
            case "FQB02":
                PL2_cost   =   cost_FQB02[PL2_ban];
                PL2_moVEB   =   moVEB_FQB02[PL2_ban];
                PL2_long   =   long_FQB02[PL2_ban];
                PL2_middle = middle_FQB02[PL2_ban];
                PL2_hp     =     hp_FQB02[PL2_ban];
                PL2_link_a = link_a_FQB02[PL2_ban];
                PL2_link_b = link_b_FQB02[PL2_ban];
                break;
            case "FQB03":
                PL2_cost   =   cost_FQB03[PL2_ban];
                PL2_moVEB   =   moVEB_FQB03[PL2_ban];
                PL2_long   =   long_FQB03[PL2_ban];
                PL2_middle = middle_FQB03[PL2_ban];
                PL2_hp     =     hp_FQB03[PL2_ban];
                PL2_link_a = link_a_FQB03[PL2_ban];
                PL2_link_b = link_b_FQB03[PL2_ban];
                break;
            case "FQB04":
                PL2_cost   =   cost_FQB04[PL2_ban];
                PL2_moVEB   =   moVEB_FQB04[PL2_ban];
                PL2_long   =   long_FQB04[PL2_ban];
                PL2_middle = middle_FQB04[PL2_ban];
                PL2_hp     =     hp_FQB04[PL2_ban];
                PL2_link_a = link_a_FQB04[PL2_ban];
                PL2_link_b = link_b_FQB04[PL2_ban];
                break;
            case "FQB05":
                PL2_cost   =   cost_FQB05[PL2_ban];
                PL2_moVEB   =   moVEB_FQB05[PL2_ban];
                PL2_long   =   long_FQB05[PL2_ban];
                PL2_middle = middle_FQB05[PL2_ban];
                PL2_hp     =     hp_FQB05[PL2_ban];
                PL2_link_a = link_a_FQB05[PL2_ban];
                PL2_link_b = link_b_FQB05[PL2_ban];
                break;
            case "FQB06":
                PL2_cost   =   cost_FQB06[PL2_ban];
                PL2_moVEB   =   move_FQB06[PL2_ban];
                PL2_long   =   long_FQB06[PL2_ban];
                PL2_middle = middle_FQB06[PL2_ban];
                PL2_hp     =     hp_FQB06[PL2_ban];
                PL2_link_a = link_a_FQB06[PL2_ban];
                PL2_link_b = link_b_FQB06[PL2_ban];
                break;
            case "VEB01":
                PL2_cost   =   cost_VEB01[PL2_ban];
                PL2_move   =   move_VEB01[PL2_ban];
                PL2_long   =   long_VEB01[PL2_ban];
                PL2_middle = middle_VEB01[PL2_ban];
                PL2_hp     =     hp_VEB01[PL2_ban];
                PL2_link_a = link_a_VEB01[PL2_ban];
                PL2_link_b = link_b_VEB01[PL2_ban];
                break;
            case "BP01":
                PL2_cost   =   cost_BP01[PL2_ban];
                PL2_move   =   move_BP01[PL2_ban];
                PL2_long   =   long_BP01[PL2_ban];
                PL2_middle = middle_BP01[PL2_ban];
                PL2_hp     =     hp_BP01[PL2_ban];
                PL2_link_a = link_a_BP01[PL2_ban];
                PL2_link_b = link_b_BP01[PL2_ban];
                break;
            case "BP02":
                PL2_cost   =   cost_BP02[PL2_ban];
                PL2_move   = move_BP02[PL2_ban];
                PL2_long   =   long_BP02[PL2_ban];
                PL2_middle = middle_BP02[PL2_ban];
                PL2_hp     =     hp_BP02[PL2_ban];
                PL2_link_a = link_a_BP02[PL2_ban];
                PL2_link_b = link_b_BP02[PL2_ban];
                break;
            case "BP03":
                PL2_cost   =   cost_BP03[PL2_ban];
                PL2_move   = moVEB_BP03[PL2_ban];
                PL2_long   =   long_BP03[PL2_ban];
                PL2_middle = middle_BP03[PL2_ban];
                PL2_hp     =     hp_BP03[PL2_ban];
                PL2_link_a = link_a_BP03[PL2_ban];
                PL2_link_b = link_b_BP03[PL2_ban];
                break;
            case "BP04":
                PL2_cost   =   cost_BP04[PL2_ban];
                PL2_move   = moVEB_BP04[PL2_ban];
                PL2_long   =   long_BP04[PL2_ban];
                PL2_middle = middle_BP04[PL2_ban];
                PL2_hp     =     hp_BP04[PL2_ban];
                PL2_link_a = link_a_BP04[PL2_ban];
                PL2_link_b = link_b_BP04[PL2_ban];
                break;
            case "BP05":
                PL2_cost   =   cost_BP05[PL2_ban];
                PL2_move   = moVEB_BP05[PL2_ban];
                PL2_long   =   long_BP05[PL2_ban];
                PL2_middle = middle_BP05[PL2_ban];
                PL2_hp     =     hp_BP05[PL2_ban];
                PL2_link_a = link_a_BP05[PL2_ban];
                PL2_link_b = link_b_BP05[PL2_ban];
                break;
            case "BP06":
                PL2_cost   =   cost_BP06[PL2_ban];
                PL2_move   = moVEB_BP06[PL2_ban];
                PL2_long   =   long_BP06[PL2_ban];
                PL2_middle = middle_BP06[PL2_ban];
                PL2_hp     =     hp_BP06[PL2_ban];
                PL2_link_a = link_a_BP06[PL2_ban];
                PL2_link_b = link_b_BP06[PL2_ban];
                break;
            case "PR":
                PL2_cost   =   cost_PR[PL2_ban];
                PL2_move   =   moVEB_PR[PL2_ban];
                PL2_long   =   long_PR[PL2_ban];
                PL2_middle = middle_PR[PL2_ban];
                PL2_hp     =     hp_PR[PL2_ban];
                PL2_link_a = link_a_PR[PL2_ban];
                PL2_link_b = link_b_PR[PL2_ban];
                break;
            case "TEST":
                PL2_cost   =   cost_TEST[PL2_ban];
                PL2_move   = moVEB_TEST[PL2_ban];
                PL2_long   =   long_TEST[PL2_ban];
                PL2_middle = middle_TEST[PL2_ban];
                PL2_hp     =     hp_TEST[PL2_ban];
                PL2_link_a = link_a_TEST[PL2_ban];
                PL2_link_b = link_b_TEST[PL2_ban];
                break;
            case "TEST-A":
                PL2_cost   =   cost_TEST-a[PL2_ban];
                PL2_move   = moVEB_TEST-a[PL2_ban];
                PL2_long   =   long_TEST-a[PL2_ban];
                PL2_middle = middle_TEST-a[PL2_ban];
                PL2_hp     =     hp_TEST-a[PL2_ban];
                PL2_link_a = link_a_TEST-a[PL2_ban];
                PL2_link_b = link_b_TEST-a[PL2_ban];
                break;
            case "ST01":
                PL2_cost   =   cost_ST01[PL2_ban];
                PL2_moVEB   = moVEB_ST01[PL2_ban];
                PL2_long   =   long_ST01[PL2_ban];
                PL2_middle = middle_ST01[PL2_ban];
                PL2_hp     =     hp_ST01[PL2_ban];
                PL2_link_a = link_a_ST01[PL2_ban];
                PL2_link_b = link_b_ST01[PL2_ban];
                break;
            case "ST02":
                PL2_cost   =   cost_ST02[PL2_ban];
                PL2_moVEB   = moVEB_ST02[PL2_ban];
                PL2_long   =   long_ST02[PL2_ban];
                PL2_middle = middle_ST02[PL2_ban];
                PL2_hp     =     hp_ST02[PL2_ban];
                PL2_link_a = link_a_ST02[PL2_ban];
                PL2_link_b = link_b_ST02[PL2_ban];
                break;
            case "ST03":
                PL2_cost   =   cost_ST03[PL2_ban];
                PL2_moVEB   = moVEB_ST03[PL2_ban];
                PL2_long   =   long_ST03[PL2_ban];
                PL2_middle = middle_ST03[PL2_ban];
                PL2_hp     =     hp_ST03[PL2_ban];
                PL2_link_a = link_a_ST03[PL2_ban];
                PL2_link_b = link_b_ST03[PL2_ban];
                break;
            default:
                PL2_cost   = "-";
                PL2_move   = "-";
                PL2_long   = "-";
                PL2_middle = "-";
                PL2_hp     = "-";
                PL2_link_a = "-";
                PL2_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!PL2_cost){
                PL2_cost = "-";
            }
            if(!PL2_move){
                PL2_move = "-";
            }
            if(!PL2_long){
                PL2_long = "-";
            }
            if(!PL2_middle){
                PL2_middle = "-";
            }
            if(!PL2_hp){
                PL2_hp = "-";
            }
            if(!PL2_link_a){
                PL2_link_a = "-";
            }
            if(!PL2_link_b){
                PL2_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_PL2").textContent = PL2_cost;
        document.getElementById("move_PL2").textContent = PL2_move;
        document.getElementById("long_PL2").textContent = PL2_long;
        document.getElementById("middle_PL2").textContent = PL2_middle;
        document.getElementById("HP_PL2").textContent = PL2_hp;
        document.getElementById("link_PLa2").textContent = PL2_link_a;
        document.getElementById("link_PLb2").textContent = PL2_link_b;
        }
        //PL3
        PL3_dan = document.getElementById("PL3_dan").value;
        if(PL3_dan){
            console.log(PL3_dan);
        }else{
            PL3_dan = "null";
            document.getElementById("PL3g").src = "blank.png";
        }
        PL3_ban = document.getElementById("PL3_ban").value;
        if(PL3_ban){
            console.log(PL3_ban);
        }else{
            PL3_ban = "null";
            document.getElementById("PL3g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(PL3_dan != "null" & PL3_ban != "null"){
            console.log(PL3_dan + "-" + PL3_ban);
            document.getElementById("PL3g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + PL3_dan + "-" + PL3_ban + ".png";
            await sleep(10);
            joutai_PL3 = document.getElementById('PL3g');
            console.log(joutai_PL3);
            if (joutai_PL3.complete && joutai_PL3.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("PL3g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        PL3_ban = Number(PL3_ban);
        switch (PL3_dan){
            case "AB01":
                PL3_cost   =   cost_AB01[PL3_ban];
                PL3_move   =   move_AB01[PL3_ban];
                PL3_long   =   long_AB01[PL3_ban];
                PL3_middle = middle_AB01[PL3_ban];
                PL3_hp     =     hp_AB01[PL3_ban];
                PL3_link_a = link_a_AB01[PL3_ban];
                PL3_link_b = link_b_AB01[PL3_ban];
                break;
            case "AB02":
                PL3_cost   =   cost_AB02[PL3_ban];
                PL3_move   =   move_AB02[PL3_ban];
                PL3_long   =   long_AB02[PL3_ban];
                PL3_middle = middle_AB02[PL3_ban];
                PL3_hp     =     hp_AB02[PL3_ban];
                PL3_link_a = link_a_AB02[PL3_ban];
                PL3_link_b = link_b_AB02[PL3_ban];
                break;
            case "AB03":
                PL3_cost   =   cost_AB03[PL3_ban];
                PL3_move   =   move_AB03[PL3_ban];
                PL3_long   =   long_AB03[PL3_ban];
                PL3_middle = middle_AB03[PL3_ban];
                PL3_hp     =     hp_AB03[PL3_ban];
                PL3_link_a = link_a_AB03[PL3_ban];
                PL3_link_b = link_b_AB03[PL3_ban];
                break;
            case "AB04":
                PL3_cost   =   cost_AB04[PL3_ban];
                PL3_move   =   move_AB04[PL3_ban];
                PL3_long   =   long_AB04[PL3_ban];
                PL3_middle = middle_AB04[PL3_ban];
                PL3_hp     =     hp_AB04[PL3_ban];
                PL3_link_a = link_a_AB04[PL3_ban];
                PL3_link_b = link_b_AB04[PL3_ban];
                break;
            case "LX01":
                PL3_cost   =   cost_LX01[PL3_ban];
                PL3_move   =   move_LX01[PL3_ban];
                PL3_long   =   long_LX01[PL3_ban];
                PL3_middle = middle_LX01[PL3_ban];
                PL3_hp     =     hp_LX01[PL3_ban];
                PL3_link_a = link_a_LX01[PL3_ban];
                PL3_link_b = link_b_LX01[PL3_ban];
                break;
            case "LX02":
                PL3_cost   =   cost_LX02[PL3_ban];
                PL3_move   =   move_LX02[PL3_ban];
                PL3_long   =   long_LX02[PL3_ban];
                PL3_middle = middle_LX02[PL3_ban];
                PL3_hp     =     hp_LX02[PL3_ban];
                PL3_link_a = link_a_LX02[PL3_ban];
                PL3_link_b = link_b_LX02[PL3_ban];
                break;
            case "LX03":
                PL3_cost   =   cost_LX03[PL3_ban];
                PL3_move   =   move_LX03[PL3_ban];
                PL3_long   =   long_LX03[PL3_ban];
                PL3_middle = middle_LX03[PL3_ban];
                PL3_hp     =     hp_LX03[PL3_ban];
                PL3_link_a = link_a_LX03[PL3_ban];
                PL3_link_b = link_b_LX03[PL3_ban];
                break;
            case "LX04":
                PL3_cost   =   cost_LX04[PL3_ban];
                PL3_move   =   move_LX04[PL3_ban];
                PL3_long   =   long_LX04[PL3_ban];
                PL3_middle = middle_LX04[PL3_ban];
                PL3_hp     =     hp_LX04[PL3_ban];
                PL3_link_a = link_a_LX04[PL3_ban];
                PL3_link_b = link_b_LX04[PL3_ban];
                break;
            case "UT01":
                PL3_cost   =   cost_UT01[PL3_ban];
                PL3_move   =   move_UT01[PL3_ban];
                PL3_long   =   long_UT01[PL3_ban];
                PL3_middle = middle_UT01[PL3_ban];
                PL3_hp     =     hp_UT01[PL3_ban];
                PL3_link_a = link_a_UT01[PL3_ban];
                PL3_link_b = link_b_UT01[PL3_ban];
                break;
            case "UT02":
                PL3_cost   =   cost_UT02[PL3_ban];
                PL3_move   =   move_UT02[PL3_ban];
                PL3_long   =   long_UT02[PL3_ban];
                PL3_middle = middle_UT02[PL3_ban];
                PL3_hp     =     hp_UT02[PL3_ban];
                PL3_link_a = link_a_UT02[PL3_ban];
                PL3_link_b = link_b_UT02[PL3_ban];
                break;
            case "UT03":
                PL3_cost   =   cost_UT03[PL3_ban];
                PL3_move   =   move_UT03[PL3_ban];
                PL3_long   =   long_UT03[PL3_ban];
                PL3_middle = middle_UT03[PL3_ban];
                PL3_hp     =     hp_UT03[PL3_ban];
                PL3_link_a = link_a_UT03[PL3_ban];
                PL3_link_b = link_b_UT03[PL3_ban];
                break;
            case "UT04":
                PL3_cost   =   cost_UT04[PL3_ban];
                PL3_move   =   move_UT04[PL3_ban];
                PL3_long   =   long_UT04[PL3_ban];
                PL3_middle = middle_UT04[PL3_ban];
                PL3_hp     =     hp_UT04[PL3_ban];
                PL3_link_a = link_a_UT04[PL3_ban];
                PL3_link_b = link_b_UT04[PL3_ban];
                break;
            case "UT05":
                PL3_cost   =   cost_UT05[PL3_ban];
                PL3_move   =   move_UT05[PL3_ban];
                PL3_long   =   long_UT05[PL3_ban];
                PL3_middle = middle_UT05[PL3_ban];
                PL3_hp     =     hp_UT05[PL3_ban];
                PL3_link_a = link_a_UT05[PL3_ban];
                PL3_link_b = link_b_UT05[PL3_ban];
                break;
            case "UT06":
                PL3_cost   =   cost_UT06[PL3_ban];
                PL3_move   =   move_UT06[PL3_ban];
                PL3_long   =   long_UT06[PL3_ban];
                PL3_middle = middle_UT06[PL3_ban];
                PL3_hp     =     hp_UT06[PL3_ban];
                PL3_link_a = link_a_UT06[PL3_ban];
                PL3_link_b = link_b_UT06[PL3_ban];
                break;
            case "FQ01":
                PL3_cost   =   cost_FQ01[PL3_ban];
                PL3_move   =   move_FQ01[PL3_ban];
                PL3_long   =   long_FQ01[PL3_ban];
                PL3_middle = middle_FQ01[PL3_ban];
                PL3_hp     =     hp_FQ01[PL3_ban];
                PL3_link_a = link_a_FQ01[PL3_ban];
                PL3_link_b = link_b_FQ01[PL3_ban];
                break;
            case "FQ02":
                PL3_cost   =   cost_FQ02[PL3_ban];
                PL3_move   =   move_FQ02[PL3_ban];
                PL3_long   =   long_FQ02[PL3_ban];
                PL3_middle = middle_FQ02[PL3_ban];
                PL3_hp     =     hp_FQ02[PL3_ban];
                PL3_link_a = link_a_FQ02[PL3_ban];
                PL3_link_b = link_b_FQ02[PL3_ban];
                break;
            case "FQ03":
                PL3_cost   =   cost_FQ03[PL3_ban];
                PL3_move   =   move_FQ03[PL3_ban];
                PL3_long   =   long_FQ03[PL3_ban];
                PL3_middle = middle_FQ03[PL3_ban];
                PL3_hp     =     hp_FQ03[PL3_ban];
                PL3_link_a = link_a_FQ03[PL3_ban];
                PL3_link_b = link_b_FQ03[PL3_ban];
                break;
            case "FQ04":
                PL3_cost   =   cost_FQ04[PL3_ban];
                PL3_move   =   move_FQ04[PL3_ban];
                PL3_long   =   long_FQ04[PL3_ban];
                PL3_middle = middle_FQ04[PL3_ban];
                PL3_hp     =     hp_FQ04[PL3_ban];
                PL3_link_a = link_a_FQ04[PL3_ban];
                PL3_link_b = link_b_FQ04[PL3_ban];
                break;
            case "FQ05":
                PL3_cost   =   cost_FQ05[PL3_ban];
                PL3_move   =   move_FQ05[PL3_ban];
                PL3_long   =   long_FQ05[PL3_ban];
                PL3_middle = middle_FQ05[PL3_ban];
                PL3_hp     =     hp_FQ05[PL3_ban];
                PL3_link_a = link_a_FQ05[PL3_ban];
                PL3_link_b = link_b_FQ05[PL3_ban];
                break;
            case "FQ06":
                PL3_cost   =   cost_FQ06[PL3_ban];
                PL3_move   =   move_FQ06[PL3_ban];
                PL3_long   =   long_FQ06[PL3_ban];
                PL3_middle = middle_FQ06[PL3_ban];
                PL3_hp     =     hp_FQ06[PL3_ban];
                PL3_link_a = link_a_FQ06[PL3_ban];
                PL3_link_b = link_b_FQ06[PL3_ban];
                break;
            case "VE01":
                PL3_cost   =   cost_VE01[PL3_ban];
                PL3_move   =   move_VE01[PL3_ban];
                PL3_long   =   long_VE01[PL3_ban];
                PL3_middle = middle_VE01[PL3_ban];
                PL3_hp     =     hp_VE01[PL3_ban];
                PL3_link_a = link_a_VE01[PL3_ban];
                PL3_link_b = link_b_VE01[PL3_ban];
                break;
            case "AR01":
                PL3_cost   =   cost_AR01[PL3_ban];
                PL3_moVEB   =   moVEB_AR01[PL3_ban];
                PL3_long   =   long_AR01[PL3_ban];
                PL3_middle = middle_AR01[PL3_ban];
                PL3_hp     =     hp_AR01[PL3_ban];
                PL3_link_a = link_a_AR01[PL3_ban];
                PL3_link_b = link_b_AR01[PL3_ban];
                break;
            case "AR02":
                PL3_cost   =   cost_AR02[PL3_ban];
                PL3_moVEB   =   moVEB_AR02[PL3_ban];
                PL3_long   =   long_AR02[PL3_ban];
                PL3_middle = middle_AR02[PL3_ban];
                PL3_hp     =     hp_AR02[PL3_ban];
                PL3_link_a = link_a_AR02[PL3_ban];
                PL3_link_b = link_b_AR02[PL3_ban];
                break;
            case "AR03":
                PL3_cost   =   cost_AR03[PL3_ban];
                PL3_moVEB   =   moVEB_AR03[PL3_ban];
                PL3_long   =   long_AR03[PL3_ban];
                PL3_middle = middle_AR03[PL3_ban];
                PL3_hp     =     hp_AR03[PL3_ban];
                PL3_link_a = link_a_AR03[PL3_ban];
                PL3_link_b = link_b_AR03[PL3_ban];
                break;
            case "AR04":
                PL3_cost   =   cost_AR04[PL3_ban];
                PL3_moVEB   =   moVEB_AR04[PL3_ban];
                PL3_long   =   long_AR04[PL3_ban];
                PL3_middle = middle_AR04[PL3_ban];
                PL3_hp     =     hp_AR04[PL3_ban];
                PL3_link_a = link_a_AR04[PL3_ban];
                PL3_link_b = link_b_AR04[PL3_ban];
                break;
            case "LXR01":
                PL3_cost   =   cost_LXR01[PL3_ban];
                PL3_moVEB   =   moVEB_LXR01[PL3_ban];
                PL3_long   =   long_LXR01[PL3_ban];
                PL3_middle = middle_LXR01[PL3_ban];
                PL3_hp     =     hp_LXR01[PL3_ban];
                PL3_link_a = link_a_LXR01[PL3_ban];
                PL3_link_b = link_b_LXR01[PL3_ban];
                break;
            case "LXR02":
                PL3_cost   =   cost_LXR02[PL3_ban];
                PL3_moVEB   =   moVEB_LXR02[PL3_ban];
                PL3_long   =   long_LXR02[PL3_ban];
                PL3_middle = middle_LXR02[PL3_ban];
                PL3_hp     =     hp_LXR02[PL3_ban];
                PL3_link_a = link_a_LXR02[PL3_ban];
                PL3_link_b = link_b_LXR02[PL3_ban];
                break;
            case "LXR03":
                PL3_cost   =   cost_LXR03[PL3_ban];
                PL3_moVEB   =   moVEB_LXR03[PL3_ban];
                PL3_long   =   long_LXR03[PL3_ban];
                PL3_middle = middle_LXR03[PL3_ban];
                PL3_hp     =     hp_LXR03[PL3_ban];
                PL3_link_a = link_a_LXR03[PL3_ban];
                PL3_link_b = link_b_LXR03[PL3_ban];
                break;
            case "LXR04":
                PL3_cost   =   cost_LXR04[PL3_ban];
                PL3_moVEB   =   moVEB_LXR04[PL3_ban];
                PL3_long   =   long_LXR04[PL3_ban];
                PL3_middle = middle_LXR04[PL3_ban];
                PL3_hp     =     hp_LXR04[PL3_ban];
                PL3_link_a = link_a_LXR04[PL3_ban];
                PL3_link_b = link_b_LXR04[PL3_ban];
                break;
            case "UTB01":
                PL3_cost   =   cost_UTB01[PL3_ban];
                PL3_moVEB   =   moVEB_UTB01[PL3_ban];
                PL3_long   =   long_UTB01[PL3_ban];
                PL3_middle = middle_UTB01[PL3_ban];
                PL3_hp     =     hp_UTB01[PL3_ban];
                PL3_link_a = link_a_UTB01[PL3_ban];
                PL3_link_b = link_b_UTB01[PL3_ban];
                break;
            case "UTB02":
                PL3_cost   =   cost_UTB02[PL3_ban];
                PL3_moVEB   =   moVEB_UTB02[PL3_ban];
                PL3_long   =   long_UTB02[PL3_ban];
                PL3_middle = middle_UTB02[PL3_ban];
                PL3_hp     =     hp_UTB02[PL3_ban];
                PL3_link_a = link_a_UTB02[PL3_ban];
                PL3_link_b = link_b_UTB02[PL3_ban];
                break;
            case "UTB03":
                PL3_cost   =   cost_UTB03[PL3_ban];
                PL3_moVEB   =   moVEB_UTB03[PL3_ban];
                PL3_long   =   long_UTB03[PL3_ban];
                PL3_middle = middle_UTB03[PL3_ban];
                PL3_hp     =     hp_UTB03[PL3_ban];
                PL3_link_a = link_a_UTB03[PL3_ban];
                PL3_link_b = link_b_UTB03[PL3_ban];
                break;
            case "UTB04":
                PL3_cost   =   cost_UTB04[PL3_ban];
                PL3_moVEB   =   moVEB_UTB04[PL3_ban];
                PL3_long   =   long_UTB04[PL3_ban];
                PL3_middle = middle_UTB04[PL3_ban];
                PL3_hp     =     hp_UTB04[PL3_ban];
                PL3_link_a = link_a_UTB04[PL3_ban];
                PL3_link_b = link_b_UTB04[PL3_ban];
                break;
            case "UTB05":
                PL3_cost   =   cost_UTB05[PL3_ban];
                PL3_moVEB   =   moVEB_UTB05[PL3_ban];
                PL3_long   =   long_UTB05[PL3_ban];
                PL3_middle = middle_UTB05[PL3_ban];
                PL3_hp     =     hp_UTB05[PL3_ban];
                PL3_link_a = link_a_UTB05[PL3_ban];
                PL3_link_b = link_b_UTB05[PL3_ban];
                break;
            case "UTB06":
                PL3_cost   =   cost_UTB06[PL3_ban];
                PL3_moVEB   =   moVEB_UTB06[PL3_ban];
                PL3_long   =   long_UTB06[PL3_ban];
                PL3_middle = middle_UTB06[PL3_ban];
                PL3_hp     =     hp_UTB06[PL3_ban];
                PL3_link_a = link_a_UTB06[PL3_ban];
                PL3_link_b = link_b_UTB06[PL3_ban];
                break;
            case "FQB01":
                PL3_cost   =   cost_FQB01[PL3_ban];
                PL3_moVEB   =   moVEB_FQB01[PL3_ban];
                PL3_long   =   long_FQB01[PL3_ban];
                PL3_middle = middle_FQB01[PL3_ban];
                PL3_hp     =     hp_FQB01[PL3_ban];
                PL3_link_a = link_a_FQB01[PL3_ban];
                PL3_link_b = link_b_FQB01[PL3_ban];
                break;
            case "FQB02":
                PL3_cost   =   cost_FQB02[PL3_ban];
                PL3_moVEB   =   moVEB_FQB02[PL3_ban];
                PL3_long   =   long_FQB02[PL3_ban];
                PL3_middle = middle_FQB02[PL3_ban];
                PL3_hp     =     hp_FQB02[PL3_ban];
                PL3_link_a = link_a_FQB02[PL3_ban];
                PL3_link_b = link_b_FQB02[PL3_ban];
                break;
            case "FQB03":
                PL3_cost   =   cost_FQB03[PL3_ban];
                PL3_moVEB   =   moVEB_FQB03[PL3_ban];
                PL3_long   =   long_FQB03[PL3_ban];
                PL3_middle = middle_FQB03[PL3_ban];
                PL3_hp     =     hp_FQB03[PL3_ban];
                PL3_link_a = link_a_FQB03[PL3_ban];
                PL3_link_b = link_b_FQB03[PL3_ban];
                break;
            case "FQB04":
                PL3_cost   =   cost_FQB04[PL3_ban];
                PL3_moVEB   =   moVEB_FQB04[PL3_ban];
                PL3_long   =   long_FQB04[PL3_ban];
                PL3_middle = middle_FQB04[PL3_ban];
                PL3_hp     =     hp_FQB04[PL3_ban];
                PL3_link_a = link_a_FQB04[PL3_ban];
                PL3_link_b = link_b_FQB04[PL3_ban];
                break;
            case "FQB05":
                PL3_cost   =   cost_FQB05[PL3_ban];
                PL3_moVEB   =   moVEB_FQB05[PL3_ban];
                PL3_long   =   long_FQB05[PL3_ban];
                PL3_middle = middle_FQB05[PL3_ban];
                PL3_hp     =     hp_FQB05[PL3_ban];
                PL3_link_a = link_a_FQB05[PL3_ban];
                PL3_link_b = link_b_FQB05[PL3_ban];
                break;
            case "FQB06":
                PL3_cost   =   cost_FQB06[PL3_ban];
                PL3_moVEB   =   move_FQB06[PL3_ban];
                PL3_long   =   long_FQB06[PL3_ban];
                PL3_middle = middle_FQB06[PL3_ban];
                PL3_hp     =     hp_FQB06[PL3_ban];
                PL3_link_a = link_a_FQB06[PL3_ban];
                PL3_link_b = link_b_FQB06[PL3_ban];
                break;
            case "VEB01":
                PL3_cost   =   cost_VEB01[PL3_ban];
                PL3_move   =   move_VEB01[PL3_ban];
                PL3_long   =   long_VEB01[PL3_ban];
                PL3_middle = middle_VEB01[PL3_ban];
                PL3_hp     =     hp_VEB01[PL3_ban];
                PL3_link_a = link_a_VEB01[PL3_ban];
                PL3_link_b = link_b_VEB01[PL3_ban];
                break;
            case "BP01":
                PL3_cost   =   cost_BP01[PL3_ban];
                PL3_move   =   move_BP01[PL3_ban];
                PL3_long   =   long_BP01[PL3_ban];
                PL3_middle = middle_BP01[PL3_ban];
                PL3_hp     =     hp_BP01[PL3_ban];
                PL3_link_a = link_a_BP01[PL3_ban];
                PL3_link_b = link_b_BP01[PL3_ban];
                break;
            case "BP02":
                PL3_cost   =   cost_BP02[PL3_ban];
                PL3_move   = move_BP02[PL3_ban];
                PL3_long   =   long_BP02[PL3_ban];
                PL3_middle = middle_BP02[PL3_ban];
                PL3_hp     =     hp_BP02[PL3_ban];
                PL3_link_a = link_a_BP02[PL3_ban];
                PL3_link_b = link_b_BP02[PL3_ban];
                break;
            case "BP03":
                PL3_cost   =   cost_BP03[PL3_ban];
                PL3_move   = moVEB_BP03[PL3_ban];
                PL3_long   =   long_BP03[PL3_ban];
                PL3_middle = middle_BP03[PL3_ban];
                PL3_hp     =     hp_BP03[PL3_ban];
                PL3_link_a = link_a_BP03[PL3_ban];
                PL3_link_b = link_b_BP03[PL3_ban];
                break;
            case "BP04":
                PL3_cost   =   cost_BP04[PL3_ban];
                PL3_move   = moVEB_BP04[PL3_ban];
                PL3_long   =   long_BP04[PL3_ban];
                PL3_middle = middle_BP04[PL3_ban];
                PL3_hp     =     hp_BP04[PL3_ban];
                PL3_link_a = link_a_BP04[PL3_ban];
                PL3_link_b = link_b_BP04[PL3_ban];
                break;
            case "BP05":
                PL3_cost   =   cost_BP05[PL3_ban];
                PL3_move   = moVEB_BP05[PL3_ban];
                PL3_long   =   long_BP05[PL3_ban];
                PL3_middle = middle_BP05[PL3_ban];
                PL3_hp     =     hp_BP05[PL3_ban];
                PL3_link_a = link_a_BP05[PL3_ban];
                PL3_link_b = link_b_BP05[PL3_ban];
                break;
            case "BP06":
                PL3_cost   =   cost_BP06[PL3_ban];
                PL3_move   = moVEB_BP06[PL3_ban];
                PL3_long   =   long_BP06[PL3_ban];
                PL3_middle = middle_BP06[PL3_ban];
                PL3_hp     =     hp_BP06[PL3_ban];
                PL3_link_a = link_a_BP06[PL3_ban];
                PL3_link_b = link_b_BP06[PL3_ban];
                break;
            case "PR":
                PL3_cost   =   cost_PR[PL3_ban];
                PL3_move   =   moVEB_PR[PL3_ban];
                PL3_long   =   long_PR[PL3_ban];
                PL3_middle = middle_PR[PL3_ban];
                PL3_hp     =     hp_PR[PL3_ban];
                PL3_link_a = link_a_PR[PL3_ban];
                PL3_link_b = link_b_PR[PL3_ban];
                break;
            case "TEST":
                PL3_cost   =   cost_TEST[PL3_ban];
                PL3_move   = moVEB_TEST[PL3_ban];
                PL3_long   =   long_TEST[PL3_ban];
                PL3_middle = middle_TEST[PL3_ban];
                PL3_hp     =     hp_TEST[PL3_ban];
                PL3_link_a = link_a_TEST[PL3_ban];
                PL3_link_b = link_b_TEST[PL3_ban];
                break;
            case "TEST-A":
                PL3_cost   =   cost_TEST-a[PL3_ban];
                PL3_move   = moVEB_TEST-a[PL3_ban];
                PL3_long   =   long_TEST-a[PL3_ban];
                PL3_middle = middle_TEST-a[PL3_ban];
                PL3_hp     =     hp_TEST-a[PL3_ban];
                PL3_link_a = link_a_TEST-a[PL3_ban];
                PL3_link_b = link_b_TEST-a[PL3_ban];
                break;
            case "ST01":
                PL3_cost   =   cost_ST01[PL3_ban];
                PL3_moVEB   = moVEB_ST01[PL3_ban];
                PL3_long   =   long_ST01[PL3_ban];
                PL3_middle = middle_ST01[PL3_ban];
                PL3_hp     =     hp_ST01[PL3_ban];
                PL3_link_a = link_a_ST01[PL3_ban];
                PL3_link_b = link_b_ST01[PL3_ban];
                break;
            case "ST02":
                PL3_cost   =   cost_ST02[PL3_ban];
                PL3_moVEB   = moVEB_ST02[PL3_ban];
                PL3_long   =   long_ST02[PL3_ban];
                PL3_middle = middle_ST02[PL3_ban];
                PL3_hp     =     hp_ST02[PL3_ban];
                PL3_link_a = link_a_ST02[PL3_ban];
                PL3_link_b = link_b_ST02[PL3_ban];
                break;
            case "ST03":
                PL3_cost   =   cost_ST03[PL3_ban];
                PL3_moVEB   = moVEB_ST03[PL3_ban];
                PL3_long   =   long_ST03[PL3_ban];
                PL3_middle = middle_ST03[PL3_ban];
                PL3_hp     =     hp_ST03[PL3_ban];
                PL3_link_a = link_a_ST03[PL3_ban];
                PL3_link_b = link_b_ST03[PL3_ban];
                break;
            default:
                PL3_cost   = "-";
                PL3_move   = "-";
                PL3_long   = "-";
                PL3_middle = "-";
                PL3_hp     = "-";
                PL3_link_a = "-";
                PL3_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!PL3_cost){
                PL3_cost = "-";
            }
            if(!PL3_move){
                PL3_move = "-";
            }
            if(!PL3_long){
                PL3_long = "-";
            }
            if(!PL3_middle){
                PL3_middle = "-";
            }
            if(!PL3_hp){
                PL3_hp = "-";
            }
            if(!PL3_link_a){
                PL3_link_a = "-";
            }
            if(!PL3_link_b){
                PL3_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_PL3").textContent = PL3_cost;
        document.getElementById("move_PL3").textContent = PL3_move;
        document.getElementById("long_PL3").textContent = PL3_long;
        document.getElementById("middle_PL3").textContent = PL3_middle;
        document.getElementById("HP_PL3").textContent = PL3_hp;
        document.getElementById("link_PLa3").textContent = PL3_link_a;
        document.getElementById("link_PLb3").textContent = PL3_link_b;
        }
        //PL4
        PL4_dan = document.getElementById("PL4_dan").value;
        if(PL4_dan){
            console.log(PL4_dan);
        }else{
            PL4_dan = "null";
            document.getElementById("PL4g").src = "blank.png";
        }
        PL4_ban = document.getElementById("PL4_ban").value;
        if(PL4_ban){
            console.log(PL4_ban);
        }else{
            PL4_ban = "null";
            document.getElementById("PL4g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(PL4_dan != "null" & PL4_ban != "null"){
            console.log(PL4_dan + "-" + PL4_ban);
            document.getElementById("PL4g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + PL4_dan + "-" + PL4_ban + ".png";
            await sleep(10);
            joutai_PL4 = document.getElementById('PL4g');
            console.log(joutai_PL4);
            if (joutai_PL4.complete && joutai_PL4.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("PL4g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        PL4_ban = Number(PL4_ban);
        switch (PL4_dan){
            case "AB01":
                PL4_cost   =   cost_AB01[PL4_ban];
                PL4_move   =   move_AB01[PL4_ban];
                PL4_long   =   long_AB01[PL4_ban];
                PL4_middle = middle_AB01[PL4_ban];
                PL4_hp     =     hp_AB01[PL4_ban];
                PL4_link_a = link_a_AB01[PL4_ban];
                PL4_link_b = link_b_AB01[PL4_ban];
                break;
            case "AB02":
                PL4_cost   =   cost_AB02[PL4_ban];
                PL4_move   =   move_AB02[PL4_ban];
                PL4_long   =   long_AB02[PL4_ban];
                PL4_middle = middle_AB02[PL4_ban];
                PL4_hp     =     hp_AB02[PL4_ban];
                PL4_link_a = link_a_AB02[PL4_ban];
                PL4_link_b = link_b_AB02[PL4_ban];
                break;
            case "AB03":
                PL4_cost   =   cost_AB03[PL4_ban];
                PL4_move   =   move_AB03[PL4_ban];
                PL4_long   =   long_AB03[PL4_ban];
                PL4_middle = middle_AB03[PL4_ban];
                PL4_hp     =     hp_AB03[PL4_ban];
                PL4_link_a = link_a_AB03[PL4_ban];
                PL4_link_b = link_b_AB03[PL4_ban];
                break;
            case "AB04":
                PL4_cost   =   cost_AB04[PL4_ban];
                PL4_move   =   move_AB04[PL4_ban];
                PL4_long   =   long_AB04[PL4_ban];
                PL4_middle = middle_AB04[PL4_ban];
                PL4_hp     =     hp_AB04[PL4_ban];
                PL4_link_a = link_a_AB04[PL4_ban];
                PL4_link_b = link_b_AB04[PL4_ban];
                break;
            case "LX01":
                PL4_cost   =   cost_LX01[PL4_ban];
                PL4_move   =   move_LX01[PL4_ban];
                PL4_long   =   long_LX01[PL4_ban];
                PL4_middle = middle_LX01[PL4_ban];
                PL4_hp     =     hp_LX01[PL4_ban];
                PL4_link_a = link_a_LX01[PL4_ban];
                PL4_link_b = link_b_LX01[PL4_ban];
                break;
            case "LX02":
                PL4_cost   =   cost_LX02[PL4_ban];
                PL4_move   =   move_LX02[PL4_ban];
                PL4_long   =   long_LX02[PL4_ban];
                PL4_middle = middle_LX02[PL4_ban];
                PL4_hp     =     hp_LX02[PL4_ban];
                PL4_link_a = link_a_LX02[PL4_ban];
                PL4_link_b = link_b_LX02[PL4_ban];
                break;
            case "LX03":
                PL4_cost   =   cost_LX03[PL4_ban];
                PL4_move   =   move_LX03[PL4_ban];
                PL4_long   =   long_LX03[PL4_ban];
                PL4_middle = middle_LX03[PL4_ban];
                PL4_hp     =     hp_LX03[PL4_ban];
                PL4_link_a = link_a_LX03[PL4_ban];
                PL4_link_b = link_b_LX03[PL4_ban];
                break;
            case "LX04":
                PL4_cost   =   cost_LX04[PL4_ban];
                PL4_move   =   move_LX04[PL4_ban];
                PL4_long   =   long_LX04[PL4_ban];
                PL4_middle = middle_LX04[PL4_ban];
                PL4_hp     =     hp_LX04[PL4_ban];
                PL4_link_a = link_a_LX04[PL4_ban];
                PL4_link_b = link_b_LX04[PL4_ban];
                break;
            case "UT01":
                PL4_cost   =   cost_UT01[PL4_ban];
                PL4_move   =   move_UT01[PL4_ban];
                PL4_long   =   long_UT01[PL4_ban];
                PL4_middle = middle_UT01[PL4_ban];
                PL4_hp     =     hp_UT01[PL4_ban];
                PL4_link_a = link_a_UT01[PL4_ban];
                PL4_link_b = link_b_UT01[PL4_ban];
                break;
            case "UT02":
                PL4_cost   =   cost_UT02[PL4_ban];
                PL4_move   =   move_UT02[PL4_ban];
                PL4_long   =   long_UT02[PL4_ban];
                PL4_middle = middle_UT02[PL4_ban];
                PL4_hp     =     hp_UT02[PL4_ban];
                PL4_link_a = link_a_UT02[PL4_ban];
                PL4_link_b = link_b_UT02[PL4_ban];
                break;
            case "UT03":
                PL4_cost   =   cost_UT03[PL4_ban];
                PL4_move   =   move_UT03[PL4_ban];
                PL4_long   =   long_UT03[PL4_ban];
                PL4_middle = middle_UT03[PL4_ban];
                PL4_hp     =     hp_UT03[PL4_ban];
                PL4_link_a = link_a_UT03[PL4_ban];
                PL4_link_b = link_b_UT03[PL4_ban];
                break;
            case "UT04":
                PL4_cost   =   cost_UT04[PL4_ban];
                PL4_move   =   move_UT04[PL4_ban];
                PL4_long   =   long_UT04[PL4_ban];
                PL4_middle = middle_UT04[PL4_ban];
                PL4_hp     =     hp_UT04[PL4_ban];
                PL4_link_a = link_a_UT04[PL4_ban];
                PL4_link_b = link_b_UT04[PL4_ban];
                break;
            case "UT05":
                PL4_cost   =   cost_UT05[PL4_ban];
                PL4_move   =   move_UT05[PL4_ban];
                PL4_long   =   long_UT05[PL4_ban];
                PL4_middle = middle_UT05[PL4_ban];
                PL4_hp     =     hp_UT05[PL4_ban];
                PL4_link_a = link_a_UT05[PL4_ban];
                PL4_link_b = link_b_UT05[PL4_ban];
                break;
            case "UT06":
                PL4_cost   =   cost_UT06[PL4_ban];
                PL4_move   =   move_UT06[PL4_ban];
                PL4_long   =   long_UT06[PL4_ban];
                PL4_middle = middle_UT06[PL4_ban];
                PL4_hp     =     hp_UT06[PL4_ban];
                PL4_link_a = link_a_UT06[PL4_ban];
                PL4_link_b = link_b_UT06[PL4_ban];
                break;
            case "FQ01":
                PL4_cost   =   cost_FQ01[PL4_ban];
                PL4_move   =   move_FQ01[PL4_ban];
                PL4_long   =   long_FQ01[PL4_ban];
                PL4_middle = middle_FQ01[PL4_ban];
                PL4_hp     =     hp_FQ01[PL4_ban];
                PL4_link_a = link_a_FQ01[PL4_ban];
                PL4_link_b = link_b_FQ01[PL4_ban];
                break;
            case "FQ02":
                PL4_cost   =   cost_FQ02[PL4_ban];
                PL4_move   =   move_FQ02[PL4_ban];
                PL4_long   =   long_FQ02[PL4_ban];
                PL4_middle = middle_FQ02[PL4_ban];
                PL4_hp     =     hp_FQ02[PL4_ban];
                PL4_link_a = link_a_FQ02[PL4_ban];
                PL4_link_b = link_b_FQ02[PL4_ban];
                break;
            case "FQ03":
                PL4_cost   =   cost_FQ03[PL4_ban];
                PL4_move   =   move_FQ03[PL4_ban];
                PL4_long   =   long_FQ03[PL4_ban];
                PL4_middle = middle_FQ03[PL4_ban];
                PL4_hp     =     hp_FQ03[PL4_ban];
                PL4_link_a = link_a_FQ03[PL4_ban];
                PL4_link_b = link_b_FQ03[PL4_ban];
                break;
            case "FQ04":
                PL4_cost   =   cost_FQ04[PL4_ban];
                PL4_move   =   move_FQ04[PL4_ban];
                PL4_long   =   long_FQ04[PL4_ban];
                PL4_middle = middle_FQ04[PL4_ban];
                PL4_hp     =     hp_FQ04[PL4_ban];
                PL4_link_a = link_a_FQ04[PL4_ban];
                PL4_link_b = link_b_FQ04[PL4_ban];
                break;
            case "FQ05":
                PL4_cost   =   cost_FQ05[PL4_ban];
                PL4_move   =   move_FQ05[PL4_ban];
                PL4_long   =   long_FQ05[PL4_ban];
                PL4_middle = middle_FQ05[PL4_ban];
                PL4_hp     =     hp_FQ05[PL4_ban];
                PL4_link_a = link_a_FQ05[PL4_ban];
                PL4_link_b = link_b_FQ05[PL4_ban];
                break;
            case "FQ06":
                PL4_cost   =   cost_FQ06[PL4_ban];
                PL4_move   =   move_FQ06[PL4_ban];
                PL4_long   =   long_FQ06[PL4_ban];
                PL4_middle = middle_FQ06[PL4_ban];
                PL4_hp     =     hp_FQ06[PL4_ban];
                PL4_link_a = link_a_FQ06[PL4_ban];
                PL4_link_b = link_b_FQ06[PL4_ban];
                break;
            case "VE01":
                PL4_cost   =   cost_VE01[PL4_ban];
                PL4_move   =   move_VE01[PL4_ban];
                PL4_long   =   long_VE01[PL4_ban];
                PL4_middle = middle_VE01[PL4_ban];
                PL4_hp     =     hp_VE01[PL4_ban];
                PL4_link_a = link_a_VE01[PL4_ban];
                PL4_link_b = link_b_VE01[PL4_ban];
                break;
            case "AR01":
                PL4_cost   =   cost_AR01[PL4_ban];
                PL4_moVEB   =   moVEB_AR01[PL4_ban];
                PL4_long   =   long_AR01[PL4_ban];
                PL4_middle = middle_AR01[PL4_ban];
                PL4_hp     =     hp_AR01[PL4_ban];
                PL4_link_a = link_a_AR01[PL4_ban];
                PL4_link_b = link_b_AR01[PL4_ban];
                break;
            case "AR02":
                PL4_cost   =   cost_AR02[PL4_ban];
                PL4_moVEB   =   moVEB_AR02[PL4_ban];
                PL4_long   =   long_AR02[PL4_ban];
                PL4_middle = middle_AR02[PL4_ban];
                PL4_hp     =     hp_AR02[PL4_ban];
                PL4_link_a = link_a_AR02[PL4_ban];
                PL4_link_b = link_b_AR02[PL4_ban];
                break;
            case "AR03":
                PL4_cost   =   cost_AR03[PL4_ban];
                PL4_moVEB   =   moVEB_AR03[PL4_ban];
                PL4_long   =   long_AR03[PL4_ban];
                PL4_middle = middle_AR03[PL4_ban];
                PL4_hp     =     hp_AR03[PL4_ban];
                PL4_link_a = link_a_AR03[PL4_ban];
                PL4_link_b = link_b_AR03[PL4_ban];
                break;
            case "AR04":
                PL4_cost   =   cost_AR04[PL4_ban];
                PL4_moVEB   =   moVEB_AR04[PL4_ban];
                PL4_long   =   long_AR04[PL4_ban];
                PL4_middle = middle_AR04[PL4_ban];
                PL4_hp     =     hp_AR04[PL4_ban];
                PL4_link_a = link_a_AR04[PL4_ban];
                PL4_link_b = link_b_AR04[PL4_ban];
                break;
            case "LXR01":
                PL4_cost   =   cost_LXR01[PL4_ban];
                PL4_moVEB   =   moVEB_LXR01[PL4_ban];
                PL4_long   =   long_LXR01[PL4_ban];
                PL4_middle = middle_LXR01[PL4_ban];
                PL4_hp     =     hp_LXR01[PL4_ban];
                PL4_link_a = link_a_LXR01[PL4_ban];
                PL4_link_b = link_b_LXR01[PL4_ban];
                break;
            case "LXR02":
                PL4_cost   =   cost_LXR02[PL4_ban];
                PL4_moVEB   =   moVEB_LXR02[PL4_ban];
                PL4_long   =   long_LXR02[PL4_ban];
                PL4_middle = middle_LXR02[PL4_ban];
                PL4_hp     =     hp_LXR02[PL4_ban];
                PL4_link_a = link_a_LXR02[PL4_ban];
                PL4_link_b = link_b_LXR02[PL4_ban];
                break;
            case "LXR03":
                PL4_cost   =   cost_LXR03[PL4_ban];
                PL4_moVEB   =   moVEB_LXR03[PL4_ban];
                PL4_long   =   long_LXR03[PL4_ban];
                PL4_middle = middle_LXR03[PL4_ban];
                PL4_hp     =     hp_LXR03[PL4_ban];
                PL4_link_a = link_a_LXR03[PL4_ban];
                PL4_link_b = link_b_LXR03[PL4_ban];
                break;
            case "LXR04":
                PL4_cost   =   cost_LXR04[PL4_ban];
                PL4_moVEB   =   moVEB_LXR04[PL4_ban];
                PL4_long   =   long_LXR04[PL4_ban];
                PL4_middle = middle_LXR04[PL4_ban];
                PL4_hp     =     hp_LXR04[PL4_ban];
                PL4_link_a = link_a_LXR04[PL4_ban];
                PL4_link_b = link_b_LXR04[PL4_ban];
                break;
            case "UTB01":
                PL4_cost   =   cost_UTB01[PL4_ban];
                PL4_moVEB   =   moVEB_UTB01[PL4_ban];
                PL4_long   =   long_UTB01[PL4_ban];
                PL4_middle = middle_UTB01[PL4_ban];
                PL4_hp     =     hp_UTB01[PL4_ban];
                PL4_link_a = link_a_UTB01[PL4_ban];
                PL4_link_b = link_b_UTB01[PL4_ban];
                break;
            case "UTB02":
                PL4_cost   =   cost_UTB02[PL4_ban];
                PL4_moVEB   =   moVEB_UTB02[PL4_ban];
                PL4_long   =   long_UTB02[PL4_ban];
                PL4_middle = middle_UTB02[PL4_ban];
                PL4_hp     =     hp_UTB02[PL4_ban];
                PL4_link_a = link_a_UTB02[PL4_ban];
                PL4_link_b = link_b_UTB02[PL4_ban];
                break;
            case "UTB03":
                PL4_cost   =   cost_UTB03[PL4_ban];
                PL4_moVEB   =   moVEB_UTB03[PL4_ban];
                PL4_long   =   long_UTB03[PL4_ban];
                PL4_middle = middle_UTB03[PL4_ban];
                PL4_hp     =     hp_UTB03[PL4_ban];
                PL4_link_a = link_a_UTB03[PL4_ban];
                PL4_link_b = link_b_UTB03[PL4_ban];
                break;
            case "UTB04":
                PL4_cost   =   cost_UTB04[PL4_ban];
                PL4_moVEB   =   moVEB_UTB04[PL4_ban];
                PL4_long   =   long_UTB04[PL4_ban];
                PL4_middle = middle_UTB04[PL4_ban];
                PL4_hp     =     hp_UTB04[PL4_ban];
                PL4_link_a = link_a_UTB04[PL4_ban];
                PL4_link_b = link_b_UTB04[PL4_ban];
                break;
            case "UTB05":
                PL4_cost   =   cost_UTB05[PL4_ban];
                PL4_moVEB   =   moVEB_UTB05[PL4_ban];
                PL4_long   =   long_UTB05[PL4_ban];
                PL4_middle = middle_UTB05[PL4_ban];
                PL4_hp     =     hp_UTB05[PL4_ban];
                PL4_link_a = link_a_UTB05[PL4_ban];
                PL4_link_b = link_b_UTB05[PL4_ban];
                break;
            case "UTB06":
                PL4_cost   =   cost_UTB06[PL4_ban];
                PL4_moVEB   =   moVEB_UTB06[PL4_ban];
                PL4_long   =   long_UTB06[PL4_ban];
                PL4_middle = middle_UTB06[PL4_ban];
                PL4_hp     =     hp_UTB06[PL4_ban];
                PL4_link_a = link_a_UTB06[PL4_ban];
                PL4_link_b = link_b_UTB06[PL4_ban];
                break;
            case "FQB01":
                PL4_cost   =   cost_FQB01[PL4_ban];
                PL4_moVEB   =   moVEB_FQB01[PL4_ban];
                PL4_long   =   long_FQB01[PL4_ban];
                PL4_middle = middle_FQB01[PL4_ban];
                PL4_hp     =     hp_FQB01[PL4_ban];
                PL4_link_a = link_a_FQB01[PL4_ban];
                PL4_link_b = link_b_FQB01[PL4_ban];
                break;
            case "FQB02":
                PL4_cost   =   cost_FQB02[PL4_ban];
                PL4_moVEB   =   moVEB_FQB02[PL4_ban];
                PL4_long   =   long_FQB02[PL4_ban];
                PL4_middle = middle_FQB02[PL4_ban];
                PL4_hp     =     hp_FQB02[PL4_ban];
                PL4_link_a = link_a_FQB02[PL4_ban];
                PL4_link_b = link_b_FQB02[PL4_ban];
                break;
            case "FQB03":
                PL4_cost   =   cost_FQB03[PL4_ban];
                PL4_moVEB   =   moVEB_FQB03[PL4_ban];
                PL4_long   =   long_FQB03[PL4_ban];
                PL4_middle = middle_FQB03[PL4_ban];
                PL4_hp     =     hp_FQB03[PL4_ban];
                PL4_link_a = link_a_FQB03[PL4_ban];
                PL4_link_b = link_b_FQB03[PL4_ban];
                break;
            case "FQB04":
                PL4_cost   =   cost_FQB04[PL4_ban];
                PL4_moVEB   =   moVEB_FQB04[PL4_ban];
                PL4_long   =   long_FQB04[PL4_ban];
                PL4_middle = middle_FQB04[PL4_ban];
                PL4_hp     =     hp_FQB04[PL4_ban];
                PL4_link_a = link_a_FQB04[PL4_ban];
                PL4_link_b = link_b_FQB04[PL4_ban];
                break;
            case "FQB05":
                PL4_cost   =   cost_FQB05[PL4_ban];
                PL4_moVEB   =   moVEB_FQB05[PL4_ban];
                PL4_long   =   long_FQB05[PL4_ban];
                PL4_middle = middle_FQB05[PL4_ban];
                PL4_hp     =     hp_FQB05[PL4_ban];
                PL4_link_a = link_a_FQB05[PL4_ban];
                PL4_link_b = link_b_FQB05[PL4_ban];
                break;
            case "FQB06":
                PL4_cost   =   cost_FQB06[PL4_ban];
                PL4_moVEB   =   move_FQB06[PL4_ban];
                PL4_long   =   long_FQB06[PL4_ban];
                PL4_middle = middle_FQB06[PL4_ban];
                PL4_hp     =     hp_FQB06[PL4_ban];
                PL4_link_a = link_a_FQB06[PL4_ban];
                PL4_link_b = link_b_FQB06[PL4_ban];
                break;
            case "VEB01":
                PL4_cost   =   cost_VEB01[PL4_ban];
                PL4_move   =   move_VEB01[PL4_ban];
                PL4_long   =   long_VEB01[PL4_ban];
                PL4_middle = middle_VEB01[PL4_ban];
                PL4_hp     =     hp_VEB01[PL4_ban];
                PL4_link_a = link_a_VEB01[PL4_ban];
                PL4_link_b = link_b_VEB01[PL4_ban];
                break;
            case "BP01":
                PL4_cost   =   cost_BP01[PL4_ban];
                PL4_move   =   move_BP01[PL4_ban];
                PL4_long   =   long_BP01[PL4_ban];
                PL4_middle = middle_BP01[PL4_ban];
                PL4_hp     =     hp_BP01[PL4_ban];
                PL4_link_a = link_a_BP01[PL4_ban];
                PL4_link_b = link_b_BP01[PL4_ban];
                break;
            case "BP02":
                PL4_cost   =   cost_BP02[PL4_ban];
                PL4_move   = move_BP02[PL4_ban];
                PL4_long   =   long_BP02[PL4_ban];
                PL4_middle = middle_BP02[PL4_ban];
                PL4_hp     =     hp_BP02[PL4_ban];
                PL4_link_a = link_a_BP02[PL4_ban];
                PL4_link_b = link_b_BP02[PL4_ban];
                break;
            case "BP03":
                PL4_cost   =   cost_BP03[PL4_ban];
                PL4_move   = moVEB_BP03[PL4_ban];
                PL4_long   =   long_BP03[PL4_ban];
                PL4_middle = middle_BP03[PL4_ban];
                PL4_hp     =     hp_BP03[PL4_ban];
                PL4_link_a = link_a_BP03[PL4_ban];
                PL4_link_b = link_b_BP03[PL4_ban];
                break;
            case "BP04":
                PL4_cost   =   cost_BP04[PL4_ban];
                PL4_move   = moVEB_BP04[PL4_ban];
                PL4_long   =   long_BP04[PL4_ban];
                PL4_middle = middle_BP04[PL4_ban];
                PL4_hp     =     hp_BP04[PL4_ban];
                PL4_link_a = link_a_BP04[PL4_ban];
                PL4_link_b = link_b_BP04[PL4_ban];
                break;
            case "BP05":
                PL4_cost   =   cost_BP05[PL4_ban];
                PL4_move   = moVEB_BP05[PL4_ban];
                PL4_long   =   long_BP05[PL4_ban];
                PL4_middle = middle_BP05[PL4_ban];
                PL4_hp     =     hp_BP05[PL4_ban];
                PL4_link_a = link_a_BP05[PL4_ban];
                PL4_link_b = link_b_BP05[PL4_ban];
                break;
            case "BP06":
                PL4_cost   =   cost_BP06[PL4_ban];
                PL4_move   = moVEB_BP06[PL4_ban];
                PL4_long   =   long_BP06[PL4_ban];
                PL4_middle = middle_BP06[PL4_ban];
                PL4_hp     =     hp_BP06[PL4_ban];
                PL4_link_a = link_a_BP06[PL4_ban];
                PL4_link_b = link_b_BP06[PL4_ban];
                break;
            case "PR":
                PL4_cost   =   cost_PR[PL4_ban];
                PL4_move   =   moVEB_PR[PL4_ban];
                PL4_long   =   long_PR[PL4_ban];
                PL4_middle = middle_PR[PL4_ban];
                PL4_hp     =     hp_PR[PL4_ban];
                PL4_link_a = link_a_PR[PL4_ban];
                PL4_link_b = link_b_PR[PL4_ban];
                break;
            case "TEST":
                PL4_cost   =   cost_TEST[PL4_ban];
                PL4_move   = moVEB_TEST[PL4_ban];
                PL4_long   =   long_TEST[PL4_ban];
                PL4_middle = middle_TEST[PL4_ban];
                PL4_hp     =     hp_TEST[PL4_ban];
                PL4_link_a = link_a_TEST[PL4_ban];
                PL4_link_b = link_b_TEST[PL4_ban];
                break;
            case "TEST-A":
                PL4_cost   =   cost_TEST-a[PL4_ban];
                PL4_move   = moVEB_TEST-a[PL4_ban];
                PL4_long   =   long_TEST-a[PL4_ban];
                PL4_middle = middle_TEST-a[PL4_ban];
                PL4_hp     =     hp_TEST-a[PL4_ban];
                PL4_link_a = link_a_TEST-a[PL4_ban];
                PL4_link_b = link_b_TEST-a[PL4_ban];
                break;
            case "ST01":
                PL4_cost   =   cost_ST01[PL4_ban];
                PL4_moVEB   = moVEB_ST01[PL4_ban];
                PL4_long   =   long_ST01[PL4_ban];
                PL4_middle = middle_ST01[PL4_ban];
                PL4_hp     =     hp_ST01[PL4_ban];
                PL4_link_a = link_a_ST01[PL4_ban];
                PL4_link_b = link_b_ST01[PL4_ban];
                break;
            case "ST02":
                PL4_cost   =   cost_ST02[PL4_ban];
                PL4_moVEB   = moVEB_ST02[PL4_ban];
                PL4_long   =   long_ST02[PL4_ban];
                PL4_middle = middle_ST02[PL4_ban];
                PL4_hp     =     hp_ST02[PL4_ban];
                PL4_link_a = link_a_ST02[PL4_ban];
                PL4_link_b = link_b_ST02[PL4_ban];
                break;
            case "ST03":
                PL4_cost   =   cost_ST03[PL4_ban];
                PL4_moVEB   = moVEB_ST03[PL4_ban];
                PL4_long   =   long_ST03[PL4_ban];
                PL4_middle = middle_ST03[PL4_ban];
                PL4_hp     =     hp_ST03[PL4_ban];
                PL4_link_a = link_a_ST03[PL4_ban];
                PL4_link_b = link_b_ST03[PL4_ban];
                break;
            default:
                PL4_cost   = "-";
                PL4_move   = "-";
                PL4_long   = "-";
                PL4_middle = "-";
                PL4_hp     = "-";
                PL4_link_a = "-";
                PL4_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!PL4_cost){
                PL4_cost = "-";
            }
            if(!PL4_move){
                PL4_move = "-";
            }
            if(!PL4_long){
                PL4_long = "-";
            }
            if(!PL4_middle){
                PL4_middle = "-";
            }
            if(!PL4_hp){
                PL4_hp = "-";
            }
            if(!PL4_link_a){
                PL4_link_a = "-";
            }
            if(!PL4_link_b){
                PL4_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_PL4").textContent = PL4_cost;
        document.getElementById("move_PL4").textContent = PL4_move;
        document.getElementById("long_PL4").textContent = PL4_long;
        document.getElementById("middle_PL4").textContent = PL4_middle;
        document.getElementById("HP_PL4").textContent = PL4_hp;
        document.getElementById("link_PLa4").textContent = PL4_link_a;
        document.getElementById("link_PLb4").textContent = PL4_link_b;
        }
        //PL5
        PL5_dan = document.getElementById("PL5_dan").value;
        if(PL5_dan){
            console.log(PL5_dan);
        }else{
            PL5_dan = "null";
            document.getElementById("PL5g").src = "blank.png";
        }
        PL5_ban = document.getElementById("PL5_ban").value;
        if(PL5_ban){
            console.log(PL5_ban);
        }else{
            PL5_ban = "null";
            document.getElementById("PL5g").src = "blank.png";
        }
        //画像異常確認プロトコル
        if(PL5_dan != "null" & PL5_ban != "null"){
            console.log(PL5_dan + "-" + PL5_ban);
            document.getElementById("PL5g").src = "https://www.gundam-ab.com/images/cardlist/thumbnail/" + PL5_dan + "-" + PL5_ban + ".png";
            await sleep(10);
            joutai_PL5 = document.getElementById('PL5g');
            console.log(joutai_PL5);
            if (joutai_PL5.complete && joutai_PL5.naturalWidth !== 0) {
                console.log('異常なし');
            } else {
                console.log('エラー');
                document.getElementById("PL5g").src = "blank.png";
            }
        }
        //ステータス入力プロトコル
        PL5_ban = Number(PL5_ban);
        switch (PL5_dan){
            case "AB01":
                PL5_cost   =   cost_AB01[PL5_ban];
                PL5_move   =   move_AB01[PL5_ban];
                PL5_long   =   long_AB01[PL5_ban];
                PL5_middle = middle_AB01[PL5_ban];
                PL5_hp     =     hp_AB01[PL5_ban];
                PL5_link_a = link_a_AB01[PL5_ban];
                PL5_link_b = link_b_AB01[PL5_ban];
                break;
            case "AB02":
                PL5_cost   =   cost_AB02[PL5_ban];
                PL5_move   =   move_AB02[PL5_ban];
                PL5_long   =   long_AB02[PL5_ban];
                PL5_middle = middle_AB02[PL5_ban];
                PL5_hp     =     hp_AB02[PL5_ban];
                PL5_link_a = link_a_AB02[PL5_ban];
                PL5_link_b = link_b_AB02[PL5_ban];
                break;
            case "AB03":
                PL5_cost   =   cost_AB03[PL5_ban];
                PL5_move   =   move_AB03[PL5_ban];
                PL5_long   =   long_AB03[PL5_ban];
                PL5_middle = middle_AB03[PL5_ban];
                PL5_hp     =     hp_AB03[PL5_ban];
                PL5_link_a = link_a_AB03[PL5_ban];
                PL5_link_b = link_b_AB03[PL5_ban];
                break;
            case "AB04":
                PL5_cost   =   cost_AB04[PL5_ban];
                PL5_move   =   move_AB04[PL5_ban];
                PL5_long   =   long_AB04[PL5_ban];
                PL5_middle = middle_AB04[PL5_ban];
                PL5_hp     =     hp_AB04[PL5_ban];
                PL5_link_a = link_a_AB04[PL5_ban];
                PL5_link_b = link_b_AB04[PL5_ban];
                break;
            case "LX01":
                PL5_cost   =   cost_LX01[PL5_ban];
                PL5_move   =   move_LX01[PL5_ban];
                PL5_long   =   long_LX01[PL5_ban];
                PL5_middle = middle_LX01[PL5_ban];
                PL5_hp     =     hp_LX01[PL5_ban];
                PL5_link_a = link_a_LX01[PL5_ban];
                PL5_link_b = link_b_LX01[PL5_ban];
                break;
            case "LX02":
                PL5_cost   =   cost_LX02[PL5_ban];
                PL5_move   =   move_LX02[PL5_ban];
                PL5_long   =   long_LX02[PL5_ban];
                PL5_middle = middle_LX02[PL5_ban];
                PL5_hp     =     hp_LX02[PL5_ban];
                PL5_link_a = link_a_LX02[PL5_ban];
                PL5_link_b = link_b_LX02[PL5_ban];
                break;
            case "LX03":
                PL5_cost   =   cost_LX03[PL5_ban];
                PL5_move   =   move_LX03[PL5_ban];
                PL5_long   =   long_LX03[PL5_ban];
                PL5_middle = middle_LX03[PL5_ban];
                PL5_hp     =     hp_LX03[PL5_ban];
                PL5_link_a = link_a_LX03[PL5_ban];
                PL5_link_b = link_b_LX03[PL5_ban];
                break;
            case "LX04":
                PL5_cost   =   cost_LX04[PL5_ban];
                PL5_move   =   move_LX04[PL5_ban];
                PL5_long   =   long_LX04[PL5_ban];
                PL5_middle = middle_LX04[PL5_ban];
                PL5_hp     =     hp_LX04[PL5_ban];
                PL5_link_a = link_a_LX04[PL5_ban];
                PL5_link_b = link_b_LX04[PL5_ban];
                break;
            case "UT01":
                PL5_cost   =   cost_UT01[PL5_ban];
                PL5_move   =   move_UT01[PL5_ban];
                PL5_long   =   long_UT01[PL5_ban];
                PL5_middle = middle_UT01[PL5_ban];
                PL5_hp     =     hp_UT01[PL5_ban];
                PL5_link_a = link_a_UT01[PL5_ban];
                PL5_link_b = link_b_UT01[PL5_ban];
                break;
            case "UT02":
                PL5_cost   =   cost_UT02[PL5_ban];
                PL5_move   =   move_UT02[PL5_ban];
                PL5_long   =   long_UT02[PL5_ban];
                PL5_middle = middle_UT02[PL5_ban];
                PL5_hp     =     hp_UT02[PL5_ban];
                PL5_link_a = link_a_UT02[PL5_ban];
                PL5_link_b = link_b_UT02[PL5_ban];
                break;
            case "UT03":
                PL5_cost   =   cost_UT03[PL5_ban];
                PL5_move   =   move_UT03[PL5_ban];
                PL5_long   =   long_UT03[PL5_ban];
                PL5_middle = middle_UT03[PL5_ban];
                PL5_hp     =     hp_UT03[PL5_ban];
                PL5_link_a = link_a_UT03[PL5_ban];
                PL5_link_b = link_b_UT03[PL5_ban];
                break;
            case "UT04":
                PL5_cost   =   cost_UT04[PL5_ban];
                PL5_move   =   move_UT04[PL5_ban];
                PL5_long   =   long_UT04[PL5_ban];
                PL5_middle = middle_UT04[PL5_ban];
                PL5_hp     =     hp_UT04[PL5_ban];
                PL5_link_a = link_a_UT04[PL5_ban];
                PL5_link_b = link_b_UT04[PL5_ban];
                break;
            case "UT05":
                PL5_cost   =   cost_UT05[PL5_ban];
                PL5_move   =   move_UT05[PL5_ban];
                PL5_long   =   long_UT05[PL5_ban];
                PL5_middle = middle_UT05[PL5_ban];
                PL5_hp     =     hp_UT05[PL5_ban];
                PL5_link_a = link_a_UT05[PL5_ban];
                PL5_link_b = link_b_UT05[PL5_ban];
                break;
            case "UT06":
                PL5_cost   =   cost_UT06[PL5_ban];
                PL5_move   =   move_UT06[PL5_ban];
                PL5_long   =   long_UT06[PL5_ban];
                PL5_middle = middle_UT06[PL5_ban];
                PL5_hp     =     hp_UT06[PL5_ban];
                PL5_link_a = link_a_UT06[PL5_ban];
                PL5_link_b = link_b_UT06[PL5_ban];
                break;
            case "FQ01":
                PL5_cost   =   cost_FQ01[PL5_ban];
                PL5_move   =   move_FQ01[PL5_ban];
                PL5_long   =   long_FQ01[PL5_ban];
                PL5_middle = middle_FQ01[PL5_ban];
                PL5_hp     =     hp_FQ01[PL5_ban];
                PL5_link_a = link_a_FQ01[PL5_ban];
                PL5_link_b = link_b_FQ01[PL5_ban];
                break;
            case "FQ02":
                PL5_cost   =   cost_FQ02[PL5_ban];
                PL5_move   =   move_FQ02[PL5_ban];
                PL5_long   =   long_FQ02[PL5_ban];
                PL5_middle = middle_FQ02[PL5_ban];
                PL5_hp     =     hp_FQ02[PL5_ban];
                PL5_link_a = link_a_FQ02[PL5_ban];
                PL5_link_b = link_b_FQ02[PL5_ban];
                break;
            case "FQ03":
                PL5_cost   =   cost_FQ03[PL5_ban];
                PL5_move   =   move_FQ03[PL5_ban];
                PL5_long   =   long_FQ03[PL5_ban];
                PL5_middle = middle_FQ03[PL5_ban];
                PL5_hp     =     hp_FQ03[PL5_ban];
                PL5_link_a = link_a_FQ03[PL5_ban];
                PL5_link_b = link_b_FQ03[PL5_ban];
                break;
            case "FQ04":
                PL5_cost   =   cost_FQ04[PL5_ban];
                PL5_move   =   move_FQ04[PL5_ban];
                PL5_long   =   long_FQ04[PL5_ban];
                PL5_middle = middle_FQ04[PL5_ban];
                PL5_hp     =     hp_FQ04[PL5_ban];
                PL5_link_a = link_a_FQ04[PL5_ban];
                PL5_link_b = link_b_FQ04[PL5_ban];
                break;
            case "FQ05":
                PL5_cost   =   cost_FQ05[PL5_ban];
                PL5_move   =   move_FQ05[PL5_ban];
                PL5_long   =   long_FQ05[PL5_ban];
                PL5_middle = middle_FQ05[PL5_ban];
                PL5_hp     =     hp_FQ05[PL5_ban];
                PL5_link_a = link_a_FQ05[PL5_ban];
                PL5_link_b = link_b_FQ05[PL5_ban];
                break;
            case "FQ06":
                PL5_cost   =   cost_FQ06[PL5_ban];
                PL5_move   =   move_FQ06[PL5_ban];
                PL5_long   =   long_FQ06[PL5_ban];
                PL5_middle = middle_FQ06[PL5_ban];
                PL5_hp     =     hp_FQ06[PL5_ban];
                PL5_link_a = link_a_FQ06[PL5_ban];
                PL5_link_b = link_b_FQ06[PL5_ban];
                break;
            case "VE01":
                PL5_cost   =   cost_VE01[PL5_ban];
                PL5_move   =   move_VE01[PL5_ban];
                PL5_long   =   long_VE01[PL5_ban];
                PL5_middle = middle_VE01[PL5_ban];
                PL5_hp     =     hp_VE01[PL5_ban];
                PL5_link_a = link_a_VE01[PL5_ban];
                PL5_link_b = link_b_VE01[PL5_ban];
                break;
            case "AR01":
                PL5_cost   =   cost_AR01[PL5_ban];
                PL5_moVEB   =   moVEB_AR01[PL5_ban];
                PL5_long   =   long_AR01[PL5_ban];
                PL5_middle = middle_AR01[PL5_ban];
                PL5_hp     =     hp_AR01[PL5_ban];
                PL5_link_a = link_a_AR01[PL5_ban];
                PL5_link_b = link_b_AR01[PL5_ban];
                break;
            case "AR02":
                PL5_cost   =   cost_AR02[PL5_ban];
                PL5_moVEB   =   moVEB_AR02[PL5_ban];
                PL5_long   =   long_AR02[PL5_ban];
                PL5_middle = middle_AR02[PL5_ban];
                PL5_hp     =     hp_AR02[PL5_ban];
                PL5_link_a = link_a_AR02[PL5_ban];
                PL5_link_b = link_b_AR02[PL5_ban];
                break;
            case "AR03":
                PL5_cost   =   cost_AR03[PL5_ban];
                PL5_moVEB   =   moVEB_AR03[PL5_ban];
                PL5_long   =   long_AR03[PL5_ban];
                PL5_middle = middle_AR03[PL5_ban];
                PL5_hp     =     hp_AR03[PL5_ban];
                PL5_link_a = link_a_AR03[PL5_ban];
                PL5_link_b = link_b_AR03[PL5_ban];
                break;
            case "AR04":
                PL5_cost   =   cost_AR04[PL5_ban];
                PL5_moVEB   =   moVEB_AR04[PL5_ban];
                PL5_long   =   long_AR04[PL5_ban];
                PL5_middle = middle_AR04[PL5_ban];
                PL5_hp     =     hp_AR04[PL5_ban];
                PL5_link_a = link_a_AR04[PL5_ban];
                PL5_link_b = link_b_AR04[PL5_ban];
                break;
            case "LXR01":
                PL5_cost   =   cost_LXR01[PL5_ban];
                PL5_moVEB   =   moVEB_LXR01[PL5_ban];
                PL5_long   =   long_LXR01[PL5_ban];
                PL5_middle = middle_LXR01[PL5_ban];
                PL5_hp     =     hp_LXR01[PL5_ban];
                PL5_link_a = link_a_LXR01[PL5_ban];
                PL5_link_b = link_b_LXR01[PL5_ban];
                break;
            case "LXR02":
                PL5_cost   =   cost_LXR02[PL5_ban];
                PL5_moVEB   =   moVEB_LXR02[PL5_ban];
                PL5_long   =   long_LXR02[PL5_ban];
                PL5_middle = middle_LXR02[PL5_ban];
                PL5_hp     =     hp_LXR02[PL5_ban];
                PL5_link_a = link_a_LXR02[PL5_ban];
                PL5_link_b = link_b_LXR02[PL5_ban];
                break;
            case "LXR03":
                PL5_cost   =   cost_LXR03[PL5_ban];
                PL5_moVEB   =   moVEB_LXR03[PL5_ban];
                PL5_long   =   long_LXR03[PL5_ban];
                PL5_middle = middle_LXR03[PL5_ban];
                PL5_hp     =     hp_LXR03[PL5_ban];
                PL5_link_a = link_a_LXR03[PL5_ban];
                PL5_link_b = link_b_LXR03[PL5_ban];
                break;
            case "LXR04":
                PL5_cost   =   cost_LXR04[PL5_ban];
                PL5_moVEB   =   moVEB_LXR04[PL5_ban];
                PL5_long   =   long_LXR04[PL5_ban];
                PL5_middle = middle_LXR04[PL5_ban];
                PL5_hp     =     hp_LXR04[PL5_ban];
                PL5_link_a = link_a_LXR04[PL5_ban];
                PL5_link_b = link_b_LXR04[PL5_ban];
                break;
            case "UTB01":
                PL5_cost   =   cost_UTB01[PL5_ban];
                PL5_moVEB   =   moVEB_UTB01[PL5_ban];
                PL5_long   =   long_UTB01[PL5_ban];
                PL5_middle = middle_UTB01[PL5_ban];
                PL5_hp     =     hp_UTB01[PL5_ban];
                PL5_link_a = link_a_UTB01[PL5_ban];
                PL5_link_b = link_b_UTB01[PL5_ban];
                break;
            case "UTB02":
                PL5_cost   =   cost_UTB02[PL5_ban];
                PL5_moVEB   =   moVEB_UTB02[PL5_ban];
                PL5_long   =   long_UTB02[PL5_ban];
                PL5_middle = middle_UTB02[PL5_ban];
                PL5_hp     =     hp_UTB02[PL5_ban];
                PL5_link_a = link_a_UTB02[PL5_ban];
                PL5_link_b = link_b_UTB02[PL5_ban];
                break;
            case "UTB03":
                PL5_cost   =   cost_UTB03[PL5_ban];
                PL5_moVEB   =   moVEB_UTB03[PL5_ban];
                PL5_long   =   long_UTB03[PL5_ban];
                PL5_middle = middle_UTB03[PL5_ban];
                PL5_hp     =     hp_UTB03[PL5_ban];
                PL5_link_a = link_a_UTB03[PL5_ban];
                PL5_link_b = link_b_UTB03[PL5_ban];
                break;
            case "UTB04":
                PL5_cost   =   cost_UTB04[PL5_ban];
                PL5_moVEB   =   moVEB_UTB04[PL5_ban];
                PL5_long   =   long_UTB04[PL5_ban];
                PL5_middle = middle_UTB04[PL5_ban];
                PL5_hp     =     hp_UTB04[PL5_ban];
                PL5_link_a = link_a_UTB04[PL5_ban];
                PL5_link_b = link_b_UTB04[PL5_ban];
                break;
            case "UTB05":
                PL5_cost   =   cost_UTB05[PL5_ban];
                PL5_moVEB   =   moVEB_UTB05[PL5_ban];
                PL5_long   =   long_UTB05[PL5_ban];
                PL5_middle = middle_UTB05[PL5_ban];
                PL5_hp     =     hp_UTB05[PL5_ban];
                PL5_link_a = link_a_UTB05[PL5_ban];
                PL5_link_b = link_b_UTB05[PL5_ban];
                break;
            case "UTB06":
                PL5_cost   =   cost_UTB06[PL5_ban];
                PL5_moVEB   =   moVEB_UTB06[PL5_ban];
                PL5_long   =   long_UTB06[PL5_ban];
                PL5_middle = middle_UTB06[PL5_ban];
                PL5_hp     =     hp_UTB06[PL5_ban];
                PL5_link_a = link_a_UTB06[PL5_ban];
                PL5_link_b = link_b_UTB06[PL5_ban];
                break;
            case "FQB01":
                PL5_cost   =   cost_FQB01[PL5_ban];
                PL5_moVEB   =   moVEB_FQB01[PL5_ban];
                PL5_long   =   long_FQB01[PL5_ban];
                PL5_middle = middle_FQB01[PL5_ban];
                PL5_hp     =     hp_FQB01[PL5_ban];
                PL5_link_a = link_a_FQB01[PL5_ban];
                PL5_link_b = link_b_FQB01[PL5_ban];
                break;
            case "FQB02":
                PL5_cost   =   cost_FQB02[PL5_ban];
                PL5_moVEB   =   moVEB_FQB02[PL5_ban];
                PL5_long   =   long_FQB02[PL5_ban];
                PL5_middle = middle_FQB02[PL5_ban];
                PL5_hp     =     hp_FQB02[PL5_ban];
                PL5_link_a = link_a_FQB02[PL5_ban];
                PL5_link_b = link_b_FQB02[PL5_ban];
                break;
            case "FQB03":
                PL5_cost   =   cost_FQB03[PL5_ban];
                PL5_moVEB   =   moVEB_FQB03[PL5_ban];
                PL5_long   =   long_FQB03[PL5_ban];
                PL5_middle = middle_FQB03[PL5_ban];
                PL5_hp     =     hp_FQB03[PL5_ban];
                PL5_link_a = link_a_FQB03[PL5_ban];
                PL5_link_b = link_b_FQB03[PL5_ban];
                break;
            case "FQB04":
                PL5_cost   =   cost_FQB04[PL5_ban];
                PL5_moVEB   =   moVEB_FQB04[PL5_ban];
                PL5_long   =   long_FQB04[PL5_ban];
                PL5_middle = middle_FQB04[PL5_ban];
                PL5_hp     =     hp_FQB04[PL5_ban];
                PL5_link_a = link_a_FQB04[PL5_ban];
                PL5_link_b = link_b_FQB04[PL5_ban];
                break;
            case "FQB05":
                PL5_cost   =   cost_FQB05[PL5_ban];
                PL5_moVEB   =   moVEB_FQB05[PL5_ban];
                PL5_long   =   long_FQB05[PL5_ban];
                PL5_middle = middle_FQB05[PL5_ban];
                PL5_hp     =     hp_FQB05[PL5_ban];
                PL5_link_a = link_a_FQB05[PL5_ban];
                PL5_link_b = link_b_FQB05[PL5_ban];
                break;
            case "FQB06":
                PL5_cost   =   cost_FQB06[PL5_ban];
                PL5_moVEB   =   move_FQB06[PL5_ban];
                PL5_long   =   long_FQB06[PL5_ban];
                PL5_middle = middle_FQB06[PL5_ban];
                PL5_hp     =     hp_FQB06[PL5_ban];
                PL5_link_a = link_a_FQB06[PL5_ban];
                PL5_link_b = link_b_FQB06[PL5_ban];
                break;
            case "VEB01":
                PL5_cost   =   cost_VEB01[PL5_ban];
                PL5_move   =   move_VEB01[PL5_ban];
                PL5_long   =   long_VEB01[PL5_ban];
                PL5_middle = middle_VEB01[PL5_ban];
                PL5_hp     =     hp_VEB01[PL5_ban];
                PL5_link_a = link_a_VEB01[PL5_ban];
                PL5_link_b = link_b_VEB01[PL5_ban];
                break;
            case "BP01":
                PL5_cost   =   cost_BP01[PL5_ban];
                PL5_move   =   move_BP01[PL5_ban];
                PL5_long   =   long_BP01[PL5_ban];
                PL5_middle = middle_BP01[PL5_ban];
                PL5_hp     =     hp_BP01[PL5_ban];
                PL5_link_a = link_a_BP01[PL5_ban];
                PL5_link_b = link_b_BP01[PL5_ban];
                break;
            case "BP02":
                PL5_cost   =   cost_BP02[PL5_ban];
                PL5_move   = move_BP02[PL5_ban];
                PL5_long   =   long_BP02[PL5_ban];
                PL5_middle = middle_BP02[PL5_ban];
                PL5_hp     =     hp_BP02[PL5_ban];
                PL5_link_a = link_a_BP02[PL5_ban];
                PL5_link_b = link_b_BP02[PL5_ban];
                break;
            case "BP03":
                PL5_cost   =   cost_BP03[PL5_ban];
                PL5_move   = moVEB_BP03[PL5_ban];
                PL5_long   =   long_BP03[PL5_ban];
                PL5_middle = middle_BP03[PL5_ban];
                PL5_hp     =     hp_BP03[PL5_ban];
                PL5_link_a = link_a_BP03[PL5_ban];
                PL5_link_b = link_b_BP03[PL5_ban];
                break;
            case "BP04":
                PL5_cost   =   cost_BP04[PL5_ban];
                PL5_move   = moVEB_BP04[PL5_ban];
                PL5_long   =   long_BP04[PL5_ban];
                PL5_middle = middle_BP04[PL5_ban];
                PL5_hp     =     hp_BP04[PL5_ban];
                PL5_link_a = link_a_BP04[PL5_ban];
                PL5_link_b = link_b_BP04[PL5_ban];
                break;
            case "BP05":
                PL5_cost   =   cost_BP05[PL5_ban];
                PL5_move   = moVEB_BP05[PL5_ban];
                PL5_long   =   long_BP05[PL5_ban];
                PL5_middle = middle_BP05[PL5_ban];
                PL5_hp     =     hp_BP05[PL5_ban];
                PL5_link_a = link_a_BP05[PL5_ban];
                PL5_link_b = link_b_BP05[PL5_ban];
                break;
            case "BP06":
                PL5_cost   =   cost_BP06[PL5_ban];
                PL5_move   = moVEB_BP06[PL5_ban];
                PL5_long   =   long_BP06[PL5_ban];
                PL5_middle = middle_BP06[PL5_ban];
                PL5_hp     =     hp_BP06[PL5_ban];
                PL5_link_a = link_a_BP06[PL5_ban];
                PL5_link_b = link_b_BP06[PL5_ban];
                break;
            case "PR":
                PL5_cost   =   cost_PR[PL5_ban];
                PL5_move   =   moVEB_PR[PL5_ban];
                PL5_long   =   long_PR[PL5_ban];
                PL5_middle = middle_PR[PL5_ban];
                PL5_hp     =     hp_PR[PL5_ban];
                PL5_link_a = link_a_PR[PL5_ban];
                PL5_link_b = link_b_PR[PL5_ban];
                break;
            case "TEST":
                PL5_cost   =   cost_TEST[PL5_ban];
                PL5_move   = moVEB_TEST[PL5_ban];
                PL5_long   =   long_TEST[PL5_ban];
                PL5_middle = middle_TEST[PL5_ban];
                PL5_hp     =     hp_TEST[PL5_ban];
                PL5_link_a = link_a_TEST[PL5_ban];
                PL5_link_b = link_b_TEST[PL5_ban];
                break;
            case "TEST-A":
                PL5_cost   =   cost_TEST-a[PL5_ban];
                PL5_move   = moVEB_TEST-a[PL5_ban];
                PL5_long   =   long_TEST-a[PL5_ban];
                PL5_middle = middle_TEST-a[PL5_ban];
                PL5_hp     =     hp_TEST-a[PL5_ban];
                PL5_link_a = link_a_TEST-a[PL5_ban];
                PL5_link_b = link_b_TEST-a[PL5_ban];
                break;
            case "ST01":
                PL5_cost   =   cost_ST01[PL5_ban];
                PL5_moVEB   = moVEB_ST01[PL5_ban];
                PL5_long   =   long_ST01[PL5_ban];
                PL5_middle = middle_ST01[PL5_ban];
                PL5_hp     =     hp_ST01[PL5_ban];
                PL5_link_a = link_a_ST01[PL5_ban];
                PL5_link_b = link_b_ST01[PL5_ban];
                break;
            case "ST02":
                PL5_cost   =   cost_ST02[PL5_ban];
                PL5_moVEB   = moVEB_ST02[PL5_ban];
                PL5_long   =   long_ST02[PL5_ban];
                PL5_middle = middle_ST02[PL5_ban];
                PL5_hp     =     hp_ST02[PL5_ban];
                PL5_link_a = link_a_ST02[PL5_ban];
                PL5_link_b = link_b_ST02[PL5_ban];
                break;
            case "ST03":
                PL5_cost   =   cost_ST03[PL5_ban];
                PL5_moVEB   = moVEB_ST03[PL5_ban];
                PL5_long   =   long_ST03[PL5_ban];
                PL5_middle = middle_ST03[PL5_ban];
                PL5_hp     =     hp_ST03[PL5_ban];
                PL5_link_a = link_a_ST03[PL5_ban];
                PL5_link_b = link_b_ST03[PL5_ban];
                break;
            default:
                PL5_cost   = "-";
                PL5_move   = "-";
                PL5_long   = "-";
                PL5_middle = "-";
                PL5_hp     = "-";
                PL5_link_a = "-";
                PL5_link_b = "-";
                break;
        }
        //ミス入力対策
        if(fin != "true"){
            if(!PL5_cost){
                PL5_cost = "-";
            }
            if(!PL5_move){
                PL5_move = "-";
            }
            if(!PL5_long){
                PL5_long = "-";
            }
            if(!PL5_middle){
                PL5_middle = "-";
            }
            if(!PL5_hp){
                PL5_hp = "-";
            }
            if(!PL5_link_a){
                PL5_link_a = "-";
            }
            if(!PL5_link_b){
                PL5_link_b = "-";
            }
        }
        //数値入力プロトコル
        if(fin != "true"){
        document.getElementById("cost_PL5").textContent = PL5_cost;
        document.getElementById("move_PL5").textContent = PL5_move;
        document.getElementById("long_PL5").textContent = PL5_long;
        document.getElementById("middle_PL5").textContent = PL5_middle;
        document.getElementById("HP_PL5").textContent = PL5_hp;
        document.getElementById("link_PLa5").textContent = PL5_link_a;
        document.getElementById("link_PLb5").textContent = PL5_link_b;
        }
        //最終数値入力プロトコル
        //MSPL1
        if(fin != "true"){
            all_1_cost   = (Number(MS1_cost)   + Number(PL1_cost))   *link_kouka_cost[1];
            all_1_move   = (Number(MS1_move)   + Number(PL1_move))   *link_kouka_move[1];
            all_1_long   = (Number(MS1_long)   + Number(PL1_long))   *link_kouka_long[1];
            all_1_middle = (Number(MS1_middle) + Number(PL1_middle)) *link_kouka_middle[1];
            all_1_hp     = (Number(MS1_hp)     + Number(PL1_hp))     *link_kouka_hp[1];
            if(!all_1_cost){
                all_1_cost = "-";
            }
            if(!all_1_move){
                all_1_move = "-";
            }
            if(!all_1_long){
                all_1_long = "-";
            }
            if(!all_1_middle){
                all_1_middle = "-";
            }
            if(!all_1_hp){
                all_1_hp = "-";
            }
            document.getElementById("cost_1").textContent = all_1_cost;
            document.getElementById("move_1").textContent = all_1_move;
            document.getElementById("long_1").textContent = all_1_long;
            document.getElementById("middle_1").textContent = all_1_middle;
            document.getElementById("HP_1").textContent = all_1_hp;
        }
        //MSPL2
        if(fin != "true"){
            all_2_cost   = (Number(MS2_cost)   + Number(PL2_cost))   *link_kouka_cost[2];
            all_2_move   = (Number(MS2_move)   + Number(PL2_move))   *link_kouka_move[2];
            all_2_long   = (Number(MS2_long)   + Number(PL2_long))   *link_kouka_long[2];
            all_2_middle = (Number(MS2_middle) + Number(PL2_middle)) *link_kouka_middle[2];
            all_2_hp     = (Number(MS2_hp)     + Number(PL2_hp))     *link_kouka_hp[2];
            if(!all_2_cost){
                all_2_cost = "-";
            }
            if(!all_2_move){
                all_2_move = "-";
            }
            if(!all_2_long){
                all_2_long = "-";
            }
            if(!all_2_middle){
                all_2_middle = "-";
            }
            if(!all_2_hp){
                all_2_hp = "-";
            }
            document.getElementById("cost_2").textContent = all_2_cost;
            document.getElementById("move_2").textContent = all_2_move;
            document.getElementById("long_2").textContent = all_2_long;
            document.getElementById("middle_2").textContent = all_2_middle;
            document.getElementById("HP_2").textContent = all_2_hp;
        }
        //MSPL3
        if(fin != "true"){
            all_3_cost   = (Number(MS3_cost)   + Number(PL3_cost))   *link_kouka_cost[3];
            all_3_move   = (Number(MS3_move)   + Number(PL3_move))   *link_kouka_move[3];
            all_3_long   = (Number(MS3_long)   + Number(PL3_long))   *link_kouka_long[3];
            all_3_middle = (Number(MS3_middle) + Number(PL3_middle)) *link_kouka_middle[3];
            all_3_hp     = (Number(MS3_hp)     + Number(PL3_hp))     *link_kouka_hp[3];
            if(!all_3_cost){
                all_3_cost = "-";
            }
            if(!all_3_move){
                all_3_move = "-";
            }
            if(!all_3_long){
                all_3_long = "-";
            }
            if(!all_3_middle){
                all_3_middle = "-";
            }
            if(!all_3_hp){
                all_3_hp = "-";
            }
            document.getElementById("cost_3").textContent = all_3_cost;
            document.getElementById("move_3").textContent = all_3_move;
            document.getElementById("long_3").textContent = all_3_long;
            document.getElementById("middle_3").textContent = all_3_middle;
            document.getElementById("HP_3").textContent = all_3_hp;
        }
        //MSPL4
        if(fin != "true"){
            all_4_cost   = (Number(MS4_cost)   + Number(PL4_cost))   *link_kouka_cost[4];
            all_4_move   = (Number(MS4_move)   + Number(PL4_move))   *link_kouka_move[4];
            all_4_long   = (Number(MS4_long)   + Number(PL4_long))   *link_kouka_long[4];
            all_4_middle = (Number(MS4_middle) + Number(PL4_middle)) *link_kouka_middle[4];
            all_4_hp     = (Number(MS4_hp)     + Number(PL4_hp))     *link_kouka_hp[4];
            if(!all_4_cost){
                all_4_cost = "-";
            }
            if(!all_4_move){
                all_4_move = "-";
            }
            if(!all_4_long){
                all_4_long = "-";
            }
            if(!all_4_middle){
                all_4_middle = "-";
            }
            if(!all_4_hp){
                all_4_hp = "-";
            }
            document.getElementById("cost_4").textContent = all_4_cost;
            document.getElementById("move_4").textContent = all_4_move;
            document.getElementById("long_4").textContent = all_4_long;
            document.getElementById("middle_4").textContent = all_4_middle;
            document.getElementById("HP_4").textContent = all_4_hp;
        }
        //MSPL5
        if(fin != "true"){
            all_5_cost   = (Number(MS5_cost)   + Number(PL5_cost))   *link_kouka_cost[5];
            all_5_move   = (Number(MS5_move)   + Number(PL5_move))   *link_kouka_move[5];
            all_5_long   = (Number(MS5_long)   + Number(PL5_long))   *link_kouka_long[5];
            all_5_middle = (Number(MS5_middle) + Number(PL5_middle)) *link_kouka_middle[5];
            all_5_hp     = (Number(MS5_hp)     + Number(PL5_hp))     *link_kouka_hp[5];
            if(!all_5_cost){
                all_5_cost = "-";
            }
            if(!all_5_move){
                all_5_move = "-";
            }
            if(!all_5_long){
                all_5_long = "-";
            }
            if(!all_5_middle){
                all_5_middle = "-";
            }
            if(!all_5_hp){
                all_5_hp = "-";
            }
            document.getElementById("cost_5").textContent = all_5_cost;
            document.getElementById("move_5").textContent = all_5_move;
            document.getElementById("long_5").textContent = all_5_long;
            document.getElementById("middle_5").textContent = all_5_middle;
            document.getElementById("HP_5").textContent = all_5_hp;
        }
    }
}
