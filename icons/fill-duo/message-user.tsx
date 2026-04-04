import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageUser({
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
          d="M14.25 11C15.0784 11 15.75 10.3284 15.75 9.5C15.75 8.67157 15.0784 8 14.25 8C13.4216 8 12.75 8.67157 12.75 9.5C12.75 10.3284 13.4216 11 14.25 11Z"
          fill={fill}
        />
        <path
          d="M16.3511 16H12.149C11.7423 16 11.3585 15.8013 11.1217 15.4683C10.8893 15.1407 10.8287 14.7207 10.9596 14.3453C11.4479 12.943 12.7701 12.0001 14.2501 12.0001C15.7301 12.0001 17.0523 12.943 17.5411 14.3458C17.6715 14.7208 17.6109 15.1407 17.3785 15.4684C17.1417 15.8014 16.7578 16 16.3511 16Z"
          fill={fill}
        />
        <path
          d="M3.75 1.5C2.23054 1.5 1 2.73203 1 4.25V11.25C1 12.768 2.23054 14 3.75 14H5V16.25C5 16.5383 5.16526 16.8011 5.42511 16.926C5.68496 17.0509 5.99339 17.0158 6.21852 16.8357L9.43508 14.2624C9.46009 14.1242 9.49598 13.987 9.543 13.852C9.94559 12.6963 10.7454 11.7573 11.7578 11.1706C11.4371 10.6931 11.25 10.1184 11.25 9.5C11.25 7.84312 12.5932 6.5 14.25 6.5C15.4798 6.5 16.5369 7.24005 17 8.29915V4.25C17 2.73203 15.7695 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageUser;
