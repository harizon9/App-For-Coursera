package com.swc.gettask;

import java.util.Collections;
import java.util.Map;
import java.util.HashMap;
import java.nio.CharBuffer;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.lang.reflect.Method;
import org.appcelerator.kroll.util.KrollAssetHelper;
import org.appcelerator.kroll.common.Log;

public class AssetCryptImpl implements KrollAssetHelper.AssetCrypt
{
	private static class Range {
		int offset;
		int length;
		public Range(int offset, int length) {
			this.offset = offset;
			this.length = length;
		}
	}

		private static final byte[] assetsBytes = Charset.forName("ISO-8859-1").encode(initAssetsBytes()).array();
	private static CharBuffer initAssetsBytes() {
		CharBuffer buffer = CharBuffer.allocate(11196);
		buffer.append("v\333\210:c\335\270\365\302\203\210\177\373*F\340&\343\267\346\011\2635\003&>89\244\345\244\341\366\211\372\230\346\273\200\301\256\023\305\260\312\245/\357QC\347\272<\021\356'\\*\021\277\015\303\000\021\206\364\010\373\340\357\342\337g\025\260\271\226;\216\006\231\303\234\036\036\212\222\276\021\311\002%v\372b=\214\2233V\336\325J\317a\307\216\214\330\373\263>\207\213\362 \354F[;\001\252\370\264\342\324\343N\254\2508\266\266\204\316#\202\252;\237\347R[\375\032\311l\242\016`=H~q\355\210F\005K\332\212\016\270gM\365\215\263\343\250)\353\012\214\217\304\215\336\263\277)\3064\3372\204P\374\373\273\366\021\320\206MM$\302R\2752\211\205\017\234\210\026>pP\264E\222b-\252\214\246*\350h\231\313\252\026\240\344\013\013\0225}b\316\300\262\374\031r[S\360,\300\254\370\376<\267\244@]\261V\001\335\001]\227!\004\360\251O\222\313\342\014\0031\014>f\346\331\367d}\244\324^b\247\360Y\274\303\012\202\224#\346\364\320\361\030\277\013}\334)<\254:\232A\206:\267\374R%\025\342\266c\340=\247\253*\\$(\331cP\340\000\375\016\004\201>o\332T\225?9\2218C\211{\3600`^(}\254\273\242\005\200*8\232%\371\003Q>\033\35438r\020\343\350P\352\3018w\360.\313\313\036\2315`\217\027\265d\243\245x\362\255;\327\337t\366`\344\233A\256\035\202\031<\002\031'\212\316X\032<p\220\2265\325\340\311M>\267\361\330\234\377\267\342G\022\362\021\231\316M\3429\203\011\223Y}\006\362J\177q\247S\020\012\025Ez\017\312vKw\366\273\205\303\225\027\363\277\354\3218\210\372z\025\250\262\213\020\227\226\266\310`M\312\341\257\337\255\021\003\207\361@8\344\031\222\253\307\251:\371\266?D\213\333 z\305\217\021T7\254KO\202]x\302\2049\247?\372\324N#\333\260x\200\375\031iP\003\324\033Um@\304\246\006rMG\243\234\257\233\215L\3023=\224\233y\366g\314\2610\216}\313zrm\274+\363\006\004\364\343/0\214\347\025\325\037\037\3462\232\311w\020G~\345p\267\317-\334\333}\024y\211]\305\246:+XUc\227\0046\335\242!n9\364fUn\022\004\227\245)\035\223\305\272^\034\365\202\205o4h`\015\020\024\001W;\242}qj\017\265P\214\304\370@\201\026\267\314#\201s\303\245\334\3007\312b\3300]\306^\335\233\376\324\226\220\211:\020\3423\333\0337U2\353\306Z\317M\2740\037g\037}\312\010\371\206\032\273Nz\030u\364\\Qo\231z\334\251\024\012!\304\201;\233-\300cjB\206Y;\3759q{\272\344\026\211\371\370c\272\363\013\022J\364\263\201{\025=\007\233\002\027\225\213#\324\337\222N*>S\260\334\313\215{.T\350\234\224\324\305,sL\311^7\312\012\016\330\352\273\203\377D#\206\217\275\026\302d\253\265#U0\034\366\337W\261\005\023\010&\341B\000\003f\200\275|\376\225\222\027\253\020\313\374\226\252\204\010\251\211\300\202,\006M;\335\236\0333\242\315\326G\032\263CW\354\316\353\256+)4x\373A2\202\3031\270~\211\177+\335\225\215\004f\036\232a\036\035\332f\247\200\031n\270\354$;Xoj\361\256\312,\230Zf\335\377\351*\241\262\330\300D\304@X=;\242:\023T\256\335\252\367\367 3M\375\361\353\273\244\214q\362{\330P\034\241\306`\214\333\223[\273\032\0211h\275\2753\326\313t\261\243\034AM\374o\254\350\332V\230c^\362\235\024\362\004_\004\325s\326\326\003\261\013\005\225\027\346\355\027\360\224\354&\376\256w\363\377\253\324d\004w\037I\021\037\311\334\243w-Y\360i\213\220\376\341\336\234,\3630&v\020\027\031o?~\253\227$\350\013\216\305K\243\360\356\362T\363\031\217\354\024\366\234\"\373\245\275KM\316@]\255y\2250H-\250\250]m3\232\222\022\177\370\365uU\373\241\342\027HOp\336q\220\2617\270\253\244\000\235w\020\267$$\001!V\354Q\244\230\2038\316M\241!\333q\3041\373\211\312\275\316\324b\016i\346Rm\351\250\015\014\361\241\357\222\321?s\262\023&\235I\373\246\341\212[\344\3130\303\213xt(Y\266W\212\210\234\0175\341\277\216A\314\327p\006lb\362ia\374\2420\317G\222+\357d\005\333\226\352\250vNA\321u\341E\246g7\256\317[z\353Z\243,\30666\327\034'\335\323\005\012P\"j\017\304\337\363\242\227;\313\316@\342\250\366\305\324MG\261\373\274R\0335\354\304\256\301\224I\205\004\377MQ\333\205\232\323\225\220\256\346,\231\003I\372Oh#\206&\361\005C\200\323\011\021\334A\005 FS\325[9\377\225\2705\311\342\332U\233\264\321\036{&|\203\362\235S\275\213\322\251oXd\213>3$\307\031\376Q\321\250\211\374\334\277Fe\236\213\277(\353Yg\244\366R\305+E\207\366\014N \275\376\363T\235\313^T\331U\237\275\236G\213~\363stw\206\013\227\007\344P\246d\034\267\242Au\353\365,|\326%\371t\220Q=\255\341\024*D\007\206\336\017\031\375\376?8Z\177u\350|\230\305%\013\312V=\321\206\020\231\2056x\360\260\272yO\323\010Yx\2747M\335\271>B\017S\037(\033(\352G\332t\256\342.\370\330Pj.\300sK\262\034pr\037\313\266J\024G\300\366e\275y\177\376H\302#\254\212MK\361\001\273)\265!\213\306d`\364<\306Y\203\263Xr\234\307\346\360_\234we\363\360\225\353\012\246\256\205\353\004\222f7\371\374S|\307}\211Qt\230,O\230\262%J\372\316\346\311\324\244D\277\243\234o\210\217\321\320G\350$\353lV\3418\334+\271\220\316\020\313S\226\364\353\214\005\234\301\020Y\020\271\3754\356pGQ\031'\235\226\233F\244R\274m3\367R\270\354\300\022\015[\033\222|\3247&/\315\305\356\227\363\245\332L\302\177\253]\355vt\306n|\303\214\304R\035\234jn\307Q\356\301a\321}\026\177\005\360\310\307\214\245\020k\317\216A\231\317\304\010\273\026\231$\237Z\300\033_w?\311\231\177\341z\012\321v\215\260J!\022\345\257R\0133\3403\216\320\232l=\207(m\3010\365Si\251\233\365\3171\373\304)\332c\337~\355\2610\3252Z\305g\275\233b\236\320QH\302#\254\212MK\361\001\273)\265!\213\306d`\364<\306Y\203\263Xr\234\307\346\360_\234w\215\266?\251\240\021\037\3507n\345\243\302\022\005\355\"\364\257WtL\230\004e\230\024\263\375Ss\320\026\2179\303;9\"Bt\246\355(\022\316d\371T\273EM\3132;\372\362\211I\333\313\021)R\222)S\353\036_r\361\364@-K\016\251%\031V)\317\322\252mZ\366S\346\306\226\217 \271$\332kv\325\353\003\347\221\01346\363-\342\010~Q\360GS\001\347uAL\2231+\005\217\270\364?\324\327\221\2372\376\270tv\336\304\271\0164\255el\207\220\351\326\000\333]%6E\227\205\214F\017\271\330\312\215@B\375\241\254\331\352\300\274\006\307'5\317t\272\336\006c\270\302\240\033W\022UW'5\013d\037\033Cc\332\367:quK\233\207;lqp\024\2364(\020\271\006_[\216p;0,/\233\234\372k\356\\\204\036\0002a\274\315gM\273\232\260\3638O\331\270\316^\233H;\215[\256\001\233\223\301]\021\365^\177o\005\267\017/\272^eS\304\352\224\310}Iy\246\021\216\001~k@\270\177\351,D\210z)\211>?\366\330\252^\026\315\341\323\272R7\232\020\272%x\360\367\273\377(\027\321_\200gr\035\3160\036\327\365AL\211\262\230\006B^{\275&\022\274Eb\210\374i\\\233\"`\002\352\263\223\333\263\017\246\255`P1d\031\3077\202\337C'\212t\341\034\303\011E`\014 \261O\263\260\301\277\023\361\004\371\323\341\360\335s_\231'\243\201\032\0150\020\2256\031B\031\371\306~\001\333\277\231>\232\372\021\271\222]k_\326\206O^^`1\341\012\331F\313\367\351\355\340\360'\351=\215\201\244\331\335\213v\177\301\261c\2610[\252\233\262\361\337\270\005\221\331U\243\315?m&\254\225\303\243\002\022P<%\226\354xB\210\035\343\"\374T6` \010\206)k\024x\035\370\316\3207O|\317\211\253%\235z\371\376\272\030\025\322\367e\322\224\217\002q}\3322\367;}\214B\001\210\237\031\037N\250;\304\376%\204s]\213\036^\212\214\310\002\335V\262\341I\222\217\223\357r\004\021#\212\341\346\223/W\177\000\031y\024\020\3258\221\022\251u\360\230q\307HYi~\350T1\210\344r\221\270\364\257j\177\022\301vI]P%cj\307\224\027A\014\3278:9\023H\371\012\267UEM\014\354\342(\313=\345\316R~e\244M\376\230D\360\211!\351\211\304\177\030\271<\223\361#\301\244,\343\302a@\240\362\266!\015\373\245\315+5\364\\L?K\356\326(\370\257\264\012\241x\021\310\300\034\257\363q.#\265\216\332#\263\3249\014>\3641\373^H\034!\202\320>\267\310\343\320\200\262\372\334\310\320[3\003\234\223\351\036n\351\222\2674\246\322=\030\"FG\314\211#A\2324[\355bq\237\235\204\235\005\207V/\375\327a\305i\205o\225\004\370\366\252I<\213>\203r\312\356\306d \353\376\343\243\017[9\222G\360\361\235\245\321\0151\011\307\266\232ZPqc\024\273m\011m\364\376\0319\275,\274\216\335\223{\032\022\241\301.J#\031'\204iZnR\002\3746Q\312Lu#o\200\310L\030\353\247Tn/\3135\357x\364\370\334\334.\025\323\000\245>\256\204\212\300B/\342\206RR_\216\022M\347\346\307\002\3167\010\261\177\252^\3173OI\321\204\037-h\264\200\375.+\201\023jR\377\351EKu(ish+w\030M\275\310J\337\323\000\245>\256\204\212\300B/\342\206RR_\216\022M\347\346\307\002\3167\010\261\177\252^\3173Oo$3J/8al\360\233\270i\310\012\333\317\235\242\372\254d\255\206l\365\034\335\326!\225\352\011\211\016\321\357\213}\246\317z\220\215$\376\2074{\005\217\354\340\272\274e\333{\3744\020PR\207)\004\364\000\361k\360t\022\266\362\250!z.h&\326\003\224\330=W\025\354\025\036ud\365@m\313\346<\246G\207G\347\011\2570\256\244\256\325\225\200`!\272PH\302`\274A\035z(* ?\265\200SQ\326\3176\3362,\202\332\271\222\375z\275\365\335\004y8\352\274\366U\331\261R\241\376^\364\260\023\301/'a\201C\303LZ\316~\312\242\306\262\205\357\251\376\023\257\357\254\014a\216\371o\3214\024\"-J<\221E\023\306\331%uH-;\350\371\211Q\0228\3116\012\014i\210\243\343X+O\273\323\320\013\370\314\312\374\273I\264T#\023MD\035\250Q\006%\363\361F\250\354q.\223\235\317\307k/Nk\274\375EM`\363\303\001\304L\275\311Z\275\266\035`#\2143h\016\237\0123\336{\342%\006X\305N\340\314,\012[\000\336\360j\207|\357TS\232\241\336\362_\035w.\032+\364.\346g!j\010o\361\024\312]\034\005?\022D\324\012\270\330\245\321\211\205Yiw\375\257\253\212\307<\322\202\003g\360\332\301zX\2417\305\341nl~\030\243\031f\001~\\\310\2558\335\366\334\366\225I\341\267;\006\010\342\031T7\363\361\303e\032\343\230;\035]B\015\336\030q\374\261\203\3727pV\265\212\331\262\216\221yt\237\322\315\350\3376\352/)\022\365\313f\205\203\250f\256;\211\352\370EC\277\345\321\235\013\320*\031S\032\\\371F\035C\314\307\344\262\004\265\002\2334A(\273A+\252\234\311j\335l-\245\264\251\333rPM\262\364+Q,y#\307Eb\316\216~\374\306^ #F\256\010\016\347\2237p\367\377l\301\036x\271,\305R\3516\364\300\225@)\233\3529\023\243x\025\003\352\370\247Y\0032\262\316V\211\366\210\301\204\257\376\330Or\263g\370\202\241\364\345\020\306\213*<9\3019R\236]L\360\177&\377JY\336$\340\234\371\257\026]%\347\272\222\220{$a\346\247\301\007!\250w\244Z+\315[\3109j[\3532^M\266\2143\021\342\353\342\246\215j]\003\365\275\330\314D\016)\224\217\251\321\224\317'\177\257\327\313\257W\327\315O\353\221\012\370\370\200\3324&v\220\326\366\330\250Q\026\223l3F\355\242\254\352\367S\236\033Ca\212S\241\307\252\366Xx\302/\234'\303\345\016\273\244\321g-\321\214T\237\017\374\2538D\360\261\221\336\"\310g=oa\214\271\214\303\0231\205\240\210\317\255\251\210\250%\373o\365Uaz7 w\240\214\204\013\227td\272Fj\346#\271\214\022\013\005W\265\271|\024x\302Y\257\3051\274'\032\353\257\200\277\326&Zr\271\321\330u\252m\211\206\343;D\302\217\266\271\273\366*s\224=\010\271\017\301(\035#\266\335G\273\215Pi\351g\213I\206\002\225\323\262\267\305D\007\372\227Q\376\037\341\364\022(\371\247\244\257C\324Pk\325\273\331\370\273\002Sd\331\233\3378e.\254\365\207w}7\225\275\247\245\273G+\012\244\365\232$u4\352H\332Cl\235\327\313\336<c*i7\312\204r\343m\360\257\021\256|MR\243p0\2713W\353\270$^F\340i\310\374\"|\347:\213u\020\203\3227\025=\302\005Q\267\245\252\250\222:\270\240\261\221\007I\373\377\344u\017+\374\355w\275\254\331\377\024s\335P\"gSq\207m\253\275\246\311\330y\007\323\252u#\203\177\347\246\217\342\266F\3423\221\025\036\211\253z_\214\037\017\261\347'X\365\004\014{\320/\024\012\306w\255&\313\327\251a\343~\324M;\253M\035H\312\277\012\356[\016D?\354\252\206PF0c\271]\204\220\243\327kh\334\332\263\264S\012\341iad7\273G\034n\367\331\321\253\320\021$Q\333\257\307V(\016R\350\270\030\242\274\001tl\202\220{=\264\007?n5\213\312<\272\301\215\244b\035c\326\242\015\344\214m\345P\224\266\037\232\300\227\330@\006\202\305d_x\243\247\020\235\346\3023\273\34388\015\266\277A\323\302\204\337\206\307J=\017\003\322E\264_y\222\243_Z|\204\341&\316\356\021\326\020\376\222\013(\224\372Ha\267\264\363\310\010u\350\204t\201\346\217ID0\316\002\201\341n_\004\364VU|\020\221\"WL\033#H\371\364G\201\374\220\220X\242\"\267\304g7\007?\011$\242\345\374[$Q\345\346\230\037\256\005h]\235\015\240m\265\304h\361\300\222\012\366\212y<.V7\256\201\233\222\036\005\364\220\006\250\314\002\206\005\217\367\333\325(\244\356\034\217\357N\331\346\257Flr\303U\360\207\326p|H\310\253\377\335'\3566\314i(\313\221\354\354\203pN\273\016l\016\255\366fH\3110?n>\326\036H\300f-\221'1\361\253\201\256\027\235K\2152s\006B\277!\314\023\300nA<J\026K5\355\363Yz\254\203\216\377\347\316y\310\252\370s3\2621mk\311\301\023X1k\3429n\316qdY\366S\353\310#\015\231\356\370\011s&\255\216&}\331V{)\337\317\373R\230\340\342\243e\222\217\005\243$'Gl:\240)\256\276\213\356\"\213\034\010\336\221Rcj\251P\341;\217\216Ut\026\252:\022\2572&\226\246vy\223\341\332\211\321\227\213\337\216\353tw\264t\351\371\374ps\350@\177\204\217\211X\312A\324\315O\351`_#\274R\234\362\032\234\3208\271;\3019y\201.{\312\353\220\273.5\036\227nL\327S\373\225\001X \321\316\370\255\336\005C\257~\300\355f\247z\304k\"\305\251\311\364\333!\227\026\275\2129\376\314\332\311T*\003'\321\007\310PR\024\204;\211f\352\341\240\270\367B\376\311;9\021\363\034bD>\336\010e\327y\365\177-\326\033f\2779hT\015\\o\202,&\310t\357\333\266\010b\213\352\257\247v\376\315q,\376\211QA&p#=\310\013$\036cr\367(\332\303}]I{\370O\323\334\351z:\226%U[\241ZT\222\320\245\274\305\264\367\210\030 .\305\372D\031%\360\012\024_\325\221\025\334\250\252\233\352\345p\250\"\012\2223\315\255#\357\352\270\217\357l:\233\323\305}\220h\031L\244_\212\266Q5m\035qF&\205-\302{(s\346\211v;\316\376\207\033T\2203\225\276\315\322\032H\336-\357(\312\251\007\363\026\332\345J\016\221\205\003\217oe\231\241o\037^\233h~\232\017\015\342\205\346\270\346\234Z\261\252^\342\306\347#'\264\011\326\321\242C\323\030\004\022\353\\K}h\024\006;)\366\361\003])Sf8\2046\325gQ\347P.H\022\245\214\201\332\352\012q\275\036\337\371\215\325\3544c\332\320\360\250Q={\356\2570 \325!\313\006 \017I\264%s#\362\377\317 SF\336R\304>/\036\277\363\277\345i'\252\243\325}/LV\021p!\370Mu\361\253\305G\326\377\307u\014c\353\207\016Z\370\245\330\232\230{@`\015\363\015/\246\370a~\006\220\365$\242\241\352v\315\330;,\304\321R\337=\223\336\246U\336R\311\003\230p\353LQ\023\205\336\263\017<w\224\232\206,\202y\317\213W\023\217\251\321\224\317'\177\257\327\313\257W\327\315O\353\265U\260\205\205\377\202\363\037\207\263\263\025\037A\230\026l\213\015\236Pv\202\267\277O\306\225t\232\255A\252G\235s\272i5\214\247\273b\333\011\0243\010\244\350\241h\375\316\207\353\306Q\313Y\352\017\033g\220Q\364\204\327\032Y\212\203\"t\306\306\352!\200\326\241\352\351I\251#\222\024\001\331\356\203UJo\244[c\037\002`\262j\003b!\270\375\270b\035\361\220\355\373%,\246\220]\224\340\000\337L&~\323\342x\317\3771a\034\244\356\200C\"\236\306_\371\366s\356\240\026\303\342\213\210f\265\025\253e\303\356\001O)\311\014t\270\245\000\365\365\210\022\334X\354\353\203\240\201Z \336\232Q]q[=\035\314e\315&m<d\274\207)6\310Jf^w-\322\265:|\204k`\035\015\005\371\263\216\263\312\274^~\356\322\240\210r6B\022\303 \344\224\0374\351\007\351^tf\374\314\330Y B\234P\347\201\017o\271\3249\311$\021\242\241\326\323+!\273\340=\264\311\005(/\235\244f\"J\215Cz\215\243\007\271U?G5\020*\260\266\331.H4\365Hg\353\322\012BE\216C\201\3332\245\272<`\0252\265p\3764\375(\364\332\001@pV\345\302\350\243fb\324r\310\303\011F\222\324nX\\W\237\262\240\204[\012\355\000b\272v\013.exEA^\225\234\025\3036s\237v&\255\354\350r\350xp\226\321\365(E\002\022\266}v\270{\211\231\221\265\200\344\034\253\313*56Ok\014\341o\2701O\337\353c\316\262\331\257\323\022\231g\022Y`\210\256\017K\365'\366t\2666A\033\355\343|\317\244$\365\346s\264\033\304b\252\330\225}\025\375=0\2545\254_2z\361SU\256\347\365\207\373\232\347\236U\236\035.\232\235\364H\210\250\202\346\310\231\207\215\224\313\215\336\033\200o\331_\2365\201\3768W\242\355\234z\334\231C\260s{[\225\350\343\363\353E\351\357O\320\372\271\030\230\314\222\242\2224\215\304\244\207\022\347\250\277\2447\261;\037E1\033\241\217 +t2x;\214\271\372B\250\312\006B\206\317\226\334\366\205\025h\022\272\216\345\306\3548\203\033\375\277A\207\037\201g\177\310\257_VP\203\363\326p\321\353\205V\364\223\256\276\366\245?\026\241\340!\206w\205m\362\261\270M\226\311\227>\327\246a\374y\237#&D6)\017t\270\316\265S_\276A\216t\211\371z\014\234\227\267\362N\013xY\227\234\370\024\027\335l\355\302\356]\253\225\256r\025\024\264\373\007\007\232\223\365\265\232\271\234\023\346\010\200\345]b\177\260\347 ~T\216\262G7I\365\257A\364M3\206\203\341\244O\335o\370\375\305P\341K\333\210\256\017K\365'\366t\2666A\033\355\343|\317d^\300\303\012%\370(\034(@\257\011\204\027\377\"q\231\253\010B/:\277%\022\220\225\277<\304\035\320F<T1\015X\310\026\011\003\343\275\353\357,\257R\242\253\307tJ\301\026\353\342\267\030V\354\256\227+\225\271\276\316\247\266B\005mT\370\306\232\324gK01\372\331\227\343\373\026\273X\246\340\305\231\243\365L\276b\210\010F^i\301E\275\222\004\376W\327>\305S\216\2243\\\247\016*\3278\242\340z\344+\036\375\037\366\277\250\203%\316(\214\236\275\264f\252\027\371,\204\005\272r\331u\265{ \013a\255RT\303=\212)\021\227\230\274z\313/\231\304\345}\013\247\003\372\256{U\323Z\351\241\000\334\373\352\337rZ\215s:1U\314W\362\271\373\310\031d\337\276\322k\225\356\367)\232\011>\306\346\235c\221D\031\312/\355\354\206\346\340\306\240,-\232Ee_\201\243?{\226\360\211\220L\333)\244;\276\331\325\202\346]\272\357u\301\263v\216\227k\260\221i\357q>R\300'\034\335\007\026r\025\"\220R\226\234\037\272z\362\277\363\356\226\011\375\204\357\010b\236\342eG\201ks\237Pg\250\300\316\313O\014\314\251\253\343\225B\205\235\351\257k\226v\003\020\336\013\340\235\230>\223l\254s=\002\306M\002\237g\024\220\263\201\224A\275\210X\325\347U\254\276\312\272V\226zz\327\311\271\275\311\233\276\352\300\024\314\320\201w\263\3274\3661V\363\263\257{2\207@\262\335\300w\326{\231<\371x\274a?\234[\342\255\245\207\015\334M\316tH\374C\264D\336\361\357\327\027\024KY\320Z\326\006\264\032\264\327\343\265*t&\341\275\335\033\231|\033\346X\035xAVq\327\230\345\006\340$D\012~\032\214\265`\221\366x4pG\340o!\0125,.\304\354\357\327:\203\225\004~\227\177g\340\017\313\341\207\215\242\260-!\243\026\350L\352\013_%\323\034\344B\312\375/\354\026\312\245;.\0130\315\312\002\362\354\326\352\341\345\226\274\214&\236'\326\013_N\307\374\035\334\316\011T\\\255Q9\031T\307\355)\333\3364\003\344\211\316\254\036T\346\302eN\270\313#\364l\253\231/\252\253\301\354\322\340\217+\373%\330e\360\335\345\0233\017(\015\320\013>\202\374\314h\216\245\305\217\2135\210\333\241x\260u\035\330\267m\022.gX\210\0278\225\344\324\222\203\334\023\317\026\331\0151\035p\250\025\204\211g\363t%\000?P0\204L\3314\305\300\266\250A\245\026\273\320\013\220\346S\005/\342\255\245\207\015\334M\316tH\374C\264D\336\361\357\327\027\024KY\320Z\326\006\264\032\264\327\343\265*t&\341\275\335\033\231|\033\346X\035xAVq\327\230\345\006\340$D\012~\032\214\265`\221\366D'\264\230\245\021\263R8\237&\302\235\325\337\241\000(\257\310\214,x\036\003KTi\033\364\036W\006\0208\002\272j\352\367i\243\234q:O\263\010\377+\356\227\337M\334\255\274d\365\0261-\345\306\312\216\020D[t\231\237\017\373\340\006\202\023.\034C`\341\376\274\221\0100\374\016\031\256x\023\353\226\177>OL\254H?A\2624y]\354'\216\312\323\215\222n-\032I\256\252,\234\344\017\012\323\201ZW]\032U\034\211~2\256|X)\372&1\354\215k\3340\021\364\027\317 \310D'\277\240N\024\322C\312\227z\350/\223\333\214+Yn\352\272\022Bxdn\022\270\364\303\202\373\351\032\227j\2215\0153\230>w\312\200qA3\354\3715\327\256\330\354\026lX\375\326\024\007km\022\270B\014\252=\032B\323Yq^q):DG\371\243\331\361vH\341L%K\0237\341Q-\361\237 \253\007%-d\3438\260V\330l83\021\007\376\323\354\254\303\221\214\321V#\272\373\332\223G3v\273X\016\220T\222\206\364\000\274l\333\233\224p4\242'\202\\\214\375\\=\027\027S{\003\260\022\333\227\321r\344\246l\241\003\013\206b\310\255Q\222\354\017\327\017\354\"~J8N\356\220\245\375l\025B\336\274g-\321\214T\237\017\374\2538D\360\261\221\336\"\003'\321\007\310PR\024\204;\211f\352\341\240\270\367B\376\311;9\021\363\034bD>\336\010e\327j\362\256\266\367\357iS\341\354\346\003.\3742Q\375\243\000N^p1\021\271w\016xj\010/\227\335\320S\257C2W$c\314--\010\306\014p\013\307>\016\254\377\270\201\253_j\312\032\244\2213k@\270\177\351,D\210z)\211>?\366\330\252}\015\253/\214Ip&\327]\243S*\241\304\244\362\314\272\012\000\217`8\355w\351k&>E\346\371\3505\3163\330\3027\274\375\253\223\232R\333+\006\017&\276\035\361[\241\017t\032y\223qf\264\372dUJ\300W\262\207\034T( \316q\030\321\037'g\331\256\340\300\331\240\030\3016y\320@\030 5\213)F\320\257r\202\014\031\231?3/{\203[\226`h,\373tb\252\366\331/\270h\027)t\003hfN\222[\025\255*]\261\361\202\256D\231\315\254\332`\010\012u\331\322\3553h&\001\212\364\216\231zH\223\030\302\032\354z\337F\255\340\335l\035E\267\020\240\250\312\200\3703\314\003e\3006\224\216@.,\035i.\346\242\315\370^\375\241q\213\035\2348\022\275P\207\233\223+\346|\322\267\225)\352|G\205\330\030_\204O\275\304\273R\1771\227\213{\300/\363\277\300:r\203\276\242\2335\251|\233\317\253\363@\217\307DYu\312[\256\303!\236\016\356\327`\331R\322\274\003\277\011J\271\360s5)\"\324\324\274T\200\024\016/\322\275\210\362\207\256\232\360q\265\024\232\305\207\026'(\177\027:\353\342\363\212GN\335z\227\347\353*\306\345D\2557\011\022\306iN\215-m\222\376\254+/\364\235\024\326tQ\330\203.a\256\030\275\321F\2674\214\363\257\256/\\\372k\217S\275\220!\215\262j\365\227\242\250\201S\3063\302\366\215\027\374h\217\354\351\251g\022\371\2720\034\367\006K\242:(\030\033\331\234\027#<\010\027\310)\224K^\321\021\007Lc3\234r\345\265h\272\263.=^0\024\035\334\230\034\251%\254g~\265\344\3062\317\340`\212\316\304\003\357\372\333.L\327\317\274\002\337\006\202\026\242B\210\227>\312\220\361\252\375\344\347\022\032\274\"\203C\271\3426.\315\310\003\244\370.f\265\0303\301\024-\012\3232\213\231\2560\242\201\313\335b<G\201\343+\371\022\302J\303!#_\026\254\201;Y\261\240\343\3434\373(\026NV-Z=0Sp2\304\000\305f\363RE\014\353RY\312p\3712\236A\255\364\316\246j\205&\224Tje\247{\226\201\275\311\217p\362e\346\3230\366\227:a\020m\331t\304\270\374\275\332\303\011z\364?\007p\305g\224O\000\264\266\0255\363j\347/@q\321\3735v\003'\321\007\310PR\024\204;\211f\352\341\240\270\367B\376\311;9\021\363\034bD>\336\010e\327j\362\256\266\367\357iS\341\354\346\003.\3742Q\375\243\000N^p1\021\271w\016xj\010/\227\335\320S\257C2W$c\314--\010\306\014p\013\307>\016\254\377\270\201\253_j\312\032\244\22135M\227a\315\3540)\015y$\365\245\367d\014H\274\332}FzU^\306\227\360^&'\\\356\220f\337tn\010H\214\362^\254\323\257\015>\343\354&?\276@\271\011\321\024\265\363v(\364\322\341\355U\215B\224\206\010\243L\01050\011\302\226\220\032 u\235\216\315\353\346r:\300\346\276Q\011\336\233\257\220\211\0312\200\233\014n\321\327\215\353\346$\277\003\003\234\201\217n\000\230\247\371\240\245\203\370\221KI\004h\351\262L\034[S\220*\221\224\354\233\2250\202m\177\345\261\351\217m&y\010\033,X\251|\233\317\253\363@\217\307DYu\312[\256\303s\007J3\240Br\377\014\356GF\2634\304\224\322`\267\331P\346\324\213Q\305S\226w\364\012\025\340\3519\375\222E\2630,\015\372\225jd\330s\002\317\340\302\327\304\215\362\374=p\334\034\271\300\317N\274+\322\254'\3575\005\246\023u\335\316w\254d\010\034\341\246\217{~~'=\21558\220\315\366^\265\344\354?\311\025d\256`\217\202\340\027x\255I^de\377\011\367\275\007\036\037\300\037\344\361\\\372\031\273\372\305\203\272\032\243w\225Z5=1\014R\027\272\363[\210YT\177\030v\202\023}\336L0T\240\3563\346p\323\\b\200G\353\252\251\\)\353\304\201\276\345\024 ]j3\322\261\014\3722\342X\012Vg\032\275\020\003\332\"\317\272\024\363\311\266$\314\026v*B*<\2548S\375\203qss\006\245\363\365\235\015\241\347Z\230\233,T\354-\316j\0004\331v0\005\223JD\306#\036\323\037E\013G\310\201p\351F\260[,SF0\003\016\204\2623\223\222\311\204\001\272'\213vF\240Q\277\332b\250GdH\332\014Q\220@\012\375Vq\222\236\341J{\001\275\010\235\000aH\266*\351\276a$z\221\271\251\303\264\355;\377A$\315\344\335\241\001\225-T:\015+\266,\0217\301\020\024-%\036;\307\222\004\024[\221\277-x\255\375\233\261^?\371\000\376\217U9\205\210\222\372\366~\236\311\302F\233+\001\022o\006&f.\343\033S]%\330\374\312\262\371\276\305Om\376\231\277g\354\346\220\317\201S}kR\271\254\232A\376\2562\322\345X\216,\374\305\334u\035\253lf\307\360\307\\\363\240\003'\321\007\310PR\024\204;\211f\352\341\240\270\367B\376\311;9\021\363\034bD>\336\010e\327j\362\256\266\367\357iS\341\354\346\003.\3742Q\375\243\000N^p1\021\271w\016xj\010/\227\335\320S\257C2W$c\314--\010\306\014p\013\307>\016\254\377\270\201\253_j\312\032\244\2213\227\321$\232\314c\361\021_:\177\220\330\267\201*\274X\204!\027\246I\304=\361`t\015\374cRn\212\234\367\333\201Q\245\376s\013-'q;\002\017=\321T^\373\375\325\301\034\200\372#\204\214a\334\023\355\035\361i\301\3259(\274\376\217aZ\017R\376\335x\365\321\344\335c\262\236\223\212\003\344\377&\262\302>\265\216\230\247}Pd*1\225\344d\301CD<\363\014q\262!G\275\250\256\001\366\366\265\002\\\217A\233(x\330i\360a\030\372\033O!\263\204m$\253\2514\324'\037c\031\025\344\320\375;i\220o\313\030x\272\264\012\360\363Z\001\210!\341W\031\226R4P+\202\277\311XD\230\000\274Q.\350\3500\223\230\342\330\246\311\207\351(\025\302\260\266Ec@\213\021\323\272\237bylt\004\204\367W\240\372\204oAps\254i\337\026\360)\005\002 l\010\252Y\3171\333\240\267m+\342\356\337\026b\237\010\012\266\372\305lZ\347\235y\004\262\036\024\024\017\305\017\313Z\013\015O0\237o\371Z\255I^de\377\011\367\275\007\036\037\300\037\344\361\\\372\031\273\372\305\203\272\032\243w\225Z5=1\014R\027\272\363[\210YT\177\030v\202\023}\336L0T\240\3563\346p\323\\b\200G\353\252\251\211\037\302\345vq\342\346id\210\006a\206\326\001\260?8\276\0307\012\016\027\267\026)\351\324>\032o-\344f\3044\366\302\363f\337\026\222\237I_\365\034\216H\035\373\226\324w\257s0\032^\342\302\014:\354\301Z\275\023\315j\224h\252\374@#&\252Z\327tn%\240\223)I\302BN)6UN\257A\202\035j0\003\305\320\225\202\324\006\273M\002\303<\367\217*\275\327\353\315UN\244\225e\2325\276v\276Q\342\012\000\367\242\372\370\001\336\243!\026\312vc\020\251\200\0272\005G\016\355\002l\253M\210\023\033#\267\324\335\301\266\347\307\210\302\2034{\223#4\200q\021\013\346\316\212c\2361\242\234\267\336\270\307X\360\236EQ\303\247l\265e\252\005\216j\313\354\304YhQ\234\206\364\232\023\316v\227\212\034\357W\177*\221\223\377$\204\210<\013D\220\030\367\347\345\\\273\015\0138\334\345b\305\016\344.\001[\027<?\362\235\375}2?bX\356<\323\216`4\036\020\312S3\035\322\032\245\027\221\350hS\341\000\245j[\025\022\024\355\336\355@\006\212w\271Cc\254\222\\B5\244\357aVP\004gF\252\2529\343|\311\200\342\206]=\367o)\201\251\240\306W\330f\034'\356\253\263o\320\364\350\013^\"\201\001\253h\251'l\220\370\020\020\377d\326s^\377\006\206\374\213\2765?Y\223.\323Z\267\001\275ik\212\024\034\035 \031)\311}:\020W\274\017g\356\350\251S\312\240\000\352\344\223/\272\244\374\356>A\215V\304\034e\215\0262p\002\335\366vF\037j4H\031\2353\312gu\303\202\361\027\377\302w0{\033\026[;\265\014\200y\377\252\327MzI+ulPm\037\007\2546\022\015:\340\222-\322\265:|\204k`\035\015\005\371\263\216\263\312\200A\257\030\223W#\025w\216\217H\326\350\316\354\274Q.\350\3500\223\230\342\330\246\311\207\351(\025\302\260\266Ec@\213\021\323\272\237bylt\004\204\367W\240\372\204oAps\254i\337\026\360)\005\002 l\010\252Y\3171\333\240\267m+\342\356'2\323\013\005}]R\356;\313\253&.\371F\3117\317\366jJ?\036{&\364R\377t\222\272&\330\323\361\343\221\353{\007\356\360H\3525\223 R\376\335x\365\321\344\335c\262\236\223\212\003\344\377&\262\302>\265\216\230\247}Pd*1\225\344d\301CD<\363\014q\262!G\275\250\256\001\366\366\021\256\370E\242\223\035f\006\356\356'\036.%\314\347\3042\027\277\330\011!\375~sA\010\215\316\037\337\223\256_/\"el\367\311xn\004\242\324\260N^\355\347\203\316'\236k\341g\342\366\363\353<\253\314\200\334\303(\034\324\273\020\200y\265\325\241\225V\011jW\232k+o\204\031\362\202|\026\202U\254\367\263\035\224\334\234sM7\016Z\026\271a\255g\315\012\233E:\310\3711eh\335\273k\341\235>\356\\\356\211\\\301\025\375\355\006,*\346\371\363\003*\356\021\337\274\335lg\313R\211\240\342I<\217gU\033\337\270\310T\177\334\036\327\364\376F5\211\231Y\265>\375\005\201[^\020Y'\370.H;\177<\245\243\267\037w\356+t\370\034\010\256&\360\312\374)Z\253\017\302`\016\016\337\212}\363\372\303\300ib\025(\374N\322\372\202\255\177$\317\351\277,\243E\007\342M\031tJ\317\363\035\314\316j\332\312\340\223\254\230\221\270\034;\253\346\333\327\231\001\307\226;q\262Y\033\205\035\242$\257h\375\321\275\263H3\236\3075\336\376\233\306u\026FjY\221#\333\035\025\344\372\311\245c\307\232\014\030\001\342|\265\366H5\367\273\304RW\351\342\013\234\302dV\023\262-\275/S~|\217\024\334\303\315464\305\216p\214\271\020~\236\235\371Z>\211\030\273\326c\273\231\355\272\263`}\270\254\202\015\332\262\000.\020\2066}\227\340\020\367|\322\202\2140-\277\271\006\253\270\320Mm\365\377\216\242\215\374\360\364\314\236\351d\216NW\027X\207\003A\376c\177<uu\253\234O\346\300$E$\327a\270\371\\\246@\015Z\277A\232P\000\356\353\257\004\246y4\236\013\360\2633V\252A \271:\001\240u&8D\025O8}\011\032n\232\015\302\327\213\323\243\245\0156`\301\315\005B\234\241\275@`\274\312&\377\274[\010\277\016\330i\326\0059*C\243\227\247s\021\245\223\354\325YH\261\315g\0249\355\270\016\205R\007\274Z\277A\232P\000\356\353\257\004\246y4\236\013\360\364\367\020\332\356{q\303\232)\015B\342\032j\343A\371\267\230\244\312\210\003\0049\370\026\267\356\236\313\213\362*\\*1\326\004m&pB\216\354JB\251\310\003XZU\211\331,\256oS\370[\351\031\247@V\035\201|\340>\201\022\024\354\005\216~\237\362,\204?\016\351\224\346D?\221\225a\202\311\206\226J\204\345\337\230\025*\330\331\267~\376\312\230\270\012d\357\200~\254\345o\010\264\254\323l8q/\373)|c1\233Vl\254\210-|\035\213m\351\206\266\2719\220*)\321\346 \202\376\346^\243\345\0127\202\263Py\237_\010\213~V\312$\223\012\267D(\277\207\201\222\014\010\342\241\374\322\300K\377\326\012@\271\261\204\023\371\243\013\005\005\356\003\016Z\026\222h\355\366.T\373A\304\023\276\354\331\206<Mj\225\212\266\3441 \315i&\326\217K\313\0002, \213\234\235\226L\227V\011/i\246\312\331\376\376\030,\031\373\234\366.\210H<\037\034b\277\273\\X\276i\032N\234V?Ilv\2310\302\243\356F\242\270\235\374O\320\346\241\215\233j\257\235_\367\240p\344\2607%\213\302\315\220\366\001Z\034XZ\226\245T\307~\361\347j\026-6\241\003Vun\352\364\017\253FFf\355Pp^\271\262JeV\241\327\033\037\216\213H\345O\253\214\224\244\331i\266]+4\022\3111\237\206\255\251\230\344:,=\310\372\230\0047\361\3465\223\027q\347\316\332\342\356\340\205+\321\206\206\270\262\356>\330\346=\343Y\276\332\235\321\023\322\314\355\235\335D\361;\277\316\243\000(\034\375e\207\032}t\007\313\265\310$us\323\331\301To\351\005\3225\023\021E\366\037T\003\240\243\000\252,\010T\213\201l\277\323k\027\315Pee\351\375\212\022-,}\313\022\360\250\011\233.%o@\342\037H&/\204\020\266\247*\263\231))\365\310\300\333\323b\345\300s\267\210\201\021t\363\316\"\360N\327iL\036\013\024\002\255\223\360b1\331!n\333\266B\033\235E\372\232!\243\\\015o\003'\321\007\310PR\024\204;\211f\352\341\240\270\367B\376\311;9\021\363\034bD>\336\010e\327j\362\256\266\367\357iS\341\354\346\003.\3742Q\375\243\000N^p1\021\271w\016xj\010/\227\335\320S\257C2W$c\314--\010\306\014p\013\307>\016\254\377\270\201\253_j\312\032\244\2213\240\024\353\270W\345\341:Qb6O\240\243\332\024\231\335'\226\017\264Gz+n\257_\327'\006\250\363WE\320\344b\250\3003\224.\320\260\371\"\320<\007F\366m\222Zmo\317\304\230\270\266)\006a\263\221\011BW|=uT\033\353\034\277\242\344\276C|_V\034[HX\31015C2x\237/>\215\030~\262#L\355\300W\243\012p\332\354\327\270\320\216z\367\216O\331\304i7\014F\271\301\203,;@:N\250\201\357\243\234\374\333\363\324E4\374\202\327\306]\037\221\034\303\362\\/O\3146T\272s|\274\310\275\222\364J#\271<\364\026\322\205\210\242\334U\001\203\300m\363\017T\261\221\366AC@[F,3\301\024\237m\275\230\347\345\366\230R\376\335x\365\321\344\335c\262\236\223\212\003\344\377&\262\302>\265\216\230\247}Pd*1\225\344d\301CD<\363\014q\262!G\275\250\256\001\366\366\021\256\370E\242\223\035f\006\356\356'\036.%\314\205AA\305\326f\004\332\331Wy\351\034\000\302Hc\264\2147\312\342\253\216N\305\3467\004\241\354Tee\351\375\212\022-,}\313\022\360\250\011\233.\350\375\345\001\350\247g[3\230\2073\3776sH\351\323\236@\326$\032H=\323T\266\275\305\200\034\246\367\234@`e\201\332\022\030\257\204\030\350\021/Q(\002+\304\0347\330:\272\375\221\244\315\0164\213\376l\027-Z}5@\330d\312\247\306d\370\217gU\033\337\270\310T\177\334\036\327\364\376F5\211\231Y\265>\375\005\201[^\020Y'\370.H\224\312:y%\261\311+\376{af\267\347V\276 \313u\373dV\311v\332-\031*'\0124e<\370I\274\007C_\306a\030g\255\304\270E\001>]R`\202B3\365\"\030F\234\2310\340\206\314=8\355W\365\024\3718\254\245\351>\34081\373)|c1\233Vl\254\210-|\035\213m\351\220^\235\333rhl\013F\014\332/\227\014x\351\365\030\2719\3248\2676\037\243<S0\001\260B1:\370\224;yX>\011\274\305\002\357\021\022\214&a\345\302\345\325b\367;\374\015\370\351}>z3$\377b\027\274\002\216\377\007\211\005\357ob.\233\210\011\2507-\310\230\222\377\013+\330\364.=@D\355fi\352.[\365\227\330\270\206T\320xA\263\340\337[\005*^4\210\230M\360\304H&~\353\210t\003C`\364\345h\034\225\304\243\26115\010,\322\210\264h\362\3427\252\233\313\365U\217\275Gf_\363\376\312\354\022SJ.v\263\256]3\020\343?\242\340'\020\271c\357?`j\215i3\020\343?\242\340'\020\271c\357?");
		buffer.rewind();
		return buffer;
	}
	private static final Map<String, Range> assets = initAssets();
	private static Map<String, Range> initAssets() {
		Map<String, Range> assets = new HashMap<String, Range>();
		assets.put("app.js", new Range(0, 400));
		assets.put("control/controller.js", new Range(400, 3088));
		assets.put("control/windowNames.js", new Range(3488, 208));
		assets.put("tools/common/commonTools.js", new Range(3696, 496));
		assets.put("ui/common/layout.js", new Range(4192, 160));
		assets.put("ui/common/menu.js", new Range(4352, 2016));
		assets.put("ui/styles/colorCodes.js", new Range(6368, 288));
		assets.put("ui/windows/availableTasks.js", new Range(6656, 752));
		assets.put("ui/windows/errorWindow.js", new Range(7408, 720));
		assets.put("ui/windows/getTask.js", new Range(8128, 736));
		assets.put("ui/windows/mainmenu.js", new Range(8864, 1504));
		assets.put("ui/windows/registerTask.js", new Range(10368, 736));
		assets.put("_app_props_.json", new Range(11104, 64));
		return Collections.unmodifiableMap(assets);
	}


	public String readAsset(String path)
	{
		Range range = assets.get(path);
		if (range == null) {
			return null;
		}
		return new String(filterDataInRange(assetsBytes, range.offset, range.length));
	}

	private static byte[] filterDataInRange(byte[] data, int offset, int length)
	{
		try {
			Class clazz = Class.forName("org.appcelerator.titanium.TiVerify");
			Method method = clazz.getMethod("filterDataInRange", new Class[] {data.getClass(), int.class, int.class});
			return (byte[])method.invoke(clazz, new Object[] { data, offset, length });
		} catch (Exception e) {
			Log.e("AssetCryptImpl", "Unable to load asset data.", e);
		}
		return new byte[0];
	}
}