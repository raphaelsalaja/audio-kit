import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading3({
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
          d="M1.75 4C2.16421 4 2.5 4.33579 2.5 4.75V8.25H7V4.75C7 4.33579 7.33579 4 7.75 4C8.16421 4 8.5 4.33579 8.5 4.75V13.25C8.5 13.6642 8.16421 14 7.75 14C7.33579 14 7 13.6642 7 13.25V9.75H2.5V13.25C2.5 13.6642 2.16421 14 1.75 14C1.33579 14 1 13.6642 1 13.25V4.75C1 4.33579 1.33579 4 1.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 4.75C10 4.33579 10.3358 4 10.75 4H16.292C16.6053 4 16.8856 4.19473 16.9949 4.48832C17.1042 4.78192 17.0195 5.11252 16.7825 5.3174L14.3835 7.39107C15.1212 7.53658 15.823 7.88722 16.3381 8.44195C17.6589 9.8454 17.4524 11.813 16.3186 12.983C15.7044 13.6167 14.6072 14.028 13.4838 13.9989C12.3146 13.9685 11.0446 13.4613 10.1366 12.1641C9.89904 11.8247 9.98158 11.3571 10.3209 11.1196C10.6603 10.882 11.1279 10.9646 11.3654 11.3039C11.9714 12.1697 12.7759 12.48 13.5227 12.4994C14.3153 12.52 14.9756 12.2133 15.2414 11.939C15.8676 11.293 15.9691 10.2386 15.2459 9.47003C14.666 8.85393 13.6393 8.63682 12.4748 8.93808C12.1376 9.02533 11.7846 8.86883 11.6228 8.56029C11.461 8.25175 11.533 7.87242 11.7965 7.64458L14.2775 5.5H10.75C10.3358 5.5 10 5.16421 10 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Heading3;
