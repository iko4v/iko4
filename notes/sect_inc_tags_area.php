<?$APPLICATION->IncludeComponent(
	"bitrix:search.tags.cloud", 
	".default", 
	array(
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"COLOR_NEW" => "3E74E6",
		"COLOR_OLD" => "C0C0C0",
		"COLOR_TYPE" => "N",
		"FILTER_NAME" => "",
		"FONT_MAX" => "18",
		"FONT_MIN" => "18",
		"PAGE_ELEMENTS" => "150",
		"PERIOD" => "30",
		"PERIOD_NEW_TAGS" => "5",
		"SHOW_CHAIN" => "N",
		"SORT" => "NAME",
		"TAGS_INHERIT" => "Y",
		"URL_SEARCH" => "/search/index.php",
		"WIDTH" => "100%",
		"arrFILTER" => array(
			0 => "iblock_notes",
		),
		"arrFILTER_iblock_notes" => array(
			0 => "1",
		),
		"COMPONENT_TEMPLATE" => ".default"
	),
	false
);?>