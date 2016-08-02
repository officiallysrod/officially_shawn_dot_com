configure :development do
  activate :livereload
end

activate :sprockets

if defined? RailsAssets
  RailsAssets.load_paths.each { |path| sprockets.append_path path }
end

configure :build do
  activate :gzip
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
