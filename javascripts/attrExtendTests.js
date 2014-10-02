$(function () {
	var $el = {
		addProp: {
			pass: $('.addProp.pass'),
			unique: $('.addProp.unique')
		},
		hasAttr: {
			pass: $('.hasAttr.pass'),
			fail: $('.hasAttr.fail')
		},
		hasProp: {
			pass: $('.hasProp.pass'),
			fail: $('.hasProp.fail')
		},
		removeProp: {
			pass: $('.removeProp.pass'),
			fail: $('.removeProp.fail')
		}
	};

	var iconTemplate = {
		pass: $('<i class="fa fa-fw fa-check"></i>'),
		fail: $('<i class="fa fa-fw fa-warning"></i>')
	};

	//
	// addProp
	//
		if (typeof $el.addProp.pass.attrAddProp('pass','4567') === 'object') {
			iconTemplate.pass.clone().insertBefore($el.addProp.pass.find('.title'));
		}
		if (typeof $el.addProp.unique.attrAddProp('unique','4567') === 'object') {
			$el.addProp.unique.attr('pass', true);
			iconTemplate.pass.clone().insertBefore($el.addProp.unique.find('.title'));
		}

	//
	// hasAttr
	//
		if ($el.hasAttr.pass.hasAttr('pass')) {
			iconTemplate.pass.clone().insertBefore($el.hasAttr.pass.find('.title'))
		}
		if (!$el.hasAttr.fail.hasAttr('pass')) {
			iconTemplate.fail.clone().insertBefore($el.hasAttr.fail.find('.title'))
		}

	//
	// hasProp
	//
		if($el.hasProp.pass.attrHasProp('pass', '1234')) {
			iconTemplate.pass.clone().insertBefore($el.hasProp.pass.find('.title'));
		}
		if(!$el.hasProp.fail.attrHasProp('fail', '1234')) {
			iconTemplate.fail.clone().insertBefore($el.hasProp.fail.find('.title'));
		}

	//
	// removeProp
	//
		if (typeof $el.removeProp.pass.attrRemoveProp('pass', '1234') === 'object') {
			iconTemplate.pass.clone().insertBefore( $el.removeProp.pass.find('.title'));
		}
		if (typeof $el.removeProp.fail.attrRemoveProp('fail', '1234') === 'object') {
			iconTemplate.fail.clone().insertBefore($el.removeProp.fail.find('.title'));
		}
});
