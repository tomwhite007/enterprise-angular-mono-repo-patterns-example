module.exports = {
  name: 'check-in-desktop',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/check-in/check-in-desktop',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
