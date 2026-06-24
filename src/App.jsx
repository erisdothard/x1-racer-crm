import React, { useState, useEffect, useRef } from "react";

/* ============================================================
   X1 RACER — NORTH AMERICA  ·  LEAD CRM (DEMO)
   Single-file React app. No backend. localStorage persistence.
   Brand: #F36E21 orange / blue-grey -> near-black gradient /
   condensed all-caps display. Built to match x1racer.com, harder.
   ============================================================ */

const LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAv7klEQVR4nO2debxkVXXvv/ucU1W3+/ZMNyg20DaNDS3CS2gUVGTQgGCMSVCiODwxxsRo1ESTGPOMQxJHEjRKlAc+BWeJUQwKyNDQoAyNQ9NNM8jQTbcMCtwe4E5V56z3x9676ty6de+t4ZxTp6r29/O5n7q36tRw6+zfWWuvvfZaCkfmiIgHKPMjSqlwlmOXAAcAzwSeZX6eCewP7AcsBRYCw8A8oAQEgAf45mVCIALKwCQwBjwN7AV2A08AjwGPAA8Du8zvv1FK7Z7ls/n2fzD/R9TC1+BIANXtDzAI1Ak2VEpJ3eMKOBA4FFhrftYABwPPQIt0KMvPDIwDI8CjwA7gPuAe8/MA8PAM/4ePE3RmOAGngBnIVrSNBHsgcCSwHvhd4LnAIWgLOhsRWhwWVXdbf/+0j9bE7/azz8YoWtR3Aj8Hbge2KqUemfJmUwUd1X8Pjs5xAk6ImGipd4lF5BDg+cAJwHHA4Wi3t57I/EDNYs8k0rSR2K3E/vZoLPB9wF3ALcCNwG1KqYemvKB2ucGJOTGcgDtgJtGKyELgWOD3gJOBo5huXa1YFdPFmnek7qeRqEeBzcAG4Bpgk1LqqeoLODEnQq8MmNwwi2j3B04CXmluV9Y9NaQ22HtJrM0i1Fx86zrH2QlcD/wPsEEp9Xj1iU7MbdNvgyg1TCDKU0pVYvctQ1vZM4FT0FFhS9zCWtEOEnFB11vox4Frge8C1yilRqpPEgnQQnYBsCYYtEHVMtY6WGtr/j4JeB3wCnSU2BK3snMFggaN+AUtbp0fAS4HvgncYIVb/707GuME3ICYm1x16URkFfBa4GzgebHD7QAbRCvbLtY6w1Qxbwa+AXzLBsAanQtHDTfgYtjBUje3PRF4K/AqapFja01sIoOjfQR9EYx/l3uB7wMXKaVurB6orbITcgw3+KitV9r5rYgU0fPat6OXfiwVnHucJvbCGMTuuwH4AvDfSqkyVOfJ09bXB5GBFnAD4S4E3gi8A1hnD0MPKuciZ0ej73wrcD7wVaXU0+AsMgzwgBQRPxaYWgT8KfBOYLU5xLrR9cshjmypPw/3AZ8D/p9dV46fy0Fj4AQcv2qLyDy0cP8GeLY5JKS5dEJHttglKSvk+4F/Qwt5olH8YhAYGAHbDQX2BO/bt+8NxWLxA8Vi8QiAycnJUGl6Sri+76NUe6cxDENEesv7FJFIRKRYLPoA5XJ568TExMcWLlz4TfO4zwBtpOh7ATeY554CfAR4sTnEWdzepN4ibwT+SSl1A+hAVzzppl/pawHXzXNXAx8Nw/D1n/3sZ/ntb3/bkxbXopRCRDjnnHNYs2YNURThec39K/bYiy++mHvvvRfP84iinjVYURRFcvbZZ/vPe97ziKLoEs/zPqSU2g6DPT/uWURE2UweESmIyN+FYbhbROTmm28O0ctB9Qn5Pflz9dVXi4hIpVKRZrHHnnLKKV3//En9nHXWWRXrXovIkyLy3tgYCIwn1ncEcx/SW8SuuKFJwjgXve+WKIrC6667zg+CgCAIqFR618OyFnjRokVtv8Yzn/lMev27sN7Dpk2b/ImJCQqFQuh53lL0eT9LRN6rlLoJnDXONcbqBub3hSJyXszolCuVShS3Or7vd91qJPHzi1/8QkREwjBs2gKXy2URETnnnHMEkCAIuv5/dPKjlBKllPzsZz+z/18kImXz70Yicq6IDJux0VfWuCfnf/WIiGdOYkVEXgbcCrwHfYIjEQl831ePP/44t99+O0Avz/mqKKUolUptP3/evLkKgPQGvu8jIlx33XX2LoX2Lu1Jfi9wq4icrJSqmCXEvhj7Pf9PiI42RiJSFJFPAVcDR6DnuQrwrFhvueUW9u7dWz3hvYpdNvJ93wkYqufy2muvBYgH82wmVwVdtug6EfmYiBTMmOn5KWTPCti4zL6xukcDNwF/S4N8WnuCr7nmGoC2103zRqFQoFgstv38fhGwvUDfeuutjIyM4Hle/QXaWuMI+Adgo4gcacaO38sudU8KOOYyhyLyNuCn6BI2DTcbWIu7YcMGoD/cZ5gq4HYuSv0iYBHB8zxGRka47bbbgIbn2I6LCrou2c0i8halVNjLLnXPfeiYyzwsIl8GLgDmoxMyprlEURShlOL+++/nrrvusq+R6WdOiyAIKBQKbT9//vz5CX6a7mLdZutlzXKOA/RYWQB8SUQuFJF5vepS95SAjXgrIrIOXfnwzdTWdBtuOrBX4o0bN1IulwmCoG8EXCwWOxJwv1hgqAl2w4YNiAi+P+seFFvqtoLe671RRNaasdVTIu4JAdfNd/8Q+AnwO+gTEDBLRpl1La+++uoMPmk22P+pUwEPDWVdKz497IV6y5Yt7NixA6XUXFMlG6muoPMEfioiv99r8+LcC9jOTcx89/3A94AlzOAy1z0X3/cZHx/npptuAvpn/gtawEHQvsGwFrgfPBJ7ricnJ1s919alXgb8j4i8L5Z+m3t95PoDGqsbAb6IfAn4ONOT2GfEnsDNmzeza9euZq7KPcXQ0FDVVWwliGWP7ScLDNO9rRa+E59alPrTIvJF/XQV5V3Euf1wRryhiCwFfgS8hdrablNnJj4vAuaaF/UcNgLdrgXtJwsMtQv2jTfeyOTkZKvr/fE14z8HLheRRUbEuR04uRSwCVaFoluSXI+uvVxmjvluPS1EJnuKegva7v/VbxbYrjhs376drVu3Ai1/N/F58enA9SKy0ozFXAa3cifgWKT5eeg9nkehv9CWojV2bfCJJ55g06ZNQH/Nf4GOsrCg8wtAHklozd+K+HfQEep1eY1Q50rAMfEej+6pczBNBKsa0W/pk41oV4DWgtsLQD99L/VZd83ukW6AFfGzgQ0icmweRZwbAcfEezLwY3SbElsvuJ3XA9oKaOSepIJQpVKp+lr98v3E0yp3797dKK2yFWyEen/gahE5IW8izoWAY+I9FfghOkvGFk5vC2txr7/+eqD/3GdIRsCdrCPnkSbTKlvBR4t4MXCFiJySJxF3XcB14v0Bug2nrQncFvH0yW3btlXv6zc6jSL3o4AhleClXWYaRkencyPirgq4zm3+PlCiQ/HC1OUEmz7Zj7SbCplUJldeSWn50EOPzXnAD/LiTndNwDHxHkdCltfSj+mTjejUhS4UCn0p4DbSKpvFitha4vXdFnFXBBzLaz6SqXPejj9Pv6dPxul0M0Kn2xHzih0DExMT3Hij7o2W4Bjw0HPiRcCPROQImz+d1Bu0+mEyJZZhdQhwBToHNUzqs9gTdccdd7Bz586+S5+M06mAgyDoqCBAnukgrbIZbGBrBTqw9SwzpjPXU6ZvaP7BSESWoJs6r6SDpaIZ3gOgWh+p39In43Q6Bw6CoO+ysSwdplU2gxXxIZi0SyDzwgCZvZnZnmW7s38XOBK9UJ6owmwE0tZH6qckhXo6tcCdFsXLM/G0yjvvvBNIZSz46DH8v4DvYPL0s9yKmOXVwtbkvRA4hVpuc2IMQvpknE6spx3M9jX6aQ5syaiUUoAey6cBXzRjPDO3LxMBxyLO/4CuolGmxdzmZoinT+7Zs6fTLJzcUi++Tl6jXy0wJJpWORcF9Jj+M7OfOLPIdOoCjon3VcDHqFXRSOO9gExOWC6wLnQ71jOJi0DeSTitci5s7vSnReSMrCLTqY5w0dUjKyJyOPBVUu50Pwjpk3GSEF8/1cWqx06pnnzyyaTSKmfDdriMgK+LyJosItOpvbgNWonIfOBSYCG6kkYq72mDFg888ECaQYtckKT17Oc5MGQe1PTQY3wJcKmIDJFyUCvNq4MNWl1AShHnOP1cfbKeJOav9jX62QJDV5YV45Hp89MOaqUi4Ni8923AG0hx3muxFsTOfweBJKxnvws4xbTK2bDz4beIyJvTnA8nLuDYvPdI4LMknKgxw3sOTPokJBtB7ncBx9MqMx4bNtHjfBE5PK35cKIvGJv3FoGvAXaSluoEK54++dBDD/V1+mQ8iyqJNMh+FzB0bXOLHfPzga+JSIEU5sNJXxHsvPfjwNGkPO+19Hv1yUYEQeAscJM02l6aUXzEzoePAT6axnw4MQHHdhidDPwNGYkX+rf65GwktZNoUASslOLBBx9st1plJ1gR/72IvDjp+XAiArZugYgsAL5Ebbko9bWJ+FrfIKRPWjptLWrppwZns9HFDpV2fVihm6nNg5pmOiUpCxx3nZ9NgtsD56I+fbIfq082otO2KpZ+zsSK0+UsPdvW9DnAvyTpSiexgd66zi8G3kmbZWA7eH+g/5p3z4T9/5KqptFv3RlmIp5W2aU8eRuVfo+IvCApV7ojAcdc5wLwhU4/TDv0a/PuuSiVSh1Z4H7tjzQTGadVNsJaFg/4ot3s0Kkr3akFtq7ze8kg26qeeHCi39Mn6ykWi201NqtnUCww5GKveDxL611GOx1psO0nm0VpWxrn/9BhHed2GKT0yXqSaosyKBYYclOtxZao/bCIrERXqGlbh52oXymlBDgXXaVPyCDqXPcBgMFKn0y6LUo/9keaiZwk/Ci0VhYCnzQaals3bQk4VpjuJODVZJAu2eAzpFl5MPd0msSRVIfDXqKLaZX12IDW2SLyIqOltvTTrgW2xbvObfP5HZOTq2nXSEp4/dgfaTZSrlbZDueaQFZbJ7JlAZudRhFwNjpFLHPraz4HMFjpk3GSyqDq1+4MM1EfN+li3oC1wscBr2m3kXhLAjZXishkk3yULsx7LYOYPgnJLf/E26v0a+uZRuRs5cJa3n8WkZL+KK0tK7VqgX1jfd+KzrhKpJtCq+RgTa/rJLX8068NzmYjR7kDtgTPc4BzjLZassJNi89cGUIRWQi8ny5a30GpPjkbSS3/JJVT3UvkrPihtcIfEJFhtMaa1lUrn9w3Ie8/Aw6kS9YXaifALsj3e/XJRiQ5B+7H/kizkYO0yjjWCh8EvMVorGkr3NTIj1nfBeisq65ZX8iVC9Q1khJwP/dHmokcNgCwVvh9pghk01a4WdNlre+b6bL1zahlRu5JKojl+35fF3efiZwFQa0VPhh4QytWeE4RxqxvCfhrumx948sAKTWt6gmSssBKqYFKp7TkJK0yjrXC7zWbg5qyws1YUWt9zwRW00XrC7lciO8KSQi4vjjeIH2XOUwEikekX9WsFW5GiJG5Eljr2zUGPX0yTpICHlQLnJO0ynoEXZIKtKBnZVYBm5znCDgBWG9evGu+Rg6vmpmThugGUcCQy80wPlpjx4vI8c1kZzXrCr/T3HZVLYOePhknCdENSneGmcjpdlSrsXfOepRhRgGbAu2hiBwMvJIuW1/IxYbs3JBkT6N+7480Ezntp2Wt8KtE5MC5CsLPZoHtY29CF2gP6WL02aVPapJ0oQfdAkMuO1oqtNaG0W2JYBadzibg0ISz39TEsamTca/X3JLGHHiQBZzToohWa//bzIHDuQ6cggleCXAicBhdXjoynwnITf5q10ly6WeQBZzTssR2SWkd8GKllMwUzJpLBW9C++Nd9ytc+qQWa/3abRIMsoBzmFZpsR/iTbMdNE3AIqLMxHkp8Pton7yrwSuXPjmVpNMfB1nAkNvgqNXcK0VkkdHkNHerkQX2zYGnA0vpcvAKXPpkPUlvARx0AecwrRJqwawVwGlGk9M+WCMBi5n//gnafe66UuoX3HMSaOgaSTU2swxKf6SZiCcI7dy5M08JQlZ/ZxlNTtPiFAHH3OcVwMnkwH126ZPTcRY4WewYy2GDeB+twZeJyLJGbnS9BbZiPRVdtzY37vPWrVvZsWNHnq6OXSOpvkiWQSotOxNdagI+F9aNXgK81Nw3xaDWC9iewVeRE/c5p/OTrhAvRJeEgO3rDboFhtymVUJNh6+K/V2lKuCY+7wQOIkcuM+Qu43XuaDTxmb1OAs8Na1y27ZtQG6+D+tGnyIi8+vd6LgFtr8fh458RXTZfbZrdCMjIwOdPllPUo3NLIO6G6menOYaKLQWnwk839xX1a1XdyDAy81t1z+9S59sTNIlcJwF1tQXS8zRaofV4mnmtqEFtqb55AaPdQWXPjmVpPsZJd0ordexBuPmm29m7969eco3sII9xdxWc6M9qG4dFGAV8Ny6J3WNepcmJ19m10lacENDQwPVH2kmcpxWaS3XUSKy0uRGe/EH7O3xQJGcLB/Z9MmtW7dW73MkP2cdtP5Is5HTtEq7nDSEjlGB0Wy9T/oSc9v1T23FeuONN7r0yTqSdqGdgGvkeNnSnuwT43daAdv573F193cNlz45nbR6+g5if6SZsIZj8+bNeUurtAKwGg0BvNj891nA2rqDu4JNbZucnHTpkw1IOvEi6cyuXibHaZXWqB4hIs+w82CPmliPJgelc6D2hW3ZsoXt27fn6SqYC9IQ8KD1R5qNHFarhNp68DBwlL0vLuBjzW3XJ5o5nofkgqSDWIVCYSDbq8xEPK2yUqnkqX+ytWLrza0KqAn2GHtnph+pAbNFAustxFx/9xM2kJf09j/f95k3bx6+7+N5Xl9/h80SBAHbt2/n7rvv5sgjjySKojzlIVitSmByKwN0/R3Iwfx3tvTJ+sDNIEWmw1Cv3yc1kOJrv+VymTAMq+/h0Fx++eV5ErD9AM+1ZZ+tb/AsdH9SyMH81/d9brvtNkZGRqrpkzbQYvvZDg0NUSqVpvwUi0WCICAIgqolERGiKKoOzjAMqVQqhGFIFEVTLg5KqeqP/TtP+L5PGIasXatjjUl8PhFBKcUJJ5zAsmXL8DzPxRuofdd79uwBcpMFaE/4IcAzgIetgNcABXJafdIKDrTAK5UK5XKZiYkJhoaGqo8Vi0WGh4dZunQpy5YtY8WKFSxfvpz999+fFStWsN9++7Fs2TKWLFmSp3lN2yQRG7AXgYsuuqjj1+pnciTgCB1sXkNMwIeb264LeKb0SWsty+VyR68/NDTEkiVLWL58OQcccAAHHnggBx98MAcddBAHH3wwK1eu5IADDmDZsmUzilxECMOw+tniljsrq530+wzSVKQV8uaFUdPoWmCjHaFrZz4+O+w8Y/v27WzZsqV6XyPiX2yj3+P3iUjVlR4fH+fRRx/l0UcfraZo1rN48WIOOOAAVq5cyerVq1mzZg1r1qxh9erVrFy5khUrVswo7kqlUn3/rEXdCb3wGR1TWAsQd6EhB/Nfz/OmpE/OFFSJW4xWrEdc4PXislZ+z5497Nmzh3vvvbe6lGVZsmQJK1eu5NBDD+WII45g3bp1HH744axatWpGYVtrrZRyUV5Hp9jBcxhAYHY1HFz3YFfIonm3Fftsom9kPa3bvHv3bnbv3s3WrVu57LLLqs9ZsmQJq1atYt26dRx99NEcddRRHH744Rx00EEN56rWUltBO1E7mqQayBIRpURkOXAXsBy9JtyVkWQt1OTkJGvXrmX79u25jIjWi9u65o0uCENDQ6xatYojjzySY445hvXr17Nu3ToOPPDAacdaK+0E7ZgDq9FHgSOUiBwJ/IKaO90VwjDE931+/vOfs369TjTppcCKFZ2NVtYvUVkWLlzI2rVrOeaYYzj++ONZv349z3nOc6blIscFnZMIqCMfWAFPAEcH6DXggC5aX5iaPikiBEFQdTN7gXigzFJvraMoYt++fdx+++3cfvvtXHDBBSilWLNmDevXr+clL3kJxx9/POvWrZsiaOu+uzm0A61RAUrAgUpE3gJ8Cb2JoWtJxzaAdfrpp3PllVfOGsDqZeKW2gqznsMOO4wXvvCFvPSlL+VFL3oRq1ev7sIndeQYu5T0RiUiHwQ+ShcFbOe/IyMjHHrooYyMjEzpxNfP1Lve9V7H0NAQRx99NC972cs49dRTWb9+/cC3QnFUtfp+JSL/CbydLgrYzn+vuuoqXv7yl+cyeJUldt7byEIfddRR/OQnP2F4eBhw67cDitXqZwJg/y5/mIbpk4Ms4HgAzFpnm1K6a9eu6v2D4KE4ZuWAANjP/NG1S7ldJ3XVJ6cTT9sUERYvXpxoYzNHT2K1up+H7gHcNWz1yR07dsyZPunQm+/7YSOGIxGWeuguhNAlC+yqT7ZGqVSqBrzc/HdgsSd+oQd0NaSZRfpkP5BWRcopuAtnr7HAA7rWW9JVn2ydVAWsFEQhiDsHPcKQh+7EAF1woe0g3Lp1q6s+2SSpCTgKkYmnwfN1rUMRLebu1zh0zEzJo4s50FasGzZsqFpjx+wk34zbCFQixs9/AxPf+HuinVu0NfZMa9oodO51vrDGNgjoooBd8+7msXPg5AVsxoJfQEb3MnnV5yjf8h38w46j8MKzCY46FQqm5GwUamErt7kiJ/gBXdw+6Hkeu3fv5tZbbwXc/LcZrIBTudiVhmHBMvACKndeR2XLNXgr11E47jUUnv9q1JJn6OMk0obb7ZLqNt07A1as9dUnHbOTvAWm6h6roAhhGZSg5i1CDS9BHruPiUv/iac/9jImvvUBol3btAX24vNkR7fw6FKUwjXvbo9UBGyHQFA0Yjbz3iiEwjzUguUwto/Jay9g9FNnMPZ/30p4z02xeTIu4NUdogCooEvKZopLn2yPVHciFRq0V5FI//gBasF+EFWo/Owywl/8EH/tiyic9BaCo0+fKuQpLbccKRJ2RcB2769Ln2yd1FxoZVzomdaARUBMxc35S0CEyt03UrlrI/7qYyic9KcUjvkDbcXBCTkbKh4waf7IzATG0ycnJiZc+mQLpGuBh2hqGJhkDzVvEWr+YqLtv2T8S3/B6CdeTvknX4fy+NQlKOdaJ439Qic8YDzrd3fNu9snnTmwRhVKrWnNzpNLw6jhpUQP3834V97F6MdPo3zTV6E8USdkR8KMe8DTWb5jPH1y48aNgHOfWyHVIFahRFul0STSAi3ORy1YRvTofYxf/B5GP3Ea5Z9+U0e2pwS7HAnxtAfsM39k4udYsd55550ufbIF7BQjTQusXegOqAp5HmrBfkSP/IrxL7+T0U+eQWXT9/Qxnl8LjDnaxWp1nwfszvSdzUB06ZPtYQWcxrRDFYaSuYxLBFHFCHkZ0a47GbvwbYx++pVUtlyt15GV5zZOdM6IBzxh/sjEArv0yfbIxgI3WEbqhLhrPbyE8IFNjJ3/BsY+/3rCB26vbZxwudatYr+sJwLgscze1aVPdozdjZQGKiils+pjUi/V0AIAKluuJrzrBoLnn0nx9Pfg7f9sfVwU1ubKjmZ4zEO3aMiEePrkk08+6dInW8B+T2kKuOM58FxEEUQRav5iKJQo3/R1Rj9xGpM/+CQytsfMj8W51c3ziAf8Oqt3s4Pw2muvBVz6ZCvY765U0m5usnNg81qFIWqF/1PEuMxqwTKoTDLxg08y+rHTKN/87dpuJ+dWz4Y9+Q/HBZy6mmzAyrbsdNa3OaxYPc+rCjiV9ymUtICyIqqA8lGLliNP7mL8y+9g9Lw/Jrx/k5kfu/XjGbAn6ddWwBVSznlz1Sc7p1AopCpgCqUu7PUVCCtQGEINLyW85yeM/fsfMfHNv0f2/ta51dOxC/WTGAv8KLWlpNRMohXrTTfd5NIn2yQu4FSy1wJrgbtwXkzEWs1bBIUSk9ddyOjHT9WpmXG32qVlWkYwQawngd+YO1P/dlz1yfYpFAqpFnVXhRJKed3ViJ0fL1yO7HuC8a+8i7HPnkW0c6tLy9TYs/MYsNtTSoXAQ3UPJvuOpl1ouVx21Sc7oFQqTesjnAzmYhoU81NlI6xAUEAt2I/KtusZ/fQrmfyfT9Xyqwc3yGX/6R1KKbFn6/66B5N9x1j1yQcffNClT7aI9VaKxWI6Ajb61evAfn6EIQJRRS87KcXEZZ9g9FNn6GICgxvksifnPqhFnu9O8x1d9clkSE3AlqBo3NScCNgShYBCLVpOuOsuxj57FhPf+SAy/lTNGuftM6fP3TBdwKn4Ty59MhmGhobSbauSVwEDNlqthuZDcT6TPz6f0U+eTrjt+tjceCC8OqvRe+J/3AeUSaFGlkuf7Jz026ro11dBobZsk9dKGpHeyaQWLUcee4DRz72OiUs/iEyO6vl7f7vUgtboBGbaawX8a2BX7KDEsGLdtGmTS5/skFTTKAH8ghaxKbGTa0Kz26k0zORV5zP2yVcQ3ndrv68bW+E8BDwC4ImIr5QqA9vqDkrmHV36ZGKk2hcJICiA10OtS6VmjcNH7mHsvDOZvPxc9M6JvrTG9qp0p1IqFBE/XnXs5+Y20dHh0ieTI9Wi7gBeAfxC71mvsIIqzYegxMT3/5XR884keuy+fl5u+pm5nZI3t8nemdS72PTJhx56iDvuuKN6n6M10murYt/A3PiBEXAPDvgoAgS1aAXhPT9l9JOv0JsjqstNfTHurF5vN7fiUTPLm9GT48TCkK76ZLKk7kJ7gZ4Dt1MXKy+EFdT8RVAeZ/zL72D8q3+NjD/dDwEuG8AaBe6w93lKqUhEFLATuDd2cGK46pPJkF5JWXNevCDWnaGHiUJdiH54KeWNFzP26d8n3LG5111q+6HvVko9LCJKKRVZk+wrpQS41fzdsb8RT5901SeTIdVyOpjIc1DsDy/J9G1SC5cTPnw3Y//2h5Rv/GrNpe61eX5Nk7eYWx+mJ27cYG47NpV2ENx5550ufTIhUi3qbjSr+sECxwkr1VI+45e8h/Gv/g1MjvVilNpqcmP8Titgq6yfohM6Op4Hu/TJ5EndAoNpjSLZbuxPG9PmRS1YRvmGrzD6b39I9KiNUle6/emaQdCanABuNvdFYAQcmwc/SELrwS59MnnSFbAhKPWXBbZYl3rRcsIdm3WJ219eoef9EuX9f7YGdotS6iE7/4WpLrSdB2+oe1LL2PTJPXv2uPTJBElVwLZHcKFPBWwJK6h5C2FylLEvvpnJH51n6lTnel5sT8h15rbqznoNDrqqwWMtEU+ffOKJJ1z6ZEKkOge2BLa9Sh8ThTptdGghE//9UcYv+nNk4uk8z4utFq02pf4BmDoPfpwONja45t3JkklRd0thqL8tsKWahrmC8q2XMvbvf0T02+15nBfb9d/HgNvMfVVXoaospZSYvOi96Gi0AG1djlz6ZDqk2VbFopLuzpB3wopeatqxmbFz/4Dw3p/oeXF+RGw3O29QSj1lNNrQAgMoE8y6DB22bnmkuPTJ5MnGAnfYobCXCSuoeYuRp0cY+4/XUr75W0bEuUj6sDq8LPZ3lXoBh0bdPwaeoo3lJFd9Mj1S306IaXA2iEQVPf/3A8a//E5df8u2eelecMsuH+0FrjH3TfGKpwg45kY/Rs2NbuvTu/TJ5Khvq5Lqdxq02OS7n5AIlIcaXsLEZR9n/OJ3ayusvG5thrDu87VKqcfr3WdoHGm2bvS3adGPcumT6VDfViVVCkMD5T1PQ0T3b1q0gvKNlzB2/uuR0T3d2gxh3efvGE1OOzONBGzd6B+hC7437UbbgbZt2zYeeOABlz6ZAPG2Kpm40MUBdaHrCSuoRftT2XItY+ediTy5K1ZALxOs+/wEcKXR5LQ3nybgmBv9BHAFLUSjXfpkeqTeVqXa4KxEJg3OeoGwjFq4jHDnFp1++ettWS4zWff5cqXU7kbuM8ydrHEx+mw2tZBrrYVLn0yeeFeGVJeRgowbnOUdE6GORh5m9LwzCX91i45Qh6mL2FbLuWSugxphc6M3oKvfxTf+N8Ra3D179nDLLXrHk3OfkyPttiq1N7ItRh1VogqqNAzjTzH2uddR2XI1+KmKOEJr7h5go8l9bugFNxSwMdW+UmoS+GrsRWd+R5c+mSrFYjETAauCba/izt0UotBkqUWMf+HNVDb9txZxOu601dolSqkKsdznemZzjasvQhOldlz1yXRIva1KPcGQSexP/616DpNDTVBk7Etvp3zT19LI2rLBqzGaMJ4zqsxsMfSVUg+iI9KKWYJZLn0yXdJrbGaxQayi7lDoFNwYicDzUaVhxi95D+XrLqxlbSWD7iMDP1BK7TQabF3AdXx+tuNt+uTOnTtd+mRKlEqldNuq2JcMSrUMJEdjJAKlUPOXMP7N9zP5488n2aPJauz8Vg5uiCkerYDrgV8wgxWOp0+Oj4+79MkUSL0ipUEFRZ155M7f7IgAghpeysR3/onJKz5jRKzL27aJtb63ATeJiDdT8MrSjAW2JvwzzBGedM27kyf9vkh1BEUdnHEu9NxYES/cj4nvfpTJH54bE3HbKOA8E0ieU5/NCNha4UuBHdQtKbn0yWzIIgsLMB0KA6NfdyGeE5t6uXA/Jr73r7q1S3vutF06uh/4ntHcnBPrOQUcW1IaAz6LPqtTBAwufTJtUm+rYjsU+vEOhY7msCJezsT3/5XJK85rJ+3S7uE8Tyk1Qa3E1aw0G8SyVvhL6MoAPkbELn0yXepd6NTxC1rERM4At0RMxN/9Zyav+lwrS0zW+v4auLhZ6wvNp0haK7yX2lw4Mo8BtfVfF7xKh/QtsMEv6DmwO41tYES8YBkT//VhJq+9oFkRW+v770qpp2jS+kJrheusFf4CxgpHURT5vs/evXtd+mTKZFIPC9PgLOjRBme5IBad/vY/Ut54yVy503Hre2Er1hdaEHDMCu8BPgWoMAwFdPrk448/7tInUyT1ipTWXbYdCp0Jbh8bnZ63mPGvv4/yrf81W+60tb6fUErtowXrC62Xjg1FxAMuAB7yfd8DIpc+mT5ZWWA8H+Xb9ipuEtw2ontNqaEFjH/lr6hsvrJR7rS1vg8AFxlttRT5aklxdm1KKfV0GIYf9jxPAeLSJ9Mn/ZrQtkmwZ1xoNxXqGBFdoqdQYvyitxHeM63ipb1K/pNSahytrZZE1LLJVEpVRMTzff8SYPPIyIj/y1/+MgQ3/02TbCyw7Y9UQpwLnQwSVYOCY198M9FDd1gRh+jVnNuBb5qsq5Z3RbTr89r9iX+7ceNGmZiYUC59Ml0yEXB9h0LnQSdDFOlKJ5OjjP3nG00B+cBu+XqfyXRs69tuS8BGvF6hULj6Ax/4wA2AF0X57EnRL2Rqgav9kZyCEyMKoThMtOcxRj93dkhl1AP1baXUDWbHUVv66STqJJVKpbBt27b9AUz425Ew1qvJpC+SdaAGoT9SN4gqqKFF8Oi9avILb6rw5EP/LCKKSy9t+yXbFbDdMHqEUmodtf4tjpTIoq2KFW3fdyjsJlEF5i+V4n23+E/943HvVUoJd57V9pfdiYABTjYWwrnPKVFf1D0TnIBTRaLQmwzmKSnO++PH/2rNIvURonYjDu0K2J7dl5lb5z6nTGbrwAxwe5WMUAo1UQ6j+QGLSyo6FoDXtKfFdp5kU70WAcd18DqOJsjWAteWkQauwVnmSOQHCiTSRnDdiZlZYPucY4Hl6GwSd6ZTItO+SJZBazHaBZRSKgpBFKcA8JEbMotC2xH0UnPrsjdSwopVKZVNXyT7voUhF4ROGQFvvBKh4Ogn37X6YAUiH2pdj+0I2F4pTjG3zvqmTPptVerfsOTOasooUJWIcEHJL3kiJ5i7UxewXT5aCRzd7ps6WiOzrgwGF8TKBmVC/b4yweDnvqZlv6cdAQO8GBiiVkXPkSJZ9UWqvaFtr+L86HRRXqUiiPCSra9ZV1RnXRq2upzUrvW0y0fuDGdAVm1VqnWxCq7BWRYohTcWihR89exVz3j6uQB8KD0BK6ACBMCJbTzf0SKZt1WxuCh0doiEQ0WlQvFMTOnEljTVqoAB1gGH4tInMyP9tip1BCW9L9iRPkopIlCe9WpvaGlVp5WzZI89iTn6JDmSpVQqVat9ZjEHrrrQLp0yC7yJioDwAnn3IUtaTatsRcAufbJL2CWkzPZbByXT4MyRNgrURCjRcFEt3YN6AdBSWmWzB1qLuxCXPpkZ1tpmVlLWWvdqgzNngbNAIZHnKzxRLadVNivCePrkClz6ZKZkuhMJ0+Rb+U6/GaHTKgWEUwDVSlplKxYYXPpkV8jMAlv8IvjOAmeFTqsUPCVHjr37kENaSatsurWKuXXpkxmSeVsVS1CM9UdypzptdFqlhMMlvxhGyqRVNrec1MxBLn2yy2RngU0iR1BwLUYzRqHLyYpSvwfAc/dPrLWKPeZFwDxc+mTmZLmZH9ANzrzAVabMFptWeYJ8qPm0ylYs6e+ZW3dZzphMCtrF8Z0FzhqbVln01arRkYnnAVzaxHJSMwK26ZMvaeE5jgTphgXGdw3OMkckLBUVlSg8BeA1TSwnzSVG+/gRuPTJrpGZgG13FdehsDsopSQCpZRZ7Zk7rbJZAZ9kfnfpk10gcxfaNTjrFt5ERVCK5+9++8FLm0mrnEvA9hJs57/ubHaB7Fxoc3o9Xy8luTlwpihQk6FE8wve0qDoPR+YM61ytgdd+mROyHYObCtTFl2vqy6g0yohajKtcjZB2sfW49Inu0KmbVWqb6pvqg3OHJlSTatETgbmrFY5lwWG2u4jlz7ZJTItKTulwVnkKnNkTC2tkiOf/MtVc6ZVBrO8llX+S8zvETkIYvl2Y+wAYP/VzINYoOtieb7ZlTQ4SBSG3a5pH4pUFpa8oCLh8cAOnVbZOCI9k4A9tGCfjS5gB7oZcdcJw9D6dX1vGsJQXy+DYLbrbMLY7KsoRJ56Qv8dtdx3usdQiESiUCxcvNjH6+7Qkkh8Sj7+ePRq4FuzHTvXyFgOXEaX0yeVUkpEZMGCBfPOOOOMl4dhSLlcDvvdGiuliKKIlStXVv/O4E0BCA7XOfWqNKxd6T5GIgmDQuArpXhq6/VXMP70OEoppEtheIXMiyqeoHYJKPWRG2a8gvaMFfM8D8/zKJfLrwUuBBZQyxJzONrFjqG9wJ8q5f9XL4V75hr8ipwsHUVRxAknnKCUUt8aGRm5e8GCBV8PgmBdpVKpAL7KJsLTFTzPyyiAFUOi/o5CiwhKhXh+EIWVLd7Yvterhcu2yIdODNh2Qz7+8XWI+sjsV5OeG/QiEiilKiKyGPgi8FrzUEROLjaO3BNSi+l8DfhLpdQ+O7a6+LlapucGvBGvr5Tao5R6HfBuYAL9v/TUl+/oChW0eMeBdyil3mjE6/eaeKEHLbBFRBTgKaVCETkWuAg4itoEpucuTo5UiY+LXwBvVUr9XER8IFJK5cNtbpGeHeRKKTHiDZRSm4Djgc+j/ydnjR1xKtTGxWeAFxnxBkqpsFfFCz1sgeMY9yc0v78C+A9gNc4aDzrx8/8r4F1KqSsBRMRTSvVOuHkG+mJgG0uszBX1h+j87S8y1Rr37FXW0TLCVKt7PnCsUupKEQlERPWDeKFPLHCcOmt8KnAu8DzzcDz66OhP4ud4M/BepdS1MHVs9At9J2CYFuCaB/wd8LfAMM6t7lfi5/Up4BPAuUqpiV4PVM1GXwrYUmeNDwf+BTjTPGzTQ52Qe5sI7TJbq/sd4INKqXuhP61unL4WMFStcXWNT0TOAD6MbhMDtXXBvv8u+gxBX4RtNuGtwIeUUleBTvgBejrC3AwDM2hFxANQSkXGpToHeD+6WB84IfcK9cL9FfBx4OLYuZV+CVLNxcAN1jq3eiHwF+hsrmeZQ+LRS0d+iMyPFe5O9JruBUqpp6H/3eVGDJyALXVCXgb8OfCX6BYy4ObIeaF+jrsTnbBzoVJqBAZTuJaBFTA0nB8vQ7vWfwGsMYfZAeQx4N9Xhgi1Gmz2Anov8AXgK0qp3TA489zZcAOShkIeBv4ELeRjY4c69zpd6t1k0MGpLwDfUUqNgRNuHCfgGPVCNvedBvwZ8ArA9vl0Vjk5GlnbMeBytJt8dfVAJ9xpuMHXgHgiSOy+5wBnA68DnhM73B7jxNw8VrQwNTPubuCbwDeUUvdVD+7jRIxOcQNuDuqXJUSkhC61ezbwcmBZ7HAn5pmZSbRPAFcA3wCuVUpNQvV7Z1CDU83iBlmTmHVkr869PgAt4lcDJ6K7WFjsfM6KedC+a6Em2vq4wR7gBuC7wJVKqd9Un6Td5GhQ1nE7ZdAGVcdY9xqmWgcRWQm8FHglcAKwf91TQ6bOm/vtu48LVjF908hjwEb03PYapdTD1Scaa4tzk1um3wZRptigF3UWwyxHHQecirbMzwUKdU+3glZ1P72A1P00EmwZ2ApcD1wN3GLXbaHq0SicaDuiVwZM7omJWernbSJyGLpiyAnAC4DDqEW041i3G/Ih7HqhwszLaOPAPcBtaEt7SzwQBVVLq3CR5MRwAk6BmJutGhVKE5FVwNHowgO/i26gvpLpVnrK05gqJKidP9Xgvtlep/73+tec66JRRmdE3QX8HNgE3KGU2jHtzfScVnCWNhWcgDPABsBoYJ3N4wW0gNcAhwNrze8HAQcAi8m+gH0F2A38BngIuB+9zHO3+X2XUqpc/yQjWHCBqExwAs4YY53jSQsNRW2O9YH9gGegN1usBA40fx9gHlsCLALmo93yItqS189JQ7TlnES7u08D+9AifRwt1EfMzy7g18CjwOMzCTHmEoNJbnFWNlv+PyGJLJbIrsyNAAAAAElFTkSuQmCC";

