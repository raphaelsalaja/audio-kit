import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageClock({
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
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3125 13.9502C16.1934 14.2398 15.9141 14.415 15.6191 14.415C15.5234 14.415 15.4277 14.3969 15.3339 14.3588L13.7148 13.6938C13.4336 13.5781 13.25 13.3042 13.25 13V11.25C13.25 10.8359 13.5859 10.5 14 10.5C14.4141 10.5 14.75 10.8359 14.75 11.25V12.4971L15.9043 12.9712C16.2871 13.1284 16.4707 13.5669 16.3125 13.9502Z"
          fill={fill}
        />
        <path
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V8.39123C16.1369 7.82773 15.1063 7.5 14 7.5C10.9654 7.5 8.5 9.96609 8.5 13C8.5 13.6211 8.60331 14.2183 8.79367 14.7755L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageClock;
