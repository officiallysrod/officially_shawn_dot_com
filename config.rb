configure :development do
  activate :livereload
end

activate :directory_indexes
activate :sprockets
activate :autoprefixer

if defined? RailsAssets
  RailsAssets.load_paths.each { |path| sprockets.append_path path }
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = "officiallyshawn.com"
  s3_sync.region                     = "us-west-2"
  s3_sync.after_build                = false
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ""
  s3_sync.index_document             = "index.html"
end

configure :build do
  activate :gzip
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
