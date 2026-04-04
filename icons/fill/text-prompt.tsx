import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextPrompt({
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
          d="M8 12.5H2.75C2.336 12.5 2 12.164 2 11.75C2 11.336 2.336 11 2.75 11H8C8.414 11 8.75 11.336 8.75 11.75C8.75 12.164 8.414 12.5 8 12.5Z"
          fill={fill}
        />
        <path
          d="M15.205 8.5H2.75C2.336 8.5 2 8.164 2 7.75C2 7.336 2.336 7 2.75 7H15.205C15.619 7 15.955 7.336 15.955 7.75C15.955 8.164 15.619 8.5 15.205 8.5Z"
          fill={fill}
        />
        <path
          d="M15.25 4.5H2.75C2.336 4.5 2 4.164 2 3.75C2 3.336 2.336 3 2.75 3H15.25C15.664 3 16 3.336 16 3.75C16 4.164 15.664 4.5 15.25 4.5Z"
          fill={fill}
        />
        <path
          d="M16.4873 12.5381L14.5928 11.9072L13.9615 10.0127C13.8594 9.707 13.5728 9.5 13.2501 9.5C12.9274 9.5 12.6407 9.707 12.5387 10.0127L11.9074 11.9072L10.0129 12.5381C9.70668 12.6406 9.50018 12.9268 9.50018 13.25C9.50018 13.5732 9.70668 13.8594 10.0129 13.9619L11.9074 14.5928L12.5387 16.4873C12.6408 16.793 12.9274 17 13.2501 17C13.5728 17 13.8595 16.793 13.9615 16.4873L14.5928 14.5928L16.4873 13.9619C16.7935 13.8594 17 13.5732 17 13.25C17 12.9268 16.7935 12.6406 16.4873 12.5381Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TextPrompt;
