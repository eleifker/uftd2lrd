package eluftd;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.hp.lft.sdk.*;
import com.hp.lft.verifications.*;
import com.hp.lft.sdk.web.*;
import com.hp.lft.sdk.ai.*;
import com.hp.lft.report.*;


import unittesting.*;

public class UFTDeveloperTest extends UnitTestClassBase {

    public UFTDeveloperTest() {
        //Change this constructor to private if you supply your own public constructor
    }

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        instance = new UFTDeveloperTest();
        globalSetup(UFTDeveloperTest.class);
    }

    @AfterClass
    public static void tearDownAfterClass() throws Exception {
        globalTearDown();
    }

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void test() throws GeneralLeanFtException {
    	
    	
       	
    	Browser browser = BrowserFactory.launch(BrowserType.CHROME);
    	browser.navigate("nimbusserver:8000");
		browser.describe(AiObject.class, new AiObjectDescription(com.hp.lft.sdk.ai.AiTypes.TEXT, "SPEAKERS")).click();
		browser.describe(AiObject.class, new AiObjectDescription(com.hp.lft.sdk.ai.AiTypes.TEXT, "Bose SoundLink Wireless")).click();
		browser.describe(AiObject.class, new AiObjectDescription(com.hp.lft.sdk.ai.AiTypes.TEXT, "ADD TO CART")).click();
		browser.describe(AiObject.class, new AiObjectDescription(com.hp.lft.sdk.ai.AiTypes.SHOPPING_CART)).click();
		browser.describe(AiObject.class, new AiObjectDescription(com.hp.lft.sdk.ai.AiTypes.TEXT, "REMOVE")).click();
		browser.describe(AiObject.class, new AiObjectDescription(com.hp.lft.sdk.ai.AiTypes.TEXT, "dvantageDEMO")).click();

    }

}