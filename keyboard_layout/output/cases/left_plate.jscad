function board_left_keys_cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-11.525,-9.9135778],[-11.525,67.0380634]]).appendArc([-10.1010828,68.9532993],{"radius":2,"clockwise":true,"large":false}).appendPoint([7.4095725,74.2203201]).appendArc([7.5416188,74.2551692],{"radius":2,"clockwise":true,"large":false}).appendPoint([30.3334949,79.444903]).appendArc([30.9274059,79.4891945],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.3463895,76.3766161]).appendArc([72.7836519,76.2941157],{"radius":2,"clockwise":true,"large":false}).appendPoint([91.109264,70.6663227]).appendArc([91.4869001,70.5892016],{"radius":2,"clockwise":false,"large":false}).appendPoint([110.1636683,68.6219797]).appendArc([110.2684971,68.6137177],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.6500854,67.5979717]).appendArc([131.5418809,65.4818946],{"radius":2,"clockwise":true,"large":false}).appendPoint([127.6917243,0.7887568]).appendArc([127.7168227,0.332738],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.5961346,-10.654238]).appendArc([129.2007871,-12.2227617],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.146358,-32.7714939]).appendArc([111.3913386,-33.5321448],{"radius":2,"clockwise":true,"large":false}).appendPoint([95.2344619,-32.0802961]).appendArc([95.0721109,-32.0589773],{"radius":2,"clockwise":true,"large":false}).appendPoint([35.0282291,-21.6584222]).appendArc([34.9441161,-21.6419888],{"radius":2,"clockwise":true,"large":false}).appendPoint([-9.9504618,-11.8677994]).appendArc([-11.525,-9.9135778],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[118.2855316,60.6582358],"radius":1.2})
.union(
    CAG.circle({"center":[2,68.525],"radius":1.2})
).union(
    CAG.circle({"center":[2,-11.525],"radius":1.2})
).union(
    CAG.circle({"center":[102.7199021,-26.1711188],"radius":1.2})
).union(
    CAG.circle({"center":[49.5009482,37.9144731],"radius":1.3})
).union(
    new CSG.Path2D([[91.2461535,51.0602138],[104.2283373,50.3798464]]).appendArc([104.7538201,50.8529932],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([105.4341875,63.835177]).appendArc([104.9610407,64.3606598],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([91.9788569,65.0410272]).appendArc([91.4533741,64.5678804],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.7730067,51.5856966]).appendArc([91.2461535,51.0602138],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.2517703,32.0862526],[103.2339541,31.4058852]]).appendArc([103.7594369,31.879032],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104.4398043,44.8612158]).appendArc([103.9666575,45.3866986],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.9844737,46.067066]).appendArc([90.4589909,45.5939192],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([89.7786235,32.6117354]).appendArc([90.2517703,32.0862526],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51.6110508,20.8556604],[64.5932346,20.175293]]).appendArc([65.1187174,20.6484398],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([65.7990848,33.6306236]).appendArc([65.325938,34.1561064],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.3437542,34.8364738]).appendArc([51.8182714,34.363327],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([51.137904,21.3811432]).appendArc([51.6110508,20.8556604],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[88.2630039,-5.8616698],[101.2451877,-6.5420372]]).appendArc([101.7706705,-6.0688904],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([102.4510379,6.9132934]).appendArc([101.9778911,7.4387762],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([88.9957073,8.1191436]).appendArc([88.4702245,7.6459968],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([87.7898571,-5.336187]).appendArc([88.2630039,-5.8616698],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[69.3413787,-3.8686571],[82.3235625,-4.5490245]]).appendArc([82.8490453,-4.0758777],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([83.5294127,8.9063061]).appendArc([83.0562659,9.4317889],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([70.0740821,10.1121563]).appendArc([69.5485993,9.6390095],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([68.8682319,-3.3431743]).appendArc([69.3413787,-3.8686571],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[34.675706,60.7491606],[47.6578898,60.0687932]]).appendArc([48.1833726,60.54194],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([48.86374,73.5241238]).appendArc([48.3905932,74.0496066],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([35.4084094,74.729974]).appendArc([34.8829266,74.2568272],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([34.2025592,61.2746434]).appendArc([34.675706,60.7491606],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[107.9173325,6.126131],[120.8995163,5.4457636]]).appendArc([121.4249991,5.9189104],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([122.1053665,18.9010942]).appendArc([121.6322197,19.426577],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.6500359,20.1069444]).appendArc([108.1245531,19.6337976],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([107.4441857,6.6516138]).appendArc([107.9173325,6.126131],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[72.3245283,53.0532265],[85.3067121,52.3728591]]).appendArc([85.8321949,52.8460059],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([86.5125623,65.8281897]).appendArc([86.0394155,66.3536725],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([73.0572317,67.0340399]).appendArc([72.5317489,66.5608931],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.8513815,53.5787093]).appendArc([72.3245283,53.0532265],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[50.6166676,1.8816992],[63.5988514,1.2013318]]).appendArc([64.1243342,1.6744786],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([64.8047016,14.6566624]).appendArc([64.3315548,15.1821452],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([51.349371,15.8625126]).appendArc([50.8238882,15.3893658],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([50.1435208,2.407182]).appendArc([50.6166676,1.8816992],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.605434,39.8296216],[65.5876178,39.1492542]]).appendArc([66.1131006,39.622401],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66.793468,52.6045848]).appendArc([66.3203212,53.1300676],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([53.3381374,53.810435]).appendArc([52.8126546,53.3372882],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.1322872,40.3551044]).appendArc([52.605434,39.8296216],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.6813228,41.7751994],[46.6635066,41.094832]]).appendArc([47.1889894,41.5679788],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47.8693568,54.5501626]).appendArc([47.39621,55.0756454],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([34.4140262,55.7560128]).appendArc([33.8885434,55.282866],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.208176,42.3006822]).appendArc([33.6813228,41.7751994],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[31.6925564,3.827277],[44.6747402,3.1469096]]).appendArc([45.200223,3.6200564],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([45.8805904,16.6022402]).appendArc([45.4074436,17.127723],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([32.4252598,17.8080904]).appendArc([31.899777,17.3349436],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([31.2194096,4.3527598]).appendArc([31.6925564,3.827277],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32.6869396,22.8012382],[45.6691234,22.1208708]]).appendArc([46.1946062,22.5940176],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([46.8749736,35.5762014]).appendArc([46.4018268,36.1016842],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.419643,36.7820516]).appendArc([32.8941602,36.3089048],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([32.2137928,23.326721]).appendArc([32.6869396,22.8012382],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[53.5998172,58.8035828],[66.582001,58.1232154]]).appendArc([67.1074838,58.5963622],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([67.7878512,71.578546]).appendArc([67.3147044,72.1040288],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([54.3325206,72.7843962]).appendArc([53.8070378,72.3112494],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([53.1266704,59.3290656]).appendArc([53.5998172,58.8035828],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[89.2573871,13.1122914],[102.2395709,12.431924]]).appendArc([102.7650537,12.9050708],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([103.4454211,25.8872546]).appendArc([102.9722743,26.4127374],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([89.9900905,27.0931048]).appendArc([89.4646077,26.619958],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([88.7842403,13.6377742]).appendArc([89.2573871,13.1122914],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[70.3357619,15.1053041],[83.3179457,14.4249367]]).appendArc([83.8434285,14.8980835],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([84.5237959,27.8802673]).appendArc([84.0506491,28.4057501],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.0684653,29.0861175]).appendArc([70.5429825,28.6129707],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([69.8626151,15.6307869]).appendArc([70.3357619,15.1053041],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.3301451,34.0792653],[84.3123289,33.3988979]]).appendArc([84.8378117,33.8720447],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85.5181791,46.8542285]).appendArc([85.0450323,47.3797113],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([72.0628485,48.0600787]).appendArc([71.5373657,47.5869319],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([70.8569983,34.6047481]).appendArc([71.3301451,34.0792653],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[102.8728596,-17.2120132],[113.1169993,-25.2156125]]).appendArc([113.8188355,-25.1294378],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([121.8224347,-14.8852981]).appendArc([121.73626,-14.1834619],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([111.4921203,-6.1798627]).appendArc([110.7902841,-6.2660374],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([102.7866849,-16.5101771]).appendArc([102.8728596,-17.2120133],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12.5,55.715],[25.5,55.715]]).appendArc([26,56.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([26,69.215]).appendArc([25.5,69.715],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12.5,69.715]).appendArc([12,69.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12,56.215]).appendArc([12.5,55.715],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12.5,36.715],[25.5,36.715]]).appendArc([26,37.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([26,50.215]).appendArc([25.5,50.715],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12.5,50.715]).appendArc([12,50.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12,37.215]).appendArc([12.5,36.715],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12.5,17.715],[25.5,17.715]]).appendArc([26,18.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([26,31.215]).appendArc([25.5,31.715],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12.5,31.715]).appendArc([12,31.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12,18.215]).appendArc([12.5,17.715],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12.5,-1.285],[25.5,-1.285]]).appendArc([26,-0.785],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([26,12.215]).appendArc([25.5,12.715],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12.5,12.715]).appendArc([12,12.215],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([12,-0.785]).appendArc([12.5,-1.285],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.5,50],[6.5,50]]).appendArc([7,50.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([7,63.5]).appendArc([6.5,64],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-6.5,64]).appendArc([-7,63.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-7,50.5]).appendArc([-6.5,50],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.5,31],[6.5,31]]).appendArc([7,31.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([7,44.5]).appendArc([6.5,45],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-6.5,45]).appendArc([-7,44.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-7,31.5]).appendArc([-6.5,31],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.5,12],[6.5,12]]).appendArc([7,12.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([7,25.5]).appendArc([6.5,26],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-6.5,26]).appendArc([-7,25.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-7,12.5]).appendArc([-6.5,12],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.5,-7],[6.5,-7]]).appendArc([7,-6.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([7,6.5]).appendArc([6.5,7],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-6.5,7]).appendArc([-7,6.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-7,-6.5]).appendArc([-6.5,-7],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[40.7820852,-18.1680593],[53.5432386,-20.6485763]]).appendArc([54.1294567,-20.2531672],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([56.6099737,-7.4920138]).appendArc([56.2145646,-6.9057957],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([43.4534112,-4.4252787]).appendArc([42.8671931,-4.8206878],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([40.3866761,-17.5818412]).appendArc([40.7820852,-18.1680593],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[59.4330017,-21.7934302],[72.1941551,-24.2739472]]).appendArc([72.7803732,-23.8785381],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([75.2608902,-11.1173847]).appendArc([74.8654811,-10.5311666],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([62.1043277,-8.0506496]).appendArc([61.5181096,-8.4460587],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([59.0375926,-21.2072121]).appendArc([59.4330017,-21.7934302],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[78.3224294,-24.1917672],[91.0835828,-26.6722842]]).appendArc([91.6698009,-26.2768751],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([94.1503179,-13.5157217]).appendArc([93.7549088,-12.9295036],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([80.9937554,-10.4489866]).appendArc([80.4075373,-10.8443957],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([77.9270203,-23.6055491]).appendArc([78.3224294,-24.1917672],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function left_plate_case_fn() {
                    

                // creating part 0 of case left_plate
                let left_plate__part_0 = board_left_keys_cutouts_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let left_plate__part_0_bounds = left_plate__part_0.getBounds();
                let left_plate__part_0_x = left_plate__part_0_bounds[0].x + (left_plate__part_0_bounds[1].x - left_plate__part_0_bounds[0].x) / 2
                let left_plate__part_0_y = left_plate__part_0_bounds[0].y + (left_plate__part_0_bounds[1].y - left_plate__part_0_bounds[0].y) / 2
                left_plate__part_0 = translate([-left_plate__part_0_x, -left_plate__part_0_y, 0], left_plate__part_0);
                left_plate__part_0 = rotate([0,0,0], left_plate__part_0);
                left_plate__part_0 = translate([left_plate__part_0_x, left_plate__part_0_y, 0], left_plate__part_0);

                left_plate__part_0 = translate([0,0,0], left_plate__part_0);
                let result = left_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_plate_case_fn();
            }

        