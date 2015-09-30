# Run npm:install and webpack:build prior to assets:precompile
Rake::Task['assets:precompile'].enhance ['npm:install', 'webpack:build']

