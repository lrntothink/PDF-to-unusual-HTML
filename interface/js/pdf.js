pdf = function (spec) {  
	var that = {}

	spec.pages = spec.pages || [];


	that.add_page = function(page) {
		spec.pages.push(page);
	}

	that.display_all_pages = function() {
		for(var i=0; i<spec.pages.length; i++) {
			$("#main").append("<div id=\"selection_"+spec.pages[i].get_id()+"\" class=\"selection\"></div>");
			$("#main").append("<div id=\"page_"+spec.pages[i].get_id()+"\" class=\"page\"></div>");

			$("#page_"+spec.pages[i].get_id()).css("top", spec.pages[i].get_margin_top()+"px");


			var background_image = "url(\""+spec.directory+spec.file_name+"-"+spec.pages[i].get_id()+".png\")";
			$("#page_"+spec.pages[i].get_id()).css("background-image", background_image);

			$("#page_"+spec.pages[i].get_id()).css("width", spec.pages[i].get_width());
			$("#page_"+spec.pages[i].get_id()).css("height", spec.pages[i].get_height());

			$("#selection_"+spec.pages[i].get_id()).css("top", spec.pages[i].get_margin_top()+"px");
			$("#selection_"+spec.pages[i].get_id()).css("width", spec.pages[i].get_width());
			$("#selection_"+spec.pages[i].get_id()).css("height", spec.pages[i].get_height());

			
		}
	}




	that.highlight = function(selection) {
		var text_already_selected = false;
		selection.reset_start_to_zero();
		for(var i=0; i<spec.pages.length; i++) {
			if (text_already_selected == true) {
				selection.set_start_to_zero();

				text_already_selected = spec.pages[i].highlight(selection, text_already_selected);
			}
			else {
				text_already_selected = spec.pages[i].highlight(selection, text_already_selected);
			}
			// we cannot break because we might have to clean highlighted text			
			//selection.shrink_y(spec.pages[i].get_height());
		}
	}

	return that;
}