/* ---------- palette ---------- */
const C = {
  orange: "#F36E21",
  orangeDim: "#c2571a",
  black: "#0B0A0C",
  ink: "#121113",
  panel: "#17171A",
  panel2: "#1E1F23",
  steel: "#2F3339",
  steelHi: "#383E45",
  line: "#2A2B30",
  text: "#F4F5F6",
  mute: "#9AA0A8",
  faint: "#6B7079",
};

/* ============ FAQ CONTENT (53 Q&A, 7 sections) ============ */
/* X1 Racer public FAQ — 53 Q&As in the 7 client-specified sections.
   Answer format: array of blocks. {p: "..."} = paragraph. {ul: [...]} = bullet list. */

const FAQ_INTRO =
  "The Hyper Racer X1 is a lightweight, high-downforce, Hayabusa-powered single-seat race car built for serious owner-drivers. This FAQ answers the first questions most buyers, drivers, tracks, clubs, and racing families will have: what the car is, who it is for, how fast it is, what ownership looks like, and how the U.S. program is developing.";

const FAQ_SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    blurb: "What the car is and who it's for",
    items: [
      { q: "What is the Hyper Racer X1?", a: [
        { p: "The Hyper Racer X1 is a purpose-built, single-seat race car powered by a Suzuki Hayabusa engine." },
        { p: "It is lightweight, high-downforce, and built around serious owner-drivers who want formula-style performance without the cost and complexity of a traditional professional race program." },
        { p: "In plain English: it is a proper open-wheel race car designed to be fast, repairable, and realistic for a committed owner-driver to run." },
      ]},
      { q: "Who is the X1 built for?", a: [
        { p: "The X1 is built for serious drivers who want something sharper and more focused than a typical track-day car." },
        { p: "It may be a fit for:" },
        { ul: ["advanced HPDE drivers", "club racers", "karting families looking at the next step", "current race car owners", "private club members", "drivers interested in spec racing", "people who want a true single-seat race car experience"] },
        { p: "It is not built to be a street car, beginner toy, or casual weekend cruiser." },
      ]},
      { q: "Is the X1 a track-day car or a race car?", a: [
        { p: "The X1 is a purpose-built race car that can also be used for track-day style running where permitted." },
        { p: "Some owners may be interested in private track use, testing, coaching, or development miles. The larger vision is to support a proper owner-driver racing platform in the U.S." },
      ]},
      { q: "Is the X1 street legal?", a: [
        { p: "No. The X1 is not street legal." },
        { p: "It is designed for closed-course use only." },
      ]},
      { q: "Is the X1 already racing anywhere?", a: [
        { p: "Yes. The X1 is already used in a one-make racing format in Australia." },
        { p: "That matters because the U.S. effort is not starting from theory. The car already has a working race platform to learn from." },
      ]},
      { q: "What is the plan for the U.S.?", a: [
        { p: "The goal is to build early U.S. interest around the X1, support serious owner-drivers, and work toward a proper spec racing platform here." },
        { p: "The first step is building awareness, educating buyers, getting serious drivers around the car, and developing the right regional owner base." },
      ]},
      { q: "Why get involved early?", a: [
        { p: "Early owners and interested drivers can get close to the program while the U.S. side is still taking shape." },
        { p: "That may mean earlier access to information, demos, program updates, and a better understanding of where the car and future racing opportunities may fit." },
        { p: "Early buyers are also important because they help create the first real car count, visibility, feedback, and momentum." },
      ]},
    ],
  },
  {
    id: "performance",
    title: "Performance & Specs",
    blurb: "Engine, power, speed, aero",
    items: [
      { q: "What engine does the X1 use?", a: [
        { p: "The X1 uses a Suzuki GSX 1300R Hayabusa Gen 2 engine." },
        { p: "Key specs:" },
        { ul: ["1,340cc", "4-cylinder", "liquid-cooled", "DOHC", "naturally aspirated", "195 hp at 10,000 rpm", "102 lb-ft of torque", "12.5:1 compression ratio"] },
        { p: "The engine is modified for race car use with changes including exhaust, sump, clutch cover, and ECU-related setup." },
      ]},
      { q: "Why use a Hayabusa engine?", a: [
        { p: "The Hayabusa engine gives the X1 a strong mix of performance, reliability, cost control, and parts availability." },
        { p: "The X1 is not trying to win by using the most exotic engine possible. It is designed around a proven powerplant that delivers serious performance without turning every season into a huge engine-budget exercise." },
        { p: "That fits the owner-driver idea: fast enough to be serious, simple enough to actually use." },
      ]},
      { q: "How much power does the X1 make?", a: [
        { p: "The X1 makes 195 horsepower." },
        { p: "That may not sound extreme if you are thinking in street-car numbers, but the X1 is extremely light. The important number is the power-to-weight ratio: about 500 horsepower per ton." },
        { p: "That is why 195 hp in an X1 is not comparable to 195 hp in a normal road car." },
      ]},
      { q: "How fast is the X1?", a: [
        { p: "Listed performance numbers include:" },
        { ul: ["195 hp", "500 hp/ton", "143 mph top speed", "0–60 mph in 2.9 seconds", "up to 3.0 G lateral cornering", "up to 3.0 G braking", "more than 900 lb of downforce at 100 mph"] },
        { p: "The short version: it accelerates hard, brakes extremely hard, and gets faster through corners as the aero starts working." },
      ]},
      { q: "How much does the X1 weigh?", a: [
        { p: "The X1 is extremely light." },
        { p: "Listed weights:" },
        { ul: ["871 lb in hill-climb spec", "904 lb dry in race-event spec"] },
        { p: "That low weight is central to the car's acceleration, braking, tire life, handling, and running-cost story." },
      ]},
      { q: "What are the dimensions of the X1?", a: [
        { p: "The X1 is compact, low, and wide, like a true single-seat formula-style race car." },
        { p: "Dimensions:" },
        { ul: ["Length: 13 ft 2 in", "Wheelbase: 7 ft 11 in", "Width: 6 ft", "Height: 3 ft 4 in"] },
      ]},
      { q: "What transmission does the X1 use?", a: [
        { p: "The X1 uses a 6-speed sequential gearbox." },
        { p: "That means the driver shifts up and down through the gears in order rather than using a traditional H-pattern shifter." },
        { p: "The car uses a hand-operated clutch for first gear only, giving it a proper race-car driving experience." },
      ]},
      { q: "Does the X1 have a clutch pedal?", a: [
        { p: "No. The X1 uses a two-pedal layout: throttle and brake." },
        { p: "The clutch is hand-operated and used for first gear only." },
        { p: "The pedal box is adjustable for reach, which helps fit different drivers." },
      ]},
      { q: "What drivetrain does the X1 use?", a: [
        { p: "The X1 uses:" },
        { ul: ["helical limited-slip differential", "CV drive shafts", "sprocket carrier", "sprockets and chain"] },
        { p: "In plain English: power goes from the Hayabusa engine through a lightweight race-style drivetrain designed for a high-performance single-seater." },
      ]},
      { q: "What brakes does the X1 use?", a: [
        { p: "The X1 uses serious race braking hardware." },
        { p: "Brake specs include:" },
        { ul: ["4-piston Wilwood calipers", "280mm cross-drilled discs", "twin-split master cylinder system", "cockpit-adjustable brake bias"] },
        { p: "The car is listed at up to 3.0 G under braking, which is a huge part of the driving experience." },
      ]},
      { q: "What tires does the X1 run?", a: [
        { p: "The X1 runs proper racing tires." },
        { p: "Tire and wheel specs include:" },
        { ul: ["Hankook slicks and wets", "F3-spec tire", "front wheels: 13 x 9 in", "rear wheels: 13 x 11 in"] },
        { p: "The combination of slicks, low weight, and aero is what gives the X1 its serious grip." },
      ]},
      { q: "Is the X1 a high-downforce car?", a: [
        { p: "Yes. Aero is central to the X1." },
        { p: "The car uses a twin-tunnel ground-effect undertray along with front and rear wings. The aero starts to matter at lower speeds and becomes a major part of the car's performance as speed builds." },
        { p: "The X1 is listed at more than 900 lb of downforce at 100 mph. That is more than the car's own dry weight." },
      ]},
      { q: "Is the X1 a ground-effect car?", a: [
        { p: "Yes. The X1 uses a twin-tunnel ground-effect undertray." },
        { p: "That means the underside of the car helps create downforce by managing airflow under the car. It is not just a normal car with wings attached." },
        { p: "The underbody, ride height, wing settings, tires, and driver confidence all work together." },
      ]},
      { q: "Are the wings the main source of downforce?", a: [
        { p: "The wings matter, but the X1 should be understood as a complete aero platform." },
        { p: "The car uses:" },
        { ul: ["double-element front wings", "rear wing", "twin-tunnel ground-effect undertray"] },
        { p: "The wings help balance the car, but the underbody is a major part of why the X1 works." },
      ]},
    ],
  },
  {
    id: "chassis",
    title: "Chassis, Safety & Setup",
    blurb: "Construction, protection, adjustability",
    items: [
      { q: "What is the chassis made from?", a: [
        { p: "The X1 uses a formed 4130 chromoly steel chassis." },
        { p: "Chromoly is a strong, lightweight steel commonly used in serious motorsport construction." },
        { p: "The chassis is designed around strength, repairability, and owner-driver practicality." },
      ]},
      { q: "What safety equipment does the X1 have?", a: [
        { p: "The X1 includes serious race-car safety features, including:" },
        { ul: ["4130 chromoly chassis", "carbon-fiber / Kevlar seat", "3-way head restraint", "overhead Henry Bars cockpit protection", "6-point safety harness", "quick-release steering wheel", "cockpit-adjustable brake bias", "mirrors", "hand-held cockpit-mounted fire extinguisher"] },
        { p: "Available race pack items include:" },
        { ul: ["side protection panels", "plumbed fire extinguisher system", "reverse gear system", "wheel tethers"] },
        { p: "The X1 is still a high-performance competition vehicle, so safety inspection, maintenance, and proper driver equipment matter." },
      ]},
      { q: "What are Henry Bars?", a: [
        { p: "Henry Bars are overhead cockpit protection bars." },
        { p: "They are designed to add protection around the driver's head and cockpit area in an open-wheel, single-seat race car environment." },
      ]},
      { q: "What suspension does the X1 use?", a: [
        { p: "The X1 uses proper race-car suspension." },
        { p: "Suspension specs include:" },
        { ul: ["independent wishbone suspension", "pushrod / bell-crank layout", "inboard shocks", "JRi coil-over aluminum mono-shock dampers", "billet-milled aluminum uprights", "adjustable toe", "adjustable camber", "adjustable caster", "adjustable front and rear sway/roll bars"] },
        { p: "In plain English: the X1 has real race-car suspension, but the setup philosophy is meant to stay manageable for serious owner-drivers." },
      ]},
      { q: "What setup adjustments are available?", a: [
        { p: "The X1 can be adjusted through:" },
        { ul: ["ride height", "tunnel height", "front and rear wing angle", "camber", "caster", "toe", "front and rear sway bars", "brake bias"] },
        { p: "This gives the car real setup range without turning it into an endlessly complicated engineering project." },
      ]},
      { q: "What is the cockpit like?", a: [
        { p: "The X1 has a proper single-seat race cockpit." },
        { p: "Cockpit features include:" },
        { ul: ["carbon-fiber / Kevlar seat", "3-way head restraint", "6-point harness", "quick-release F1-style steering wheel", "adjustable steering wheel reach/height", "adjustable pedal reach", "cockpit-adjustable brake bias", "AIM Solo 2 DL dash", "Shift-P2 shift lights", "two-pedal layout"] },
        { p: "The driver sits low in the car, like a proper formula-style machine." },
      ]},
      { q: "What driver size does the X1 fit?", a: [
        { p: "Listed fit range:" },
        { p: "Standard chassis:" },
        { ul: ["5 ft 2 in to 6 ft 1 in", "up to 220 lb"] },
        { p: "Tall chassis:" },
        { ul: ["6 ft 1 in to 6 ft 5 in", "up to 264 lb"] },
        { p: "As with any serious race car, final fit depends on the driver's body shape, seat, comfort, and cockpit setup." },
      ]},
      { q: "How much fuel does the X1 carry?", a: [
        { p: "The X1 uses a 5.2 gallon aluminum fuel tank." },
        { p: "Because the car is light and powered by a motorcycle-based engine, the fuel load is part of keeping the overall package compact and efficient." },
      ]},
      { q: "How loud is the X1?", a: [
        { p: "The spec sheet lists the X1 at 95 dBA at 90 ft." },
        { p: "Sound rules vary by track, so this matters when evaluating where the car can run." },
      ]},
      { q: "What bodywork does the X1 use?", a: [
        { p: "The X1 uses lightweight composite bodywork." },
        { p: "Bodywork and aero pieces include:" },
        { ul: ["carbon-fiber / Kevlar double-element front wing end plates", "carbon-fiber twin-tunnel ground-effect undertray", "fiberglass-reinforced composite body panels", "carbon / Kevlar headrest and knee protection"] },
        { p: "Available options include carbon-fiber side pods, nosecone, roll bar fairings, and an F1-style carbon-fiber steering wheel." },
      ]},
      { q: "What options are available?", a: [
        { p: "Listed options include:" },
        { ul: ["carbon-fiber side pods", "carbon-fiber nosecone", "carbon-fiber roll bar fairings", "carbon-fiber F1-style steering wheel", "built-in air jack system", "service trolley", "custom paint and graphics", "starter motor upgrade / reverse-related option", "race pack", "side protection panels", "plumbed fire extinguisher system", "reverse gear system", "wheel tethers"] },
      ]},
    ],
  },
  {
    id: "ownership",
    title: "Ownership",
    blurb: "Running the car, cost, support",
    items: [
      { q: "Can one person run the car?", a: [
        { p: "That is one of the major ideas behind the X1." },
        { p: "The car is designed to be more approachable for an owner-driver than many traditional race cars. It uses a proven Hayabusa engine, manageable service requirements, replaceable components, and a lightweight package that is easier to live with than many heavier or more complex race cars." },
        { p: "That does not mean it needs no maintenance. It means the car is designed so a serious owner can understand it, maintain it, and run it without needing a large professional crew for every outing." },
      ]},
      { q: "Do I need a full team?", a: [
        { p: "Not necessarily." },
        { p: "The X1 is designed to reduce the need for a full professional crew, but the right level of support depends on how often you run, where you run, your mechanical ability, and whether you are testing, racing, or doing private track days." },
      ]},
      { q: "What does ownership look like?", a: [
        { p: "Ownership means more than buying the car." },
        { p: "A serious buyer should think about:" },
        { ul: ["storage", "trailer / transport", "spares", "tires", "safety gear", "track access", "maintenance", "setup support", "future race opportunities"] },
        { p: "The goal is to make that ownership picture clear before someone gets serious." },
      ]},
      { q: "What needs to be inspected before running?", a: [
        { p: "Like any race car, the X1 needs a proper pre-track inspection." },
        { p: "Key areas include:" },
        { ul: ["fire system", "suspension", "steering", "brakes", "engine oil", "fuel system", "oil lines", "drive chain", "CV shafts", "sprockets", "cooling system", "harness", "helmet certification", "kill switch", "wheels", "tires", "chassis fasteners", "front and rear wings", "undertray and tunnel fasteners", "electrical connections"] },
        { p: "The simplicity story does not replace proper inspection and maintenance." },
      ]},
      { q: "How much does the X1 cost?", a: [
        { p: "The X1 should be understood as a serious race car, not a casual track toy." },
        { p: "Pricing depends on current U.S. availability, final specification, options, and support needs." },
        { p: "For buyers comparing the X1 to other options, the real question is not only \"What does the car cost?\"" },
        { p: "The better question is: \"What does the full ownership and driving opportunity look like compared with karting, HPDE cars, Radical, Rush, F4, Formula Mazda, or other serious track options?\"" },
      ]},
      { q: "Are financing options available?", a: [
        { p: "Financing is not currently the default path buyers should expect." },
        { p: "That may change in the future, but for now, interested buyers should understand the X1 as a serious race-car purchase rather than a typical consumer vehicle financing process." },
      ]},
      { q: "What running costs should an owner expect?", a: [
        { p: "Running costs depend on how often the car is used, how it is driven, tire usage, maintenance, travel, event costs, and support needs." },
        { p: "The X1 platform is built around the idea of keeping serious performance more cost-controlled than many comparable race car paths." },
        { p: "Main running cost areas include:" },
        { ul: ["tires", "fuel", "brakes", "fluids", "spares", "transport", "storage", "entry fees", "track time", "maintenance", "safety gear", "coaching / testing if needed"] },
      ]},
      { q: "Why is the X1 not just another expensive track toy?", a: [
        { p: "Because the X1 is not built around luxury, status, or casual street-car performance." },
        { p: "It is built around:" },
        { ul: ["low weight", "high downforce", "real single-seat driving", "cost-conscious operation", "repairability", "serious track performance", "owner-driver usability", "future spec racing potential"] },
        { p: "It is a purpose-built platform, not a modified road car." },
      ]},
    ],
  },
  {
    id: "where",
    title: "Where It Can Run",
    blurb: "Tracks, clubs, events, demos",
    items: [
      { q: "Where can I drive the X1?", a: [
        { p: "The X1 is designed for closed-course use." },
        { p: "Where it can run depends on the track, event organizer, insurance, run group, sound rules, safety requirements, and local approval." },
        { p: "Private clubs, test days, certain track-day environments, and future X1-specific events may all be part of the ownership picture." },
      ]},
      { q: "Can the X1 run at HPDE events?", a: [
        { p: "Possibly, depending on the organizer and event rules." },
        { p: "Some HPDE groups may allow a car like this, while others may not. It depends on the facility, run group structure, safety requirements, and event format." },
      ]},
      { q: "Can the X1 run at private clubs?", a: [
        { p: "Private clubs may be a natural fit for the X1 because many have experienced drivers, high-end track car owners, and controlled environments." },
        { p: "Final approval depends on the club." },
      ]},
      { q: "Can the X1 run at kart tracks?", a: [
        { p: "The X1 should not be assumed to fit normal kart track use." },
        { p: "Some karting events may make sense as static display or outreach opportunities, especially for karting families, but actual running depends on the facility." },
      ]},
      { q: "Will there be demos or showcases?", a: [
        { p: "Demo and showcase opportunities are part of the developing U.S. plan." },
        { p: "The best way to stay informed is to submit interest and get on the update list." },
      ]},
      { q: "How can I find out about future demos or showcases?", a: [
        { p: "The best way to stay informed is to submit interest through Hyper Racer USA." },
        { p: "As the U.S. program develops, Hyper Racer USA can share updates about future demos, showcases, events, and opportunities to see the car in person." },
      ]},
    ],
  },
  {
    id: "series",
    title: "U.S. Series Path",
    blurb: "Spec racing and the road ahead",
    items: [
      { q: "What would a U.S. series look like?", a: [
        { p: "The likely direction is a cost-controlled, spec-style format focused on driver ability." },
        { p: "A proper structure would need to define things like:" },
        { ul: ["car count", "regions", "tracks", "tire rules", "engine rules", "allowed modifications", "schedule", "support", "event partners"] },
        { p: "The goal is not to create an arms race. The goal is to create a driver-focused platform." },
      ]},
      { q: "Why does spec racing matter?", a: [
        { p: "Spec racing limits the arms race." },
        { p: "The idea is to keep the cars fundamentally equal so the racing is more about the driver, not who spends the most money modifying the car." },
      ]},
      { q: "What does Australia prove?", a: [
        { p: "Australia shows that the X1 concept can work as a one-make racing platform." },
        { p: "That gives the U.S. side a real reference point instead of starting from theory." },
      ]},
    ],
  },
  {
    id: "buyer",
    title: "Buyer Fit & Next Steps",
    blurb: "Is it for you, and what happens next",
    items: [
      { q: "Who should not buy the X1?", a: [
        { p: "Someone should probably not buy the X1 if they want:" },
        { ul: ["a street car", "a casual weekend toy", "a low-speed beginner car", "a car they never maintain", "a car that can run anywhere with no questions asked", "a guaranteed local racing series immediately"] },
        { p: "This is a serious car for serious drivers." },
      ]},
      { q: "What happens after I submit interest?", a: [
        { p: "After someone submits interest, the goal is to send the right information based on what they need." },
        { p: "Depending on the person, that may include:" },
        { ul: ["basic X1 info", "video content", "FAQ / buyer education", "demo updates", "U.S. program updates", "a call with Hyper Racer USA", "pricing / availability discussion", "future event or showcase information"] },
        { p: "Serious buyer conversations can be routed directly to Lou and the Hyper Racer USA team." },
      ]},
      { q: "Can a track, club, coach, or shop work with Hyper Racer USA?", a: [
        { p: "Yes." },
        { p: "Tracks, private clubs, coaches, race shops, karting programs, and HPDE/event organizers can all be valuable partners or connectors." },
        { p: "Some may be interested in future demos or showcases. Others may know serious drivers, racing families, or owner-drivers who should learn about the X1." },
      ]},
      { q: "What is the easiest way to explain the X1?", a: [
        { p: "A lightweight Hayabusa-powered formula-style race car with real aero, serious speed, and a cost-controlled owner-driver philosophy." },
        { p: "It is built for people who want something sharper, lighter, and more race-focused than a normal track car, without jumping into the cost and complexity of a full professional race program." },
      ]},
    ],
  },
];

