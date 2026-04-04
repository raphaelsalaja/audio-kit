import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToBottomRight({
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
          d="M13.742 14H4.25C2.733 14 1.5 12.767 1.5 11.25V5.75C1.5 4.233 2.733 3 4.25 3H13.75C15.267 3 16.5 4.233 16.5 5.75V8.75C16.5 9.164 16.164 9.5 15.75 9.5C15.336 9.5 15 9.164 15 8.75V5.75C15 5.061 14.439 4.5 13.75 4.5H4.25C3.561 4.5 3 5.061 3 5.75V11.25C3 11.939 3.561 12.5 4.25 12.5H13.742C14.156 12.5 14.492 12.836 14.492 13.25C14.492 13.664 14.156 14 13.742 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.25 16.985C11.058 16.985 10.866 16.912 10.72 16.765C10.427 16.472 10.427 15.997 10.72 15.704L13.182 13.242L10.72 10.78C10.427 10.487 10.427 10.012 10.72 9.71899C11.013 9.42599 11.488 9.42599 11.781 9.71899L14.773 12.711C15.066 13.004 15.066 13.479 14.773 13.772L11.781 16.765C11.635 16.911 11.442 16.985 11.25 16.985Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowBackToBottomRight;
