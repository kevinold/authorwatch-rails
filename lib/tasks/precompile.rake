# Run webpack:build prior to assets:precompile
Rake::Task['assets:environment'].enhance ['webpack:build']

