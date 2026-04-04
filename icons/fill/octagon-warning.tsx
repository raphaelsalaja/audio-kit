import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonWarning({
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
          d="M15.6939 5.08789L12.9119 2.30621C12.3919 1.78621 11.7019 1.5 10.9669 1.5H7.03192C6.29692 1.5 5.60692 1.78611 5.08702 2.30621L2.30502 5.08789C1.78502 5.60789 1.49902 6.29792 1.49902 7.03302V10.9681C1.49902 11.7032 1.78502 12.3931 2.30502 12.9132L5.08702 15.6952C5.60702 16.2152 6.29702 16.5011 7.03192 16.5011H10.9669C11.7019 16.5011 12.3919 16.2152 12.9119 15.6952L15.6939 12.9132C16.2139 12.3932 16.4999 11.7032 16.4999 10.9681V7.03302C16.4999 6.29792 16.2139 5.60799 15.6939 5.08789ZM8.24992 5.43121C8.24992 5.01711 8.58582 4.68121 8.99992 4.68121C9.41402 4.68121 9.74992 5.01711 9.74992 5.43121V9.5C9.74992 9.9141 9.41402 10.25 8.99992 10.25C8.58582 10.25 8.24992 9.9141 8.24992 9.5V5.43121ZM8.99992 13.417C8.44792 13.417 7.99992 12.968 7.99992 12.417C7.99992 11.866 8.44792 11.417 8.99992 11.417C9.55192 11.417 9.99992 11.866 9.99992 12.417C9.99992 12.968 9.55192 13.417 8.99992 13.417Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OctagonWarning;
