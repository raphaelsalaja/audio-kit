import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DecisionProcess({
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
          d="M1 3.25C1 2.28379 1.78379 1.5 2.75 1.5H6.75C7.71621 1.5 8.5 2.28379 8.5 3.25V4.75C8.5 5.71621 7.71621 6.5 6.75 6.5H2.75C1.78379 6.5 1 5.71621 1 4.75V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 13.25C1 12.2838 1.78379 11.5 2.75 11.5H6.75C7.71621 11.5 8.5 12.2838 8.5 13.25V14.75C8.5 15.7162 7.71621 16.5 6.75 16.5H2.75C1.78379 16.5 1 15.7162 1 14.75V13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path d="M5.5 11.5H4V6.5H5.5V11.5Z" fill={fill} />
        <path
          d="M13.9522 6.06672C13.737 5.91573 13.4809 5.82437 13.1987 5.83826C12.9257 5.85169 12.7079 5.96003 12.5567 6.06088L9.70809 7.95997C8.96615 8.45476 8.96576 9.5453 9.70809 10.0401L12.552 11.9361C12.7268 12.056 12.9628 12.1688 13.2542 12.1672C13.5445 12.1656 13.7773 12.0507 13.9445 11.9385L13.946 11.9375L16.792 10.0401C17.534 9.54535 17.5344 8.45482 16.792 7.95997L13.9522 6.06672Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.25 4.75C12.3878 4.75 12.5 4.86221 12.5 5V6.09867L12.5567 6.06088C12.7079 5.96003 12.9257 5.85169 13.1987 5.83826C13.4809 5.82437 13.737 5.91573 13.9522 6.06672L14 6.09858V5C14 4.03379 13.2162 3.25 12.25 3.25H8.5V4.75H12.25Z"
          fill={fill}
        />
        <path
          d="M14 13C14 13.9662 13.2162 14.75 12.25 14.75H8.5V13.25H12.25C12.3878 13.25 12.5 13.1378 12.5 13V11.9014L12.552 11.9361C12.7268 12.056 12.9628 12.1688 13.2542 12.1672C13.5445 12.1656 13.7773 12.0507 13.9445 11.9385L13.946 11.9375L14 11.9015V13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DecisionProcess;
