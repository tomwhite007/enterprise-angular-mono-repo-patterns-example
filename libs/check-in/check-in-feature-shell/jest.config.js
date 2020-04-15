module.exports = {
  name: 'check-in-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/check-in-feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
