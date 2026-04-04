import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneLanding({
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
          d="M15.25,16H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6.212,5.624l4.766,.767-2.454-4.055c-.308-.506-.843-.82-1.429-.842l-1.438-.062c-.254-.018-.498,.109-.646,.317-.146,.209-.178,.478-.082,.714l1.282,3.161Z"
          fill={fill}
        />
        <path
          d="M16.611,9.445c-.336-.465-.834-.769-1.396-.854l-10.484-1.688-.598-1.301c-.25-.537-.778-.87-1.404-.87h0l-1.073,.032c-.226,.006-.438,.115-.574,.295-.138,.18-.186,.413-.132,.633l.588,2.397c.153,.635,.543,1.177,1.099,1.525l2.089,1.312c.277,.174,.582,.291,.908,.347l8.931,1.498c.112,.019,.224,.027,.335,.027,1.029,0,1.904-.737,2.082-1.753,.098-.566-.032-1.135-.368-1.601Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PlaneLanding;
