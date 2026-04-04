import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpRightDownLeft({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9.819,1.611c-.374-.533-1.264-.533-1.638,0l-1.968,2.807c-.215,.307-.242,.704-.069,1.036,.173,.332,.513,.539,.887,.539h3.938c.375,0,.714-.207,.887-.539,.173-.333,.146-.729-.068-1.036l-1.969-2.807Z"
          fill={fill}
        />
        <path
          d="M16.389,8.181l-2.807-1.968c-.307-.216-.704-.241-1.036-.069-.332,.173-.539,.513-.539,.887v3.938c0,.375,.207,.714,.539,.887,.146,.076,.304,.113,.462,.113,.202,0,.402-.061,.574-.182l2.807-1.969c.267-.187,.426-.493,.426-.819s-.159-.632-.426-.819Z"
          fill={secondaryfill}
        />
        <path
          d="M10.969,12.007h-3.938c-.375,0-.714,.207-.887,.539-.173,.333-.146,.729,.068,1.036l1.969,2.807c.187,.267,.493,.426,.819,.426s.632-.159,.819-.426l1.968-2.807c.215-.307,.242-.704,.069-1.036-.173-.332-.513-.539-.887-.539Z"
          fill={fill}
        />
        <path
          d="M5.454,6.144c-.333-.172-.729-.146-1.036,.068l-2.807,1.969c-.267,.187-.426,.493-.426,.819s.159,.632,.426,.819l2.807,1.968c.172,.121,.373,.182,.574,.182,.158,0,.316-.038,.462-.113,.332-.173,.539-.513,.539-.887v-3.938c0-.375-.207-.714-.539-.887Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CaretUpRightDownLeft;
