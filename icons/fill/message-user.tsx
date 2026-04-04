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
          fill={secondaryfill}
        />
        <path
          d="M16.3511 16H12.149C11.7423 16 11.3585 15.8013 11.1217 15.4683C10.8893 15.1407 10.8287 14.7207 10.9596 14.3453C11.4479 12.943 12.7701 12.0001 14.2501 12.0001C15.7301 12.0001 17.0523 12.943 17.5411 14.3458C17.6715 14.7208 17.6109 15.1407 17.3785 15.4684C17.1417 15.8014 16.7578 16 16.3511 16Z"
          fill={secondaryfill}
        />
        <path
          d="M11.7578 11.1706C10.7455 11.7573 9.94583 12.6958 9.54325 13.8514C9.49634 13.9861 9.4603 14.1235 9.4353 14.2614L6.219 16.835C6.083 16.944 5.917 17 5.75 17C5.64 17 5.529 16.976 5.425 16.926C5.165 16.801 5 16.538 5 16.25V14H3.75C2.233 14 1 12.767 1 11.25V4.25C1 2.733 2.233 1.5 3.75 1.5H14.25C15.767 1.5 17 2.733 17 4.25V8.29915C16.5369 7.24005 15.4798 6.5 14.25 6.5C12.5932 6.5 11.25 7.84312 11.25 9.5C11.25 10.1184 11.4371 10.6931 11.7578 11.1706Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MessageUser;