/* ---------- demo seed data ---------- */
const SEED = [
  {
    id: "L-1042", name: "Marcus Webb", email: "mwebb@apexkarting.com",
    phone: "(480) 555-0173", loc: "Scottsdale, AZ", who: "Karting driver / family",
    want: "I want pricing / ownership details", priority: "Hot", owner: "Lou",
    source: "Event booth", event: "Podium Club", interest: "I may be interested in purchasing",
    budget: "$100k+", timeline: "Now / actively looking", stage: "qualified",
    ts: Date.now() - 1000 * 60 * 60 * 5,
  },
  {
    id: "L-1041", name: "Dana Reyes", email: "dana.reyes@gmail.com",
    phone: "(602) 555-0148", loc: "Phoenix, AZ", who: "Track-day / HPDE driver",
    want: "Invite me to a future demo/showcase", priority: "Warm", owner: "Max",
    source: "Website", event: "Website", interest: "Very interested",
    budget: "$75k–$100k", timeline: "3–6 months", stage: "new",
    ts: Date.now() - 1000 * 60 * 60 * 26,
  },
  {
    id: "L-1040", name: "Chris Okafor", email: "c.okafor@rushmotorsport.com",
    phone: "(310) 555-0192", loc: "Long Beach, CA", who: "Coach / shop / team",
    want: "I'd like to talk with someone", priority: "Hot", owner: "Lou",
    source: "Referral", event: "Monterey Car Week", interest: "I'd like to speak with someone",
    budget: "Depends on running costs / support", timeline: "Next 3 months", stage: "contacted",
    ts: Date.now() - 1000 * 60 * 60 * 50,
  },
  {
    id: "L-1039", name: "Priya Nair", email: "priya@gridlinemedia.co",
    phone: "(415) 555-0121", loc: "San Jose, CA", who: "Media / content",
    want: "Keep me updated on the U.S. series", priority: "Media / connector", owner: "Max",
    source: "Instagram", event: "Cars & Coffee", interest: "Just learning",
    budget: "Prefer to discuss privately", timeline: "Not sure yet", stage: "new",
    ts: Date.now() - 1000 * 60 * 60 * 73,
  },
  {
    id: "L-1038", name: "Tom Bradshaw", email: "tbradshaw@outlook.com",
    phone: "(503) 555-0188", loc: "Portland, OR", who: "Current race car owner",
    want: "I want pricing / ownership details", priority: "Long-term", owner: "Lou",
    source: "Track day", event: "Sonoma w/ Turn 2 Club", interest: "Interested, but early",
    budget: "$50k–$75k", timeline: "6–12 months", stage: "qualified",
    ts: Date.now() - 1000 * 60 * 60 * 99,
  },
];

