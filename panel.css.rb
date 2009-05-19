require 'rubygems'
require 'stylish'

generic = {
  :panel_bg => "/static/site/graphics/panel.png"
}

panel = Stylish.generate do
  comment "Panel"  
  rule ".panel", :display => "block", :position => "relative",
                 :margin => "0 auto 1px 2px", :z_index => 1 do
    rule [".panel-c", ".panel-t", ".panel-b", ".panel-b div"], :display => "block",
      :background => {:transparent => true,
                      :image => :panel_bg,
                      :repeat => "no-repeat",
                      :position => ["100%", "0"],
                      :compressed => true}
    rule ".panel-c", :position => "relative", :zoom => 1, :padding => "10px"
    rule ".panel-t", :position => "absolute", :left => 0, :top => 0, :width => "2px",
      :margin_left => "-2px", :height => "100%",
      :background => {:position => ["top", "left"]}
    rule ".panel-b", :position => "relative", :width => "100%", :text_align => "left",
                     :display => "block", :height => "2px", :font_size => "1px",
                     :background => {:position => ["100%", "100%"]} do
      div :display => "block", :height => "2px", :font_size => "1px", :position => "relative",
        :width => "2px", :margin_left => "-2px", :background => {:position => ["0", "100%"]}
    end
  end
end

File.open("panel.css", "w+") do |f|
  f.puts(panel.to_s(generic))
end
