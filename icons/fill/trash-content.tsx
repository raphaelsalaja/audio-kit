import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TrashContent({
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
          d="M9.73289 3L8.57209 1.64697C8.24399 1.25687 7.76449 1.03077 7.25759 1.02637H7.24199C6.73709 1.02637 6.25759 1.24471 5.92659 1.62451L4.71509 3H9.73289Z"
          fill={secondaryfill}
        />
        <path
          d="M11.3386 3.00004H13.3146L12.2617 1.77202C11.9922 1.45752 11.5185 1.42346 11.2041 1.69096C10.8896 1.96046 10.8535 2.43418 11.123 2.74858L11.3386 3.00004Z"
          fill={secondaryfill}
        />
        <path
          d="M14.3711 4.23389C14.2295 4.08449 14.0332 4 13.8272 4H4.17482C3.96872 4 3.77252 4.08449 3.63092 4.23389C3.48932 4.38279 3.41512 4.58396 3.42582 4.78906L3.90332 13.8995C3.97952 15.3575 5.18652 16.5001 6.64942 16.5001H11.3525C12.8154 16.5001 14.0224 15.3575 14.0986 13.899L14.5761 4.78906C14.5868 4.58396 14.5127 4.38289 14.3711 4.23389Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TrashContent;
