import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenSparkle({
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
          d="M5.75 16.25L6.75 13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25L11.25 13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.426 2.75H3.75C2.645 2.75 1.75 3.646 1.75 4.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H14.25C15.355 13.25 16.25 12.354 16.25 11.25V8.97711"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.4873 3.03809L15.5928 2.40723L14.9615 0.512695C14.8594 0.206995 14.5728 0 14.2501 0C13.9274 0 13.6407 0.206995 13.5387 0.512695L12.9074 2.40723L11.0129 3.03809C10.7067 3.14059 10.5002 3.4268 10.5002 3.75C10.5002 4.0732 10.7067 4.35941 11.0129 4.46191L12.9074 5.09277L13.5387 6.9873C13.6408 7.293 13.9274 7.5 14.2501 7.5C14.5728 7.5 14.8595 7.293 14.9615 6.9873L15.5928 5.09277L17.4873 4.46191C17.7935 4.35941 18 4.0732 18 3.75C18 3.4268 17.7935 3.14059 17.4873 3.03809Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenSparkle;
