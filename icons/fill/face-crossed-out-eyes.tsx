import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceCrossedOutEyes({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-2.28,9.28l-.72-.72-.72,.72c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l.72-.72-.72-.72c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.72,.72,.72-.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-.72,.72,.72,.72c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22Zm3.28,2.72h-2c-.276,0-.5-.224-.5-.5,0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5c0,.276-.224,.5-.5,.5Zm3.78-3.78c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-.72-.72-.72,.72c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l.72-.72-.72-.72c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.72,.72,.72-.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-.72,.72,.72,.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceCrossedOutEyes;
