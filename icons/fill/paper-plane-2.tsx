import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane2({
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
          d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane2;
