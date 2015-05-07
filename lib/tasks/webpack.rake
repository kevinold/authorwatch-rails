namespace :webpack do

  desc 'Compile assets with webpack'
  task :build do
    puts '****************************** WEBPACK ******************************************'
    sh '$(npm bin)/webpack --config config/webpack.prod.config.js; true'
  end
 
  task :clean do
    rm_rf "#{public_assets_path}/javascripts/*_wp_bundle.js"
  end

end
