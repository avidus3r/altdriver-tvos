/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A catalog template allows you to display groupings of related items, such as genres of movies or TV shows. View the list of groupings on the left and focus on one to see its items on the right.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
        font-size:1em;
      }
      </style>
    </head>
    <catalogTemplate>
      <banner>
      <img src="${this.BASEURL}resources/images/logo_alt_driver.png" width="299" height="61" />
        
      </banner>
      <list>
        <section>
          <header>
            <title>Latest Videos</title>
          </header>
          <listItemLockup>
            <title>Most Popular</title>
            <decorationLabel>4</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup videoURL="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/Alt_Driver+Pilot+v5.1++H264.mp4">
                    <img src="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/altDTV.jpg" width="450" height="234" />
                    <title class="whiteText">AltDriver TV Pilot</title>
                  </lockup>
                  <lockup videoURL="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/chad-reverse.mp4">
                    <img src="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/chad-reverse.jpg" width="450" height="234" />
                    <title class="whiteText">Chad swings the other way</title>
                  </lockup>
                  <lockup videoURL="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/exo-amp.mov">
                    <img src="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/exo-amp.jpg" width="450" height="234" />
                    <title class="whiteText">Corvette engine in a kart</title>
                  </lockup>
                  <lockup videoURL="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/stang-top-wheels-up.mp4">
                    <img src="https://s3-us-west-2.amazonaws.com/assets.altdriver/vendor/stang.jpg" width="450" height="234" />
                    <title class="whiteText">Mustang Fail</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
