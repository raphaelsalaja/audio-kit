import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextHighlight2({
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
          d="M11.1021 2.6887L5.07549 8.7157C4.48969 9.3017 4.48969 10.2517 5.07549 10.8367L7.6628 13.4247C8.2486 14.0097 9.1983 14.0097 9.7841 13.4247L15.8107 7.3977C16.3965 6.8117 16.3965 5.8627 15.8107 5.2767L13.2234 2.6887C12.6376 2.1037 11.6879 2.1037 11.1021 2.6887Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.23939 15.2598L4.83609 15.6631C4.75819 15.741 4.64819 15.7777 4.53909 15.7621L1.91049 15.3866C1.62279 15.3455 1.50549 14.9936 1.71099 14.7881L3.23929 13.2598L5.23939 15.2598Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5214 3.97771L10.4034 8.0957"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.1021 2.6887L5.07549 8.7157C4.48969 9.3017 4.48969 10.2517 5.07549 10.8367L7.6628 13.4247C8.2486 14.0097 9.1983 14.0097 9.7841 13.4247L15.8107 7.3977C16.3965 6.8117 16.3965 5.8627 15.8107 5.2767L13.2234 2.6887C12.6376 2.1037 11.6879 2.1037 11.1021 2.6887Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default TextHighlight2;
