const {Builder, By, Key, util} = require("selenium-webdriver");

const singleton = (function() {
   
    let instance;
    
     function exampleChrome() {
        let driver =  new Builder().forBrowser("chrome").build();
        /*driver.get("https://www.bbc.com/");
        /*await driver.findElement(By.id("orb-search-q")).sendKeys("selenium");
        console.log(await driver.findElement(By.id("orb-search-q")).isDisplayed());
        console.log(await driver.findElement(By.id("orb-search-q")).isEnabled());
        await driver.findElement(By.xpath('//div[@id="orb-nav-links"]/ul/li[@class="orb-nav-newsdotcom"]/a')).click();*/  
     }
    

    function createInstance() {
        return {
            exampleChrome: exampleChrome,
         }
    }

    return {
      getInstance: function() {
        
        return instance || (instance = createInstance());

      }
    }
  })();


singleton.getInstance().exampleChrome();

