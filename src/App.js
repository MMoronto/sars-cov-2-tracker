import React from "react";
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <FormControl className="app__dropdown">
          <Select 
            variant="outlined"
            value="abc"
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Optioin two</MenuItem>
            <MenuItem value="worldwide">Optioin 3</MenuItem>
            <MenuItem value="worldwide">Optioin iv</MenuItem>
          </Select>

        </FormControl>
      </div>
      <h1>CORONA VIRUS TRACKER</h1>
      

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Map */}

      {/* Table */}
      {/* Graph */ }
    </div>
  );
}

export default App;
