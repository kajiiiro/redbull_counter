// redbull counter
var rc = rc || {};

rc = (function(){

	var rc = {};
	var $redbullContener;
	var $redbullTarget;
	var $redbullClosedTemplate;
	var urlOpen = "Red-Bull-Energy-Drink-Can-JP-open.png";

	var classRedbull = "redbull";
	var classClosed = "redbull_closed";
	var classOpen = "redbull_open";

	function nextTarget() {
		$redbullTarget = $redbullContener.children("img." + classRedbull + "." + classClosed).first();
	};

	rc.init = function() {
		$redbullContener = $("#redbull_contener");
		nextTarget();
		$redbullClosedTemplate = $redbullTarget.clone();
	};

	rc.drink = function() {
		if (false === confirm("それはお前のRedBullだね？")) {
			alert("確認しておいてよかったよ、それは俺のだ！");
			return;
		}
		if (0 === $redbullTarget.length) {
			alert("ふぅ。ないよ。君は持っていないんだ。");
			return;
		}
		$redbullTarget.attr("src", urlOpen).removeClass(classClosed).addClass(classOpen);
		nextTarget();
	};

	rc.buy = function() {
		if (false === confirm("200円かかるけどいいんだね？")) {
			alert("落ち込むな、君はお金がない、それだけだ。");
			return;
		}
		$redbullContener.append($redbullClosedTemplate.clone());
		nextTarget();
	};

	rc.clean = function() {
		$redbullContener.children("." + classOpen).remove();
	};

	return rc;


})();

$(document).ready(function() {
	rc.init();
});
