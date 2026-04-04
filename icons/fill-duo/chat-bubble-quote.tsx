import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleQuote({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V16.25C1.5 16.5383 1.66526 16.8011 1.92511 16.926C2.18496 17.0509 2.49339 17.0158 2.71852 16.8357L6.26309 14H13.75C15.2692 14 16.5 12.7692 16.5 11.25V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.1231 5.4784C8.27309 5.86451 8.08169 6.2991 7.69558 6.44909C7.26988 6.61447 7.00407 6.82431 6.82672 7.12006C6.70462 7.32369 6.60328 7.60345 6.54726 7.99999H7.75C8.16421 7.99999 8.5 8.33577 8.5 8.74999V10.25C8.5 10.6642 8.16421 11 7.75 11H5.75C5.33579 11 5 10.6642 5 10.25V8.74999C5 7.77959 5.16024 6.98244 5.54028 6.34867C5.93093 5.69717 6.50212 5.30351 7.15242 5.05089C7.53852 4.9009 7.97311 5.0923 8.1231 5.4784Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6231 5.4784C12.7731 5.86451 12.5817 6.2991 12.1956 6.44909C11.7699 6.61447 11.5041 6.82431 11.3267 7.12006C11.2046 7.32369 11.1033 7.60345 11.0473 7.99999H12.25C12.6642 7.99999 13 8.33577 13 8.74999V10.25C13 10.6642 12.6642 11 12.25 11H10.25C9.83579 11 9.5 10.6642 9.5 10.25V8.74999C9.5 7.77959 9.66024 6.98244 10.0403 6.34867C10.4309 5.69717 11.0021 5.30351 11.6524 5.05089C12.0385 4.9009 12.4731 5.0923 12.6231 5.4784Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleQuote;
