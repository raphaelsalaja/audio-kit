import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ruler({
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
          d="M13.243 1.57634L16.4237 4.757C17.1087 5.44047 17.1077 6.54877 16.4244 7.23227L13.5504 10.1063L11.7169 8.27283C11.424 7.97993 10.9491 7.97993 10.6562 8.27283C10.3633 8.56572 10.3633 9.04059 10.6562 9.33349L12.4897 11.167L11.4368 12.2199L10.2846 11.0677C9.99169 10.7749 9.51682 10.7749 9.22392 11.0677C8.93103 11.3606 8.93103 11.8355 9.22392 12.1284L10.3761 13.2806L9.32318 14.3335L7.48968 12.5C7.19678 12.2071 6.72191 12.2071 6.42902 12.5C6.13612 12.7929 6.13612 13.2678 6.42902 13.5607L8.26251 15.3942L7.23234 16.4243C6.54905 17.1076 5.44116 17.1088 4.75768 16.4243L1.57637 13.243C0.891838 12.5595 0.892459 11.451 1.57562 10.7676L10.7677 1.57566C11.4511 0.892227 12.5596 0.891414 13.243 1.57634ZM12.75 4.75C12.75 5.164 12.414 5.5 12 5.5C11.586 5.5 11.25 5.164 11.25 4.75C11.25 4.336 11.586 4 12 4C12.414 4 12.75 4.336 12.75 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Ruler;
