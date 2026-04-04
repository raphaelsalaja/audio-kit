import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AbstractCircle({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M12 21C17.5228 21 22 19.2091 22 17V14L21.5898 15.1533L20.5 16L15.5 18H8.5L3 16L2 14V17C2 19.2091 6.47715 21 12 21Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M2 14V17C2 19.2091 6.47715 21 12 21C17.5228 21 22 19.2091 22 17V14"
          stroke={fill}
        />
        <path
          d="M17.5 4L18.3271 6.22266L18.6025 7.88867L17.7246 10.667L16.3457 12.6113L13.3125 14L9.6543 13.7227L8 12.6113L7.37402 11.7783C12.0275 14.6914 19.4921 9.75034 16.3896 2.91699L17.5 4Z"
          fill={secondaryfill}
          fillOpacity=".3"
          fillRule="evenodd"
        />
        <path
          d="M17.5 10.6588C20.2111 11.3743 22 12.6036 22 14C22 16.2091 17.5228 18 12 18C6.47715 18 2 16.2091 2 14C2 12.6036 3.78889 11.3743 6.5 10.6588"
          stroke={fill}
        />
        <path
          d="M12 14C15.5898 14 18.5 11.0898 18.5 7.5C18.5 3.91015 15.5898 1 12 1C8.41015 1 5.5 3.91015 5.5 7.5C5.5 11.0898 8.41015 14 12 14Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M11 6C12.0702 5.12766 12.5791 3.9804 12.1366 3.43754C11.6941 2.89467 10.4678 3.16178 9.3976 4.03411C8.32737 4.90646 7.81849 6.05371 8.26099 6.59658C8.70347 7.13944 9.92978 6.87235 11 6Z"
          stroke={fill}
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

export default AbstractCircle;
