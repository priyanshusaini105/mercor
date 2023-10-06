import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const Keyboard = () => {
  	
  	return (
    		<View style={styles.keyboard}>
      			<View style={[styles.btnBuy, styles.btnBuyLayout]}>
        				<View style={[styles.rectangle11, styles.rectangleLayout]} />
        				<Text style={[styles.option, styles.optionTypo]}>Set Alarm</Text>
      			</View>
      			<View style={[styles.btnBuyParent, styles.btnPosition1]}>
        				<View style={[styles.btnBuy1, styles.btnLayout]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle12, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>1</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy2, styles.btnPosition]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>2</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy3, styles.btnLayout]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>3</Text>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.btnBuyGroup, styles.btnPosition1]}>
        				<View style={[styles.btnBuy1, styles.btnLayout]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>4</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy2, styles.btnPosition]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>5</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy3, styles.btnLayout]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>6</Text>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.btnBuyContainer, styles.btnPosition1]}>
        				<View style={[styles.btnBuy1, styles.btnLayout]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>7</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy2, styles.btnPosition]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>8</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy9, styles.btnPosition]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>0</Text>
          					</View>
        				</View>
        				<View style={[styles.btnBuy3, styles.btnLayout]}>
          					<View style={[styles.btnBuy1, styles.btnLayout]}>
            						<View style={[styles.rectangle13, styles.btnLayout]} />
            						<Text style={[styles.option1, styles.optionTypo]}>9</Text>
          					</View>
        				</View>
      			</View>
      			<Image style={styles.icnDelete16x16} resizeMode="cover" source="ICN Delete 16x16.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	btnBuyLayout: {
    		width: 343,
    		height: 48,
    		top: 0,
    		position: "absolute"
  	},
  	rectangleLayout: {
    		borderRadius: 4,
    		left: 0
  	},
  	optionTypo: {
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "Avenir Next",
    		fontWeight: "500",
    		lineHeight: 32,
    		letterSpacing: 0.1,
    		fontSize: 16,
    		top: "16.67%",
    		position: "absolute"
  	},
  	btnPosition1: {
    		width: 342,
    		left: 0,
    		position: "absolute"
  	},
  	btnLayout: {
    		width: 110,
    		height: 48,
    		top: 0,
    		position: "absolute"
  	},
  	btnPosition: {
    		left: 116,
    		width: 110,
    		height: 48,
    		position: "absolute"
  	},
  	rectangle11: {
    		backgroundColor: "#487fd9",
    		height: 48,
    		width: 343,
    		top: 0,
    		position: "absolute"
  	},
  	option: {
    		left: "39.36%"
  	},
  	btnBuy: {
    		height: 48,
    		left: 0
  	},
  	rectangle12: {
    		backgroundColor: "#717887",
    		borderRadius: 4,
    		left: 0
  	},
  	option1: {
    		width: "8.45%",
    		left: "45.77%",
    		display: "flex",
    		alignItems: "center",
    		justifyContent: "center"
  	},
  	btnBuy1: {
    		left: 0
  	},
  	rectangle13: {
    		backgroundColor: "#43464d",
    		borderRadius: 4,
    		left: 0
  	},
  	btnBuy2: {
    		top: 0,
    		left: 116
  	},
  	btnBuy3: {
    		left: 232
  	},
  	btnBuyParent: {
    		top: 56,
    		height: 48
  	},
  	btnBuyGroup: {
    		top: 112,
    		height: 48
  	},
  	btnBuy9: {
    		top: 56
  	},
  	btnBuyContainer: {
    		top: 168,
    		height: 104
  	},
  	icnDelete16x16: {
    		top: 240,
    		left: 275,
    		width: 24,
    		height: 16,
    		opacity: 0.4,
    		position: "absolute"
  	},
  	keyboard: {
    		flex: 1,
    		width: "100%",
    		height: 272
  	}
});

export default Keyboard;
