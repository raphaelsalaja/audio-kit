import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Expand2({
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
          d="M8 2H4.75C3.233 2 2 3.233 2 4.75V8C2 8.414 2.336 8.75 2.75 8.75C3.164 8.75 3.5 8.414 3.5 8V4.75C3.5 4.061 4.061 3.5 4.75 3.5H8C8.414 3.5 8.75 3.164 8.75 2.75C8.75 2.336 8.414 2 8 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 9.25C14.836 9.25 14.5 9.586 14.5 10V13.25C14.5 13.939 13.939 14.5 13.25 14.5H10C9.586 14.5 9.25 14.836 9.25 15.25C9.25 15.664 9.586 16 10 16H13.25C14.767 16 16 14.767 16 13.25V10C16 9.586 15.664 9.25 15.25 9.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 2H11C10.586 2 10.25 2.336 10.25 2.75C10.25 3.164 10.586 3.5 11 3.5H13.439L10.469 6.46997C10.176 6.76297 10.176 7.23801 10.469 7.53101C10.615 7.67701 10.807 7.75098 10.999 7.75098C11.191 7.75098 11.383 7.67801 11.529 7.53101L14.499 4.56097V7C14.499 7.414 14.835 7.75 15.249 7.75C15.663 7.75 15.999 7.414 15.999 7V2.75C15.999 2.336 15.663 2 15.249 2H15.25Z"
          fill={fill}
        />
        <path
          d="M7.52999 10.47C7.23699 10.177 6.76199 10.177 6.46899 10.47L3.49899 13.44V11.001C3.49899 10.587 3.16299 10.251 2.74899 10.251C2.33499 10.251 1.99899 10.587 1.99899 11.001V15.251C1.99899 15.665 2.33499 16.001 2.74899 16.001H6.99999C7.41399 16.001 7.74999 15.665 7.74999 15.251C7.74999 14.837 7.41399 14.501 6.99999 14.501H4.56099L7.53099 11.531C7.82399 11.238 7.82299 10.763 7.52999 10.47Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Expand2;