const PRIORITY_COLORS = {
  "Hot": "#F36E21",
  "Warm": "#E0A33C",
  "Long-term": "#5B8DEF",
  "Not qualified": "#6B7079",
  "Media / connector": "#9B6BEF",
  "Partner / sponsor": "#3FB57A",
  "Needs more info": "#9AA0A8",
};

const STAGES = [
  { key: "new", label: "New" },
  { key: "contacted", label: "Contacted" },
  { key: "qualified", label: "Qualified" },
  { key: "won", label: "Closed" },
];

/* ---------- storage ---------- */
const KEY = "x1crm_leads_v1";
function loadLeads() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return SEED;
}
function saveLeads(leads) {
  try { localStorage.setItem(KEY, JSON.stringify(leads)); } catch (e) {}
}

/* ---------- tiny atoms ---------- */
function Hairline({ style }) {
  return <div style={{ height: 1, background: C.orange, opacity: 0.5, ...style }} />;
}

function Stat({ value, label, sub }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 40, letterSpacing: "-0.02em", color: C.text, lineHeight: 1 }}>{value}</span>
        {sub && <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 16, color: C.mute, textTransform: "uppercase" }}>{sub}</span>}
      </div>
      <div style={{ marginTop: 8, height: 2, width: 46, background: C.orange }} />
      <div style={{ marginTop: 8, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: C.mute, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function Logo({ size = 34 }) {
  return <img src={LOGO} alt="X1 Racer" style={{ height: size, width: "auto", display: "block" }} />;
}

/* ============================================================
   ROOT
   ============================================================ */
/* routes: #/leads  #/event-form  #/full-form  (default leads) */
function readHash() {
  const h = (typeof window !== "undefined" ? window.location.hash : "").replace(/^#\/?/, "");
  if (h === "event-form") return "event";
  if (h === "full-form") return "full";
  if (h === "faq") return "faq";
  return "leads";
}

export default function App() {
  const [view, setView] = useState(readHash);
  const [leads, setLeads] = useState(loadLeads);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { saveLeads(leads); }, [leads]);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 60); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const onHash = () => setView(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function nav(v) {
    const hash = v === "event" ? "#/event-form" : v === "full" ? "#/full-form" : v === "faq" ? "#/faq" : "#/leads";
    if (window.location.hash !== hash) window.location.hash = hash;
    setView(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addLead(lead) { setLeads((prev) => [lead, ...prev]); }
  function updateLead(id, patch) { setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l))); }
  function resetDemo() { setLeads(SEED); }

  return (
    <div style={{
      minHeight: "100vh", background: C.black, color: C.text,
      fontFamily: "'Inter', system-ui, sans-serif",
      opacity: loaded ? 1 : 0, transition: "opacity .5s ease",
    }}>
      <GlobalStyle />
      <TopBar view={view} nav={nav} />
      {view === "leads" && (
        <CRM leads={leads} updateLead={updateLead} resetDemo={resetDemo} nav={nav} />
      )}
      {view === "event" && (
        <FormShell>
          <EventFormFlow addLead={addLead} updateLead={updateLead} nav={nav} />
        </FormShell>
      )}
      {view === "full" && (
        <FormShell>
          <FullFormStandalone addLead={addLead} nav={nav} />
        </FormShell>
      )}
      {view === "faq" && <FAQ nav={nav} />}
      <Footer />
    </div>
  );
}

/* shared gradient backdrop for public forms */
function FormShell({ children }) {
  return (
    <div style={{ background: `linear-gradient(170deg, ${C.steelHi} 0%, ${C.ink} 40%, ${C.black} 100%)`, minHeight: "calc(100vh - 64px)", position: "relative", overflow: "hidden" }}>
      <Diagonals />
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 22px 80px", position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

/* ---------- top bar ---------- */
function TopBar({ view, nav }) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50, background: "#000",
      borderBottom: `1px solid ${C.line}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Logo size={30} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, letterSpacing: "0.04em", fontSize: 15, textTransform: "uppercase" }}>X1 Racer</span>
            <span style={{ fontSize: 10, letterSpacing: "0.22em", color: C.orange, textTransform: "uppercase", fontWeight: 600 }}>North America</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, background: C.ink, padding: 4, borderRadius: 2, border: `1px solid ${C.line}` }}>
          <Seg active={view === "leads"} onClick={() => nav("leads")}>Leads</Seg>
          <Seg active={view === "event"} onClick={() => nav("event")}>Event form</Seg>
          <Seg active={view === "full"} onClick={() => nav("full")}>Full form</Seg>
          <Seg active={view === "faq"} onClick={() => nav("faq")}>FAQ</Seg>
        </div>
      </div>
    </div>
  );
}
function Seg({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      border: "none", cursor: "pointer", padding: "8px 16px",
      fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 12,
      letterSpacing: "0.08em", textTransform: "uppercase",
      background: active ? C.orange : "transparent",
      color: active ? "#000" : C.mute, borderRadius: 1, transition: "all .18s",
    }}>{children}</button>
  );
}

/* ============================================================
   CRM  (the spine)
   ============================================================ */
function CRM({ leads, updateLead, resetDemo, nav }) {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const hot = leads.filter((l) => l.priority === "Hot").length;
  const wk = leads.filter((l) => Date.now() - l.ts < 1000 * 60 * 60 * 24 * 7).length;
  const unassigned = leads.filter((l) => !l.owner || l.owner === "—").length;

  const filtered = filter === "all" ? leads : leads.filter((l) => l.stage === filter);

  return (
    <div>
      {/* hero band */}
      <div style={{ background: `linear-gradient(160deg, ${C.steelHi} 0%, ${C.ink} 55%, ${C.black} 100%)`, borderBottom: `1px solid ${C.line}`, position: "relative", overflow: "hidden" }}>
        <Diagonals />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 22px 30px", position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.orange, fontWeight: 700 }}>Leads</div>
          <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 38, letterSpacing: "-0.02em", margin: "6px 0 4px", textTransform: "uppercase" }}>Lead Pipeline</h1>
          <p style={{ color: C.mute, fontSize: 14, maxWidth: 560, margin: 0 }}>
            Every X1 inquiry from events and the web lands here, scored and ready to work. This is a live demo seeded with sample leads.
          </p>

          <div style={{ display: "flex", gap: 44, marginTop: 26, flexWrap: "wrap" }}>
            <Stat value={leads.length} label="Total leads" />
            <Stat value={hot} label="Hot — act now" />
            <Stat value={wk} label="New this week" />
            <Stat value={unassigned} label="Unassigned" />
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
            <button onClick={() => nav("event")} style={btnPrimary}>Open the event form →</button>
            <button onClick={() => nav("full")} style={btnGhost}>Open the full form →</button>
            <button onClick={resetDemo} style={{ ...btnGhost, color: C.faint }}>Reset demo data</button>
          </div>
          <p style={{ color: C.faint, fontSize: 12, margin: "14px 0 0" }}>
            Send leads the event form for fast booth capture, or the full form as a follow-up link after an event.
          </p>
        </div>
      </div>

      {/* filters */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 22px 0" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Chip active={filter === "all"} onClick={() => setFilter("all")}>All ({leads.length})</Chip>
          {STAGES.map((s) => {
            const n = leads.filter((l) => l.stage === s.key).length;
            return <Chip key={s.key} active={filter === s.key} onClick={() => setFilter(s.key)}>{s.label} ({n})</Chip>;
          })}
        </div>
      </div>

      {/* table */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 22px 60px" }}>
        <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, overflow: "hidden", background: C.ink }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1.05fr 0.7fr 0.8fr 0.7fr", gap: 0, padding: "13px 18px", borderBottom: `1px solid ${C.line}`, background: "#000" }}>
            {["Lead", "Interest", "Priority", "Owner", "Source", "Stage"].map((h) => (
              <div key={h} style={{ fontSize: 10.5, letterSpacing: "0.13em", textTransform: "uppercase", color: C.faint, fontWeight: 700 }}>{h}</div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: "48px 18px", textAlign: "center", color: C.mute }}>
              No leads in this stage yet. Open the public form and submit one — it lands here instantly.
            </div>
          )}
          {filtered.map((l, i) => (
            <Row key={l.id} lead={l} i={i} onClick={() => setSelected(l)} />
          ))}
        </div>
      </div>

      {selected && (
        <LeadDrawer
          lead={leads.find((x) => x.id === selected.id) || selected}
          onClose={() => setSelected(null)}
          updateLead={updateLead}
        />
      )}
    </div>
  );
}

function Diagonals() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} preserveAspectRatio="none">
      <line x1="62%" y1="0" x2="78%" y2="100%" stroke={C.orange} strokeWidth="1" opacity="0.32" />
      <line x1="100%" y1="20%" x2="70%" y2="100%" stroke={C.orange} strokeWidth="1" opacity="0.18" />
    </svg>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      cursor: "pointer", border: `1px solid ${active ? C.orange : C.line}`,
      background: active ? "rgba(243,110,33,0.12)" : "transparent",
      color: active ? C.orange : C.mute, padding: "7px 14px", borderRadius: 2,
      fontSize: 12, fontWeight: 600, letterSpacing: "0.03em", transition: "all .15s",
    }}>{children}</button>
  );
}

function Row({ lead, i, onClick }) {
  const [hover, setHover] = useState(false);
  const pc = PRIORITY_COLORS[lead.priority] || C.mute;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid", gridTemplateColumns: "1.5fr 1fr 1.05fr 0.7fr 0.8fr 0.7fr",
        gap: 0, padding: "14px 18px", alignItems: "center", cursor: "pointer",
        borderBottom: `1px solid ${C.line}`,
        background: hover ? C.panel : "transparent",
        transition: "background .14s",
        animation: `fadeUp .4s ease both`, animationDelay: `${Math.min(i * 0.04, 0.4)}s`,
      }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{lead.name}</div>
        <div style={{ fontSize: 12, color: C.faint, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{lead.loc} · {lead.who}</div>
      </div>
      <div style={{ fontSize: 12.5, color: C.mute, paddingRight: 10 }}>{lead.interest}</div>
      <div>
        <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 6, fontSize: 11.5, fontWeight: 700, color: pc, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.25 }}>
          <span style={{ width: 7, height: 7, borderRadius: 8, background: pc, flexShrink: 0, marginTop: 3 }} />
          <span>{lead.priority}</span>
        </span>
      </div>
      <div style={{ fontSize: 13, color: lead.owner === "—" ? C.faint : C.text }}>{lead.owner || "—"}</div>
      <div style={{ fontSize: 12.5, color: C.mute }}>{lead.source}</div>
      <div>
        <span style={{ fontSize: 11, color: C.mute, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
          {STAGES.find((s) => s.key === lead.stage)?.label || lead.stage}
        </span>
      </div>
    </div>
  );
}

/* ---------- lead drawer ---------- */
function LeadDrawer({ lead, onClose, updateLead }) {
  const pc = PRIORITY_COLORS[lead.priority] || C.mute;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(0,0,0,0.62)", display: "flex", justifyContent: "flex-end", animation: "fadeIn .2s ease" }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "min(460px, 92vw)", height: "100%", background: C.ink,
        borderLeft: `1px solid ${C.line}`, overflowY: "auto",
        animation: "slideIn .26s cubic-bezier(.2,.7,.2,1)",
      }}>
        <div style={{ padding: "22px 24px", borderBottom: `1px solid ${C.line}`, background: `linear-gradient(150deg, ${C.steel}, ${C.ink})`, position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 18, right: 18, background: "transparent", border: "none", color: C.mute, fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
          <div style={{ fontSize: 10.5, letterSpacing: "0.16em", color: C.orange, textTransform: "uppercase", fontWeight: 700 }}>{lead.id}</div>
          <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 26, margin: "6px 0 2px", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{lead.name}</h2>
          <div style={{ color: C.mute, fontSize: 13 }}>{lead.loc}</div>
          <div style={{ marginTop: 12, display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: pc, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            <span style={{ width: 8, height: 8, borderRadius: 8, background: pc }} />{lead.priority}
          </div>
        </div>

        <div style={{ padding: "20px 24px" }}>
          <Field label="Email" value={lead.email} />
          <Field label="Phone" value={lead.phone} />
          <Field label="Describes them" value={lead.who} />
          <Field label="Wants next" value={lead.want} />
          <Field label="Interest level" value={lead.interest} />
          <Field label="Budget comfort" value={lead.budget} />
          <Field label="Timeline" value={lead.timeline} />
          <Field label="Lead source" value={lead.source} />
          <Field label="Event" value={lead.event} />

          <div style={{ marginTop: 22, height: 1, background: C.line }} />
          <div style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: C.faint, fontWeight: 700, margin: "18px 0 12px" }}>Sales actions</div>

          <Control label="Owner">
            {["Lou", "Max", "—"].map((o) => (
              <Mini key={o} active={lead.owner === o} onClick={() => updateLead(lead.id, { owner: o })}>{o}</Mini>
            ))}
          </Control>
          <Control label="Priority">
            {["Hot", "Warm", "Long-term", "Not qualified", "Media / connector", "Partner / sponsor", "Needs more info"].map((p) => (
              <Mini key={p} active={lead.priority === p} color={PRIORITY_COLORS[p]} onClick={() => updateLead(lead.id, { priority: p })}>{p}</Mini>
            ))}
          </Control>
          <Control label="Stage">
            {STAGES.map((s) => (
              <Mini key={s.key} active={lead.stage === s.key} onClick={() => updateLead(lead.id, { stage: s.key })}>{s.label}</Mini>
            ))}
          </Control>
        </div>
      </div>
    </div>
  );
}
function Field({ label, value }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: C.faint, fontWeight: 600, marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, color: C.text }}>{value || "—"}</div>
    </div>
  );
}
function Control({ label, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 11, color: C.mute, marginBottom: 7, fontWeight: 600 }}>{label}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}
function Mini({ active, color, onClick, children }) {
  const ac = color || C.orange;
  return (
    <button onClick={onClick} style={{
      cursor: "pointer", padding: "6px 11px", borderRadius: 2, fontSize: 12, fontWeight: 600,
      border: `1px solid ${active ? ac : C.line}`,
      background: active ? ac : "transparent",
      color: active ? "#000" : C.mute, transition: "all .14s",
    }}>{children}</button>
  );
}

/* ============================================================
   PUBLIC FORMS  (event short -> bridge -> long qualification)
   ============================================================ */
/* EVENT FORM FLOW: short event capture -> bridge -> full form. The booth path. */
function EventFormFlow({ addLead, updateLead, nav }) {
  const [stage, setStage] = useState("short"); // short | thanks | long | done
  const [shortData, setShortData] = useState(null);
  const [leadId, setLeadId] = useState(null);

  function submitShort(data) {
    setShortData(data);
    const lead = buildLead(data, "event");
    setLeadId(lead.id);
    addLead(lead);
    setStage("thanks");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function submitLong(data) {
    if (leadId) updateLead(leadId, enrichFromLong(data));
    setStage("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {stage === "short" && <ShortForm onSubmit={submitShort} />}
      {stage === "thanks" && <Bridge onContinue={() => { setStage("long"); window.scrollTo({ top: 0 }); }} onCRM={() => nav("leads")} />}
      {stage === "long" && <LongForm base={shortData} onSubmit={submitLong} />}
      {stage === "done" && <DoneScreen onCRM={() => nav("leads")} />}
    </>
  );
}

/* FULL FORM STANDALONE: the form Lou sends as a follow-up link after an event.
   Self-contained — own contact section, creates its own lead. */
function FullFormStandalone({ addLead, nav }) {
  const [done, setDone] = useState(false);

  function submitLong(data) {
    const lead = buildLead(
      { name: data.name, email: data.email, phone: data.phone, loc: data.loc, who: data.who, want: (data.next && data.next[0]) || "—" },
      "full"
    );
    addLead({ ...lead, ...enrichFromLong(data) });
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (done) return <DoneScreen onCRM={() => nav("leads")} />;
  return <LongForm base={null} onSubmit={submitLong} standalone />;
}

function enrichFromLong(data) {
  return {
    name: data.name, email: data.email, phone: data.phone, loc: data.loc,
    who: data.who || "—",
    interest: data.level || "New inquiry",
    budget: data.budget || "—",
    timeline: data.timeline || "—",
    want: (data.next && data.next[0]) || "—",
    priority: "Needs more info",
  };
}

function buildLead(s, channel) {
  const id = "L-" + Math.floor(1043 + Math.random() * 900);
  const src = channel === "full" ? "Email outreach" : "Website";
  return {
    id, name: s.name || "New lead", email: s.email || "", phone: s.phone || "",
    loc: s.loc || "", who: s.who || "—", want: s.want || "—",
    priority: "Needs more info", owner: "—", source: src,
    event: channel === "full" ? "Follow-up link" : "Website",
    interest: "New inquiry", budget: "—", timeline: "—",
    stage: "new", ts: Date.now(),
  };
}

/* eyebrow + heading */
function FormHead({ kicker, title, sub }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <Logo size={30} />
        <span style={{ fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: C.orange, fontWeight: 700 }}>{kicker}</span>
      </div>
      <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 34, lineHeight: 1.04, letterSpacing: "-0.02em", textTransform: "uppercase", margin: "0 0 8px" }}>{title}</h1>
      {sub && <p style={{ color: C.mute, fontSize: 14, margin: 0, maxWidth: 520 }}>{sub}</p>}
      <div style={{ marginTop: 16, height: 2, width: 54, background: C.orange }} />
    </div>
  );
}

/* ---- short event form (verbatim from doc) ---- */
function ShortForm({ onSubmit }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", loc: "", who: "", want: "", note: "", consent: "" });
  const [err, setErr] = useState(false);
  const set = (k) => (v) => setF((p) => ({ ...p, [k]: v }));

  function go() {
    if (!f.name || !f.phone || !f.email || !f.loc || !f.who || !f.want || !f.consent) { setErr(true); return; }
    onSubmit(f);
  }

  return (
    <div style={{ animation: "fadeUp .4s ease both" }}>
      <FormHead kicker="Hyper Racer X1 · Interest" title={<>Leave your info,<br />we'll send the details</>}
        sub="Get more details, demo and showcase updates, and U.S. program info. Takes under a minute." />

      <Card>
        <Text label="Name" required value={f.name} onChange={set("name")} placeholder="First and last" />
        <Text label="Phone" required value={f.phone} onChange={set("phone")} placeholder="(555) 555-5555" type="tel" />
        <Text label="Email" required value={f.email} onChange={set("email")} placeholder="you@email.com" type="email" />
        <Text label="City / State" required value={f.loc} onChange={set("loc")} placeholder="City, ST" />

        <Choice label="What best describes you?" required value={f.who} onChange={set("who")} options={[
          "Karting driver / family", "Track-day / HPDE driver", "Club racer", "Current race car owner",
          "Coach / shop / team", "Track / club / facility", "Media / content", "Sponsor / business interest",
          "Just curious", "Other",
        ]} />

        <Choice label="What do you want next?" required value={f.want} onChange={set("want")} options={[
          "Send me basic info", "I want pricing / ownership details", "Invite me to a future demo/showcase",
          "I'd like to talk with someone", "Keep me updated on the U.S. series", "Other",
        ]} />

        <Area label="Anything specific you want to know?" value={f.note} onChange={set("note")}
          placeholder="Running costs, where to race, demo info, support, comparison to other cars, etc." />

        <Choice label="Can we contact you with X1 info and updates?" required value={f.consent} onChange={set("consent")} options={["Yes", "No"]} inline />

        {err && <div style={errStyle}>Fill in the required fields marked with a dot to continue.</div>}
        <button onClick={go} style={{ ...btnPrimary, width: "100%", marginTop: 18, padding: "15px" }}>Submit</button>
      </Card>
      <p style={{ textAlign: "center", color: C.faint, fontSize: 12, marginTop: 16, letterSpacing: "0.08em" }}>X1RACER.COM</p>
    </div>
  );
}

/* ---- bridge / thank-you ---- */
function Bridge({ onContinue, onCRM }) {
  return (
    <div style={{ animation: "fadeUp .4s ease both", textAlign: "center", paddingTop: 30 }}>
      <Logo size={48} />
      <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 36, textTransform: "uppercase", letterSpacing: "-0.02em", margin: "24px 0 10px" }}>You're in.</h1>
      <p style={{ color: C.mute, fontSize: 15, maxWidth: 440, margin: "0 auto 6px" }}>
        Thanks — we'll follow up with X1 info and U.S. program updates.
      </p>
      <div style={{ margin: "30px auto", maxWidth: 460, padding: "26px 24px", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 4, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: C.orange }} />
        <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.orange, fontWeight: 700, marginBottom: 8 }}>One more step</div>
        <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Want to give us a little more detail?</div>
        <p style={{ color: C.mute, fontSize: 13.5, margin: "0 0 18px" }}>Answer 5 more questions so we send you exactly the right info — pricing, demos, running costs, series plans.</p>
        <button onClick={onContinue} style={{ ...btnPrimary, width: "100%", padding: "14px" }}>Answer 5 more questions →</button>
      </div>
      <button onClick={onCRM} style={{ ...btnGhost, fontSize: 12 }}>← Back to leads (demo)</button>
    </div>
  );
}

/* ---- long qualification form (verbatim sections from doc) ---- */
function LongForm({ base, onSubmit, standalone }) {
  const [f, setF] = useState({
    name: base?.name || "", email: base?.email || "", phone: base?.phone || "", loc: base?.loc || "",
    who: "", drives: "", track: "", caught: [], level: "", next: [],
    others: "", othersWhich: "", timeline: "", budget: "", need: [],
    questions: "", consent: base?.consent || "", method: "",
  });
  const [err, setErr] = useState(false);
  const set = (k) => (v) => setF((p) => ({ ...p, [k]: v }));
  const toggle = (k) => (v) => setF((p) => {
    const arr = p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v];
    return { ...p, [k]: arr };
  });

  function go() {
    if (!f.name || !f.email || !f.phone || !f.loc || !f.caught.length || !f.level || !f.next.length || !f.consent) { setErr(true); return; }
    onSubmit(f);
  }

  return (
    <div style={{ animation: "fadeUp .4s ease both" }}>
      <FormHead kicker="Hyper Racer X1 · Full interest form"
        title={standalone ? "Hyper Racer X1 interest" : "Tell us where you're at"}
        sub={standalone
          ? "Interested in the Hyper Racer X1? Leave your info and we'll follow up with details, demo opportunities, and U.S. program updates."
          : "The more we know, the better we can match you. Most fields are optional — answer what's relevant."} />

      <Section n="01" title="Contact info" />
      <Card>
        {base && <div style={{ marginBottom: 16, padding: "10px 13px", background: "rgba(243,110,33,0.08)", border: `1px solid ${C.orangeDim}`, borderRadius: 2, color: C.orange, fontSize: 12.5 }}>Carried over from your first form — check it's right.</div>}
        <Text label="Full Name" required value={f.name} onChange={set("name")} placeholder="First and last" />
        <Text label="Email" required value={f.email} onChange={set("email")} placeholder="you@email.com" type="email" />
        <Text label="Phone Number" required value={f.phone} onChange={set("phone")} placeholder="(555) 555-5555" type="tel" />
        <Text label="City / State" required value={f.loc} onChange={set("loc")} placeholder="City, ST" />
      </Card>

      <Section n="02" title="Motorsport background" />
      <Card>
        <Choice label="Which best describes you?" required value={f.who} onChange={set("who")} options={[
          "Karting driver", "Karting parent / family", "HPDE / track-day driver", "Club racer",
          "Current race car owner", "Coach / instructor", "Shop / team / race prep business",
          "Track / club / facility", "Media / content / influencer", "Sponsor / business interest",
          "Just curious", "Other",
        ]} />
        <Text label="What do you currently drive or race?" value={f.drives} onChange={set("drives")}
          placeholder="Kart, Radical, Rush, formula car, Porsche, BMW, Corvette, Miata, sim only, etc." />
        <Choice label="How often are you on track?" value={f.track} onChange={set("track")} options={[
          "A few times per year", "Monthly", "Multiple times per month", "Race weekends only", "Karting mostly", "Not currently active", "Other",
        ]} />
      </Card>

      <Section n="03" title="Interest level" />
      <Card>
        <MultiChoice label="What caught your attention about the X1?" required value={f.caught} onChange={toggle("caught")} options={[
          "Speed / performance", "Open-wheel / formula-style experience", "Spec racing potential", "Track-day use",
          "Cost-controlled ownership", "Repairability / simple operation", "Progression from karting",
          "Potential U.S. championship", "Content / media interest", "Business / sponsorship interest", "Other",
        ]} />
        <Choice label="How interested are you right now?" required value={f.level} onChange={set("level")} options={[
          "Just learning", "Interested, but early", "Very interested", "I'd like to speak with someone",
          "I'd like to see the car in person", "I'd like to know about pricing / availability", "I may be interested in purchasing",
        ]} />
        <MultiChoice label="What would you want next?" required value={f.next} onChange={toggle("next")} options={[
          "Send me basic info", "Send me pricing / ownership details", "Invite me to a future demo/showcase",
          "I'd like a call with the Hyper Racer USA team", "I want to follow U.S. championship updates",
          "I'd like to see running cost / spares info", "I'd like comparison info vs Radical / Rush / F4 / Formula Mazda",
          "I may know someone who should see this", "Other",
        ]} />
      </Card>

      <Section n="04" title="Buyer fit" />
      <Card>
        <Choice label="Considering any other track or race cars?" value={f.others} onChange={set("others")} options={["Yes", "No", "Maybe"]} inline />
        <Text label="If yes, which ones?" value={f.othersWhich} onChange={set("othersWhich")}
          placeholder="Radical, Rush, F4, Formula Mazda, Porsche, Spec Miata, karting, etc." />
        <Choice label="What timeline would make sense for you?" value={f.timeline} onChange={set("timeline")} options={[
          "Now / actively looking", "Next 3 months", "3–6 months", "6–12 months", "Longer-term", "Not sure yet",
        ]} />
        <Choice label="Which range best describes where you are mentally?" value={f.budget} onChange={set("budget")} options={[
          "Still learning, no budget in mind", "Under $50k", "$50k–$75k", "$75k–$100k", "$100k+",
          "Depends on running costs / support", "Prefer to discuss privately",
        ]} />
        <MultiChoice label="What would you need to understand before getting serious?" value={f.need} onChange={toggle("need")} options={[
          "Total purchase price", "Running costs", "Financing / payment options", "Where I can run it", "Safety",
          "Parts / spares availability", "Service / support", "Race series plans", "Comparison to other cars",
          "Test/demo opportunity", "Storage / transport", "Coaching / learning curve", "Other",
        ]} />
      </Card>

      <Section n="05" title="Notes / questions" />
      <Card>
        <Area label="Any specific questions?" value={f.questions} onChange={set("questions")}
          placeholder="Ask anything about the car, ownership, demos, U.S. plans, running costs, or future series." />
      </Card>

      <Section n="06" title="Permission" />
      <Card>
        <Choice label="Can we contact you with Hyper Racer X1 updates and follow-up info?" required value={f.consent} onChange={set("consent")} options={["Yes", "No"]} inline />
        <Choice label="Preferred contact method" value={f.method} onChange={set("method")} options={[
          "Email", "Text", "Phone call", "Instagram / social", "No preference",
        ]} />
        {err && <div style={errStyle}>Answer the required fields marked with a dot to finish.</div>}
        <button onClick={go} style={{ ...btnPrimary, width: "100%", marginTop: 18, padding: "15px" }}>Submit form</button>
      </Card>
      <p style={{ textAlign: "center", color: C.faint, fontSize: 12, marginTop: 16, letterSpacing: "0.08em" }}>X1RACER.COM</p>
    </div>
  );
}

function DoneScreen({ onCRM }) {
  return (
    <div style={{ animation: "fadeUp .4s ease both", textAlign: "center", paddingTop: 50 }}>
      <Logo size={54} />
      <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 38, textTransform: "uppercase", letterSpacing: "-0.02em", margin: "26px 0 10px" }}>Thanks for your interest.</h1>
      <p style={{ color: C.mute, fontSize: 15, maxWidth: 460, margin: "0 auto 8px" }}>
        We'll follow up with more info, future demo and showcase opportunities, and updates as the U.S. program develops.
      </p>
      <p style={{ color: C.faint, fontSize: 12, letterSpacing: "0.1em", margin: "18px 0 30px" }}>X1RACER.COM</p>
      <button onClick={onCRM} style={btnPrimary}>See where your lead landed →</button>
    </div>
  );
}

/* ============================================================
   FORM PRIMITIVES
   ============================================================ */
function Card({ children }) {
  return <div style={{ background: C.ink, border: `1px solid ${C.line}`, borderRadius: 4, padding: "22px 22px 24px", marginBottom: 18 }}>{children}</div>;
}
function Section({ n, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "26px 0 10px" }}>
      <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 13, color: C.orange }}>{n}</span>
      <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: C.line }} />
    </div>
  );
}
function Lbl({ children, required }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: C.text, display: "flex", alignItems: "center", gap: 6 }}>
      {children}{required && <span style={{ width: 6, height: 6, borderRadius: 6, background: C.orange, display: "inline-block" }} />}
    </div>
  );
}
function Text({ label, value, onChange, placeholder, required, type = "text" }) {
  const [foc, setFoc] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <Lbl required={required}>{label}</Lbl>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type}
        onFocus={() => setFoc(true)} onBlur={() => setFoc(false)}
        style={{
          width: "100%", boxSizing: "border-box", background: C.black,
          border: `1px solid ${foc ? C.orange : C.line}`, borderRadius: 2,
          padding: "12px 13px", color: C.text, fontSize: 14, outline: "none",
          transition: "border-color .15s", fontFamily: "inherit",
        }} />
    </div>
  );
}
function Area({ label, value, onChange, placeholder, required }) {
  const [foc, setFoc] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <Lbl required={required}>{label}</Lbl>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={3}
        onFocus={() => setFoc(true)} onBlur={() => setFoc(false)}
        style={{
          width: "100%", boxSizing: "border-box", background: C.black,
          border: `1px solid ${foc ? C.orange : C.line}`, borderRadius: 2,
          padding: "12px 13px", color: C.text, fontSize: 14, outline: "none",
          transition: "border-color .15s", fontFamily: "inherit", resize: "vertical",
        }} />
    </div>
  );
}
function Choice({ label, value, onChange, options, required, inline }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <Lbl required={required}>{label}</Lbl>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {options.map((o) => {
          const on = value === o;
          return (
            <button key={o} onClick={() => onChange(o)} style={{
              cursor: "pointer", padding: inline ? "10px 22px" : "10px 14px",
              border: `1px solid ${on ? C.orange : C.line}`, borderRadius: 2,
              background: on ? "rgba(243,110,33,0.13)" : C.black,
              color: on ? C.orange : C.mute, fontSize: 13, fontWeight: on ? 600 : 500,
              transition: "all .14s", fontFamily: "inherit",
            }}>{o}</button>
          );
        })}
      </div>
    </div>
  );
}
function MultiChoice({ label, value, onChange, options, required }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <Lbl required={required}>{label} <span style={{ color: C.faint, fontWeight: 400, fontSize: 12 }}>· select all that apply</span></Lbl>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <button key={o} onClick={() => onChange(o)} style={{
              cursor: "pointer", padding: "10px 14px",
              border: `1px solid ${on ? C.orange : C.line}`, borderRadius: 2,
              background: on ? "rgba(243,110,33,0.13)" : C.black,
              color: on ? C.orange : C.mute, fontSize: 13, fontWeight: on ? 600 : 500,
              transition: "all .14s", fontFamily: "inherit",
              display: "inline-flex", alignItems: "center", gap: 7,
            }}>
              <span style={{ width: 14, height: 14, borderRadius: 2, border: `1px solid ${on ? C.orange : C.faint}`, background: on ? C.orange : "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#000", fontWeight: 900 }}>{on ? "✓" : ""}</span>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- buttons / shared styles ---------- */
const btnPrimary = {
  cursor: "pointer", border: "none", background: C.orange, color: "#000",
  fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 13.5,
  letterSpacing: "0.05em", textTransform: "uppercase", padding: "12px 22px",
  borderRadius: 2, transition: "transform .12s, box-shadow .12s",
};
const btnGhost = {
  cursor: "pointer", border: `1px solid ${C.line}`, background: "transparent", color: C.mute,
  fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 12.5,
  letterSpacing: "0.05em", textTransform: "uppercase", padding: "12px 18px",
  borderRadius: 2, transition: "all .14s",
};
const errStyle = {
  marginTop: 16, padding: "11px 14px", background: "rgba(243,110,33,0.1)",
  border: `1px solid ${C.orangeDim}`, borderRadius: 2, color: C.orange, fontSize: 13,
};

/* ============================================================
   FAQ  —  53 Q&A, 7 sections, accordion + search + jump nav
   ============================================================ */
function FAQ({ nav }) {
  const [open, setOpen] = useState({});     // key `${si}-${qi}` -> bool
  const [query, setQuery] = useState("");
  const sectionRefs = useRef({});

  const q = query.trim().toLowerCase();
  const matches = (item) =>
    !q ||
    item.q.toLowerCase().includes(q) ||
    item.a.some((b) =>
      (b.p && b.p.toLowerCase().includes(q)) ||
      (b.ul && b.ul.some((x) => x.toLowerCase().includes(q)))
    );

  const filtered = FAQ_SECTIONS.map((s) => ({ ...s, items: s.items.map((it, qi) => ({ it, qi })).filter(({ it }) => matches(it)) }))
    .filter((s) => s.items.length > 0);

  const totalHits = filtered.reduce((n, s) => n + s.items.length, 0);

  function toggle(key) { setOpen((p) => ({ ...p, [key]: !p[key] })); }
  function jump(id) {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{ background: `linear-gradient(180deg, ${C.ink} 0%, ${C.black} 100%)`, minHeight: "calc(100vh - 64px)" }}>
      {/* hero */}
      <div style={{ background: `linear-gradient(160deg, ${C.steelHi} 0%, ${C.ink} 55%, ${C.black} 100%)`, borderBottom: `1px solid ${C.line}`, position: "relative", overflow: "hidden" }}>
        <Diagonals />
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "38px 22px 30px", position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.orange, fontWeight: 700 }}>Hyper Racer X1</div>
          <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 40, letterSpacing: "-0.02em", margin: "6px 0 12px", textTransform: "uppercase" }}>Frequently Asked Questions</h1>
          <p style={{ color: C.mute, fontSize: 14.5, maxWidth: 680, margin: 0, lineHeight: 1.55 }}>{FAQ_INTRO}</p>

          {/* search */}
          <div style={{ marginTop: 22, position: "relative", maxWidth: 460 }}>
            <input
              value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the FAQ — engine, downforce, cost, where can I run it…"
              style={{
                width: "100%", boxSizing: "border-box", background: C.black,
                border: `1px solid ${C.line}`, borderRadius: 2, padding: "13px 14px 13px 40px",
                color: C.text, fontSize: 14, outline: "none", fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = C.orange)}
              onBlur={(e) => (e.target.style.borderColor = C.line)}
            />
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.faint, fontSize: 15 }}>⌕</span>
            {q && <div style={{ marginTop: 8, fontSize: 12.5, color: C.mute }}>{totalHits} {totalHits === 1 ? "match" : "matches"}</div>}
          </div>
        </div>
      </div>

      <div className="faq-grid" style={{ maxWidth: 920, margin: "0 auto", padding: "26px 22px 70px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 30 }}>
        {/* jump nav */}
        <div style={{ position: "sticky", top: 84, alignSelf: "start" }} className="faq-jump">
          <div style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: C.faint, fontWeight: 700, marginBottom: 12 }}>Sections</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {FAQ_SECTIONS.map((s, i) => (
              <button key={s.id} onClick={() => jump(s.id)} style={{
                textAlign: "left", cursor: "pointer", background: "transparent", border: "none",
                color: C.mute, padding: "8px 10px", borderRadius: 2, fontSize: 13, fontFamily: "inherit",
                borderLeft: `2px solid ${C.line}`, transition: "all .14s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.orange; e.currentTarget.style.borderLeftColor = C.orange; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.mute; e.currentTarget.style.borderLeftColor = C.line; }}>
                <span style={{ color: C.orange, fontWeight: 700, marginRight: 7, fontSize: 11 }}>{String(i + 1).padStart(2, "0")}</span>{s.title}
              </button>
            ))}
          </div>
        </div>

        {/* accordions */}
        <div>
          {filtered.length === 0 && (
            <div style={{ padding: "40px 0", color: C.mute }}>No questions match "{query}". Try a different word.</div>
          )}
          {filtered.map((s) => {
            const si = FAQ_SECTIONS.findIndex((x) => x.id === s.id);
            return (
              <div key={s.id} ref={(el) => (sectionRefs.current[s.id] = el)} style={{ marginBottom: 30, scrollMarginTop: 80 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 14, color: C.orange }}>{String(si + 1).padStart(2, "0")}</span>
                  <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>{s.title}</h2>
                </div>
                <div style={{ color: C.faint, fontSize: 12.5, marginBottom: 14, paddingLeft: 26 }}>{s.blurb}</div>
                <div style={{ height: 2, width: 48, background: C.orange, margin: "0 0 14px 26px" }} />

                <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, overflow: "hidden" }}>
                  {s.items.map(({ it, qi }) => {
                    const key = `${si}-${qi}`;
                    const isOpen = open[key] || (q && true); // auto-open when searching
                    return <FAQItem key={key} item={it} open={isOpen} onToggle={() => toggle(key)} forceOpen={!!q} />;
                  })}
                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div style={{ marginTop: 36, padding: "26px 24px", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 4, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: C.orange }} />
            <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 6 }}>Still have questions?</div>
            <p style={{ color: C.mute, fontSize: 14, margin: "0 0 18px", maxWidth: 540 }}>Submit your interest and the Hyper Racer USA team will follow up with the right info, demo updates, and U.S. program news.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => nav("event")} style={btnPrimary}>Register interest →</button>
              <button onClick={() => nav("full")} style={btnGhost}>Full interest form →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ item, open, onToggle, forceOpen }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.line}` }}>
      <button
        onClick={forceOpen ? undefined : onToggle}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          width: "100%", textAlign: "left", cursor: forceOpen ? "default" : "pointer",
          background: hover && !forceOpen ? C.panel : C.ink, border: "none",
          padding: "15px 18px", display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 14, color: C.text, fontFamily: "inherit", transition: "background .14s",
        }}>
        <span style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.35 }}>{item.q}</span>
        <span style={{
          flexShrink: 0, width: 22, height: 22, display: "inline-flex", alignItems: "center", justifyContent: "center",
          color: open ? C.orange : C.mute, fontSize: 18, transition: "transform .2s",
          transform: open ? "rotate(45deg)" : "none",
        }}>+</span>
      </button>
      {open && (
        <div style={{ padding: "2px 18px 18px", animation: "fadeUp .25s ease both" }}>
          {item.a.map((b, i) => b.p
            ? <p key={i} style={{ color: C.mute, fontSize: 13.8, lineHeight: 1.6, margin: "0 0 10px" }}>{b.p}</p>
            : <ul key={i} style={{ margin: "0 0 12px", paddingLeft: 2, listStyle: "none" }}>
                {b.ul.map((x, j) => (
                  <li key={j} style={{ color: C.mute, fontSize: 13.8, lineHeight: 1.5, margin: "0 0 5px", paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 7, width: 5, height: 5, borderRadius: 5, background: C.orange }} />{x}
                  </li>
                ))}
              </ul>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <div style={{ background: "#000", borderTop: `1px solid ${C.line}`, padding: "26px 22px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo size={26} />
          <div style={{ fontSize: 12, color: C.faint }}>
            X1 Racer North America · Lead CRM <span style={{ color: C.orange }}>demo</span>
          </div>
        </div>
        <div style={{ fontSize: 11.5, color: C.faint, letterSpacing: "0.06em" }}>
          Contact: Lou Werner · lou@x1racer.com
        </div>
      </div>
    </div>
  );
}

/* ---------- global css ---------- */
function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
      * { -webkit-font-smoothing: antialiased; }
      ::placeholder { color: ${C.faint}; }
      button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid ${C.orange}; outline-offset: 1px; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideIn { from { transform: translateX(40px); opacity: .6; } to { transform: none; opacity: 1; } }
      @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
      @media (max-width: 720px) {
        .faq-jump { display: none !important; }
        .faq-grid { grid-template-columns: 1fr !important; }
      }
      ::-webkit-scrollbar { width: 10px; height: 10px; }
      ::-webkit-scrollbar-track { background: ${C.black}; }
      ::-webkit-scrollbar-thumb { background: ${C.steel}; border-radius: 6px; }
    `}</style>
  );
}
