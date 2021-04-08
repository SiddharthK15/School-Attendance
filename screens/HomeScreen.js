import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import db from '../COnfig';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allAttendance: [],
      students: {
        Tanay: '',
        Ishaan: '',
        Lakshya: '',
      },
    };
  }

  submitAttendance = () => {
    this.props.navigation.navigate('SummaryScreen');

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    db.ref('/').update({
      [year]: {
        [month]: {
          [date]: {
            Tanay: { Attendance: this.state.students.Tanay, Roll_No: 1 },
            Ishaan: { Attendance: this.state.students.Ishaan, Roll_No: 2 },
            Lakshya: { Attendance: this.state.students.Lakshya, Roll_No: 3 },
           
          },
        },
      },
    });
  };

  render() {
    return (
      <View>
        <AppHeader />
        <Text style={styles.text2}>1. Tanay</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Tanay: 'Present' });
            this.state.students.Tanay = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Tanay: 'Absent' });
            this.state.students.Tanay = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>2. Ishaan</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Ishaan: 'Present' });
            this.state.students.Ishaan = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Ishaan: 'Absent' });
            this.state.students.Ishaan = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>3. Lakshya</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Lakshya: 'Present' });
            this.state.students.Lakshya = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Lakshya: 'Absent' });
            this.state.students.Lakshya = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>



        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submit}
          onPress={this.submitAttendance}>
          <Text style={styles.text}>Submit</Text>



        </TouchableOpacity>


       

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 125,
    marginTop: -30,
    backgroundColor: 'green',
  },

  absentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 225,
    marginTop: -35,
    backgroundColor: 'red',
  },

  text: {
    fontSize: 20,
  },

  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },

  submit: {
    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'blue',
    padding: 2,
  },
});
