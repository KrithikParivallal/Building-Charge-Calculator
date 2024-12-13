const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index', { result: null }); // Pass a null result initially
});


// Calculate route
app.post('/calculate', (req, res) => {
    const { LocalBody, Usage, isHRise, MSB, SiteArea, BuiltArea, FSI, GV } = req.body;

    // Parse input values
    const localBody = parseInt(LocalBody);
    const usage = parseInt(Usage);
    const isHighRise = parseInt(isHRise);
    const msb = parseInt(MSB);
    const siteArea = parseFloat(SiteArea);
    const builtArea = parseFloat(BuiltArea);
    const fsi = parseFloat(FSI);
    const gv = parseFloat(GV);

    // Perform calculations
    const scrutinyFee = builtArea * 2;
    const iaCharges = msb === 1 ? fsi * 285 : msb === 2 ? fsi * 375 : fsi * 563;
    const securityDeposit = iaCharges / 2;
    const shelterFund = fsi > 3000 
        ? ((fsi - 3000) * gv) * (usage === 1 || usage === 3 ? 0.011 : usage === 2 ? 0.012 : 0.01)
        : 0;

    const premiumFSI = fsi / siteArea > (isHighRise ? 3.25 : 2)
        ? ((fsi - 2 * siteArea) * gv * 0.5)
        : 0;

    const osr = siteArea * 0.1 * gv;

    const devChargeL = localBody === 1 
        ? siteArea * (usage === 1 ? 4 : usage === 2 ? 8 : 6)
        : localBody === 2
            ? siteArea * (usage === 1 ? 2 : usage === 2 ? 4 : 3)
            : siteArea * (usage === 1 ? 1.2 : usage === 2 ? 2.4 : 1.8);

    const devChargeB = localBody === 1
        ? builtArea * (usage === 1 ? 20 : usage === 2 ? 40 : 30)
        : localBody === 2
            ? builtArea * (usage === 1 ? 10 : usage === 2 ? 20 : 15)
            : builtArea * (usage === 1 ? 5 : usage === 2 ? 10 : 7.5);

    const ccCharge = builtArea * 10.764;

    res.render('index', {
        result: {
            scrutinyFee,
            iaCharges,
            securityDeposit,
            shelterFund,
            premiumFSI,
            osr,
            devChargeL,
            devChargeB,
            ccCharge
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
