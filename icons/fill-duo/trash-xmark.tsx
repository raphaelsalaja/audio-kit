import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TrashXmark({
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
          d="M3.40771 5L3.90252 14.3892C3.97872 15.8531 5.18471 17 6.64861 17H11.3527C12.8166 17 14.0226 15.853 14.0988 14.3896L14.5936 5H3.40771Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 4H12V2.75C12 1.7852 11.2148 1 10.25 1H7.75C6.7852 1 6 1.7852 6 2.75V4H2.75C2.3359 4 2 4.3359 2 4.75C2 5.1641 2.3359 5.5 2.75 5.5H15.25C15.6641 5.5 16 5.1641 16 4.75C16 4.3359 15.6641 4 15.25 4ZM7.5 2.75C7.5 2.6143 7.6143 2.5 7.75 2.5H10.25C10.3857 2.5 10.5 2.6143 10.5 2.75V4H7.5V2.75Z"
          fill={fill}
        />
        <path
          d="M10.0605 10.5L11.2983 9.26003C11.5913 8.97003 11.5913 8.49007 11.2983 8.19997C11.0053 7.91007 10.5307 7.91007 10.2378 8.19997L8.99999 9.43996L7.76218 8.19997C7.46918 7.91007 6.99458 7.91007 6.70168 8.19997C6.40878 8.48997 6.40868 8.96993 6.70168 9.26003L7.93948 10.5L6.70168 11.74C6.40868 12.03 6.40868 12.51 6.70168 12.8001C6.84818 12.94 7.04008 13.0202 7.23198 13.0202C7.42388 13.0202 7.61578 12.94 7.76228 12.8001L9.00008 11.5601L10.2379 12.8001C10.3844 12.94 10.5763 13.0202 10.7682 13.0202C10.9601 13.0202 11.152 12.94 11.2985 12.8001C11.5915 12.5101 11.5915 12.0301 11.2985 11.74L10.0605 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TrashXmark;
