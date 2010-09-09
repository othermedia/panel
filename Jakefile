PROJECT_DIR = File.expand_path(File.dirname(__FILE__))
require 'helium/jake'
require 'fileutils'

jake_hook :build_complete do |build|
  FileUtils.cp('source/panel.css', 'test/panel.css')
end
